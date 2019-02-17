import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CommonModule} from '@angular/common'
import { LibraryService } from 'app/shared/services/library.service';
import { SearchResultModel } from 'app/shared/models/searchResult.model';

@Component({
  templateUrl: 'dashboard.component.html'
})
export class DashboardComponent implements OnInit {

  data: SearchResultModel;

  constructor(
    private libraryService: LibraryService
  ) { }

  ngOnInit(): void {
    this.searchAlbums();
  }

  searchAlbums(){
    this.libraryService.searchAlbums("skillet").subscribe(
      (result) => this.data = result,
      (err) => console.error(err),
      () => console.log("items successfully loaded.")
    );
  }
}
