import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

import { DashboardComponent } from './dashboard.component';
import { DashboardRoutingModule } from './dashboard-routing.module';
import { ValuesService } from 'app/shared/services/values.service';
import { CommonModule } from '@angular/common';
import { LibraryService } from 'app/shared/services/library.service';
import { LocalCacheService } from 'app/shared/services/local-cache.service';
import { LocalStorageService } from 'app/shared/services/local-storage.service';

@NgModule({
  imports: [
    FormsModule,
    HttpClientModule,
    DashboardRoutingModule,
    CommonModule
  ],
  declarations: [ DashboardComponent ],
  providers: [
    ValuesService,
    LibraryService,
    LocalCacheService,
    LocalStorageService
  ]
})
export class DashboardModule { }
