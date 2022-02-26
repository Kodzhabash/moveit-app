import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MoveitComponentsModule } from 'moveit-components';

import { MovieBrowserModule } from './movie-browser/movie-browser.module';
import { MovieLibraryModule } from './movie-library/movie-library.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MoveitComponentsModule,
    MovieBrowserModule,
    MovieLibraryModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
