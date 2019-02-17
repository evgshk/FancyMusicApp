import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ValuesService } from 'app/shared/services/values.service';

@Component({
  templateUrl: 'dashboard.component.html'
})
export class DashboardComponent implements OnInit {

  items: Array<string>;

  constructor(
    private valuesService: ValuesService
  ) { }

  ngOnInit(): void {
    this.fetchData();
  }

  fetchData() {
    this.valuesService.getItems().subscribe(
      (data) => this.items = data,
      (err) => console.error(err),
      () => console.log("items successfully loaded.")
    );
  }
}
