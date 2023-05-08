import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { TopHeadingComponent } from './top-heading/top-heading.component';
import { MaterialModule } from './material/material.module';
import { HttpClientModule } from '@angular/common/http';
import { TechnologyComponent } from './technology/technology.component';
import { BusinessComponent } from './business/business.component';
import { SportsComponent } from './sports/sports.component';

@NgModule({
  declarations: [
    AppComponent,
    TopHeadingComponent,
    TechnologyComponent,
    BusinessComponent,
    SportsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
