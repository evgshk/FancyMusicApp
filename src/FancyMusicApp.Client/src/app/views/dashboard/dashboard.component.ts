import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CommonModule} from '@angular/common'
import { LibraryService } from 'app/shared/services/library.service';
import { SearchResultModel } from 'app/shared/models/search-result.model';
import { LocalCacheService } from 'app/shared/services/local-cache.service';

@Component({
  templateUrl: 'dashboard.component.html'
})
export class DashboardComponent implements OnInit {

  data: SearchResultModel;
  searchTerm: string = 'Jack Johnson';

  constructor(
    private libraryService: LibraryService,
    public localCache: LocalCacheService
  ) { }

  ngOnInit(): void {
    this.searchAlbums();
  }

  searchAlbums(){
    let requestObservable = this.libraryService.searchAlbums(this.searchTerm); 

    this.localCache.observable(this.searchTerm, requestObservable, 300).subscribe(
      (result) => this.data = result,
      (err) => console.error(err),
      () => console.log("items successfully loaded.")
    );

    // this.libraryService.searchAlbums(this.searchTerm).subscribe(
    //   (result) => this.data = result,
    //   (err) => console.error(err),
    //   () => console.log("items successfully loaded.")
    // );
  }
}
