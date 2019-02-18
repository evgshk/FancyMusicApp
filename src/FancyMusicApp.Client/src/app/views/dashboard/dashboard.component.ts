import { Component, OnInit } from '@angular/core';
import { LibraryService } from 'app/shared/services/library.service';
import { LocalCacheService } from 'app/shared/services/local-cache.service';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/fromEvent';
import 'rxjs/add/observable/merge';

@Component({
  templateUrl: 'dashboard.component.html'
})
export class DashboardComponent implements OnInit {

  data: any;
  searchTerm: string = 'Jack Johnson';
  online$: Observable<boolean>; 

  constructor(private libraryService: LibraryService, public localCache: LocalCacheService) {
    this.online$ = Observable.merge(
      Observable.of(navigator.onLine),
      Observable.fromEvent(window, 'online').map(() => true),
      Observable.fromEvent(window, 'offline').map(() => false));
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
