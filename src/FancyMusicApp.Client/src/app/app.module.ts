import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { LocationStrategy, HashLocationStrategy } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';

// Import containers
import {
  FullLayoutComponent,
  SimpleLayoutComponent
} from './containers';

const APP_CONTAINERS = [
  FullLayoutComponent,
  SimpleLayoutComponent
]

// Import components
import {
  AppBreadcrumbsComponent,
  AppFooterComponent,
  AppHeaderComponent
} from './components';

const APP_COMPONENTS = [
  AppBreadcrumbsComponent,
  AppFooterComponent,
  AppHeaderComponent
]

// Import directives
import {
  ReplaceDirective,
} from './directives';

const APP_DIRECTIVES = [
  ReplaceDirective,
]

// Import routing module
import { AppRoutingModule } from './app.routing';

// Import 3rd party components
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { ModalModule } from 'ngx-bootstrap';
import { TabsModule } from 'ngx-bootstrap/tabs';

@NgModule({
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    BsDropdownModule.forRoot(),
    ModalModule.forRoot(),
    TabsModule.forRoot(),
    HttpClientModule
  ],
  declarations: [
    AppComponent,
    ...APP_CONTAINERS,
    ...APP_COMPONENTS,
    ...APP_DIRECTIVES
  ],
  providers: [{
    provide: LocationStrategy,
    useClass: HashLocationStrategy
  }],
  exports: [
    TabsModule
  ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
