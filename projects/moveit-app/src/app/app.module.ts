import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MoveitComponentsModule } from 'moveit-components';

import { MovieBrowserModule } from './movie-browser/movie-browser.module';
import { MovieLibraryModule } from './movie-library/movie-library.module';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { MovieBrowserService } from './movie-browser/services/movie-browser.service';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    MoveitComponentsModule,
    MovieBrowserModule,
    MovieLibraryModule,
    StoreModule.forRoot({}),
    EffectsModule.forRoot([])
  ],
  providers: [
    MovieBrowserService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
