import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MaterializeModule } from 'angular2-materialize';

import { APP_ROUTING } from './app.routes';

import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { HeaderComponent } from './components/header/header.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { VegetablesComponent } from './components/vegetables/vegetables.component';
import { VegetableDetailComponent } from './components/vegetable-detail/vegetable-detail.component';
import { VegetablesSearchComponent } from './components/vegetables-search/vegetables-search.component';
import { VegetablesListComponent } from './components/vegetables-list/vegetables-list.component';
import { AboutComponent } from './components/about/about.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderComponent,
    NavbarComponent,
    VegetablesComponent,
    VegetableDetailComponent,
    VegetablesSearchComponent,
    VegetablesListComponent,
    AboutComponent
  ],
  imports: [
    BrowserModule,
    MaterializeModule,
    APP_ROUTING
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
