// library imports alphabetical
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { MDBBootstrapModule } from 'angular-bootstrap-md';

// custom components alphabetical
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DownloadComponent } from './download/download.component';
import { FooterComponent } from './mainComponents/footer/footer.component';
import { HeaderComponent } from './mainComponents/header/header.component';
import { MainComponent } from './mainComponents/main/main.component';
import { PricingComponent } from './pricing/pricing.component';
import { SubjectsComponent } from './subjects/subjects.component';
import { MaterialModule } from './material/material.module';

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
    MDBBootstrapModule.forRoot(),
    MaterialModule
  ],
  schemas: [
    NO_ERRORS_SCHEMA
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

