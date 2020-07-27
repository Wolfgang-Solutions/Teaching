import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { PricingComponent } from './pricing/pricing.component';
import { DownloadComponent } from './download/download.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { FooterComponent } from './footer/footer.component';
import { MainComponent } from './main/main.component';
import { SubjectsComponent } from './subjects/subjects.component';
import { HttpClientModule } from '@angular/common/http';
import {NoopAnimationsModule} from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    PricingComponent,
    DownloadComponent,
    FooterComponent,
    MainComponent,
    SubjectsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    NoopAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
