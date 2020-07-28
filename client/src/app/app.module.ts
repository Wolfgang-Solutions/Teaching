import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
// import {NoopAnimationsModule} from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';

import { SubjectsComponent } from './subjects/subjects.component';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { DownloadComponent } from './download/download.component';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { MainComponent } from './main/main.component';
import { PostCreateComponent } from './posts/post-create/post-create.component';
import { PricingComponent } from './pricing/pricing.component';


@NgModule({
  declarations: [
    PostCreateComponent,
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
    // NoopAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
