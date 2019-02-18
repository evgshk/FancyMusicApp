
import {fromEvent as observableFromEvent, merge as observableMerge,  Observable, of } from 'rxjs';

import {map} from 'rxjs/operators';
import { Component, OnInit } from '@angular/core';
import { LibraryService } from 'app/shared/services/library.service';
import { LocalCacheService } from 'app/shared/services/local-cache.service';



@Component({
  templateUrl: 'dashboard.component.html'
})
export class DashboardComponent implements OnInit {

  data: any;
  searchTerm: string = 'Jack Johnson';
  online$: Observable<boolean>; 

  constructor(private libraryService: LibraryService, public localCache: LocalCacheService) {
    this.online$ = observableMerge(
      of(navigator.onLine),
      observableFromEvent(window, 'online').pipe(map(() => true)),
      observableFromEvent(window, 'offline').pipe(map(() => false)));
  }

  ngOnInit(): void {
    this.searchAlbums();
  }

  searchAlbums(){
    let requestObservable = this.libraryService.searchAlbums(this.searchTerm);
    
    // In a case connection exists we load data from API
    if (navigator.onLine) {
      requestObservable.subscribe(
          (result) => this.data = result,
          (err) => console.error(err),
          () => {
            // And cache it
            this.localCache.value(this.searchTerm.toUpperCase(), this.data, 60*60*24*365);
            console.log("items successfully cached.");
          }
        );
    } else { // Otherwise trying to load it from cache
      this.localCache.observable(this.searchTerm.toUpperCase()).subscribe(
          (result) => this.data = result
      );
    }
  }
}
