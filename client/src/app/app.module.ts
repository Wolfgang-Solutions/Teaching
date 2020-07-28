import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
// import {NoopAnimationsModule} from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatToolbarModule } from '@angular/material/toolbar';

// for declaration components
import { SubjectsComponent } from './subjects/subjects.component';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { DownloadComponent } from './download/download.component';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { MainComponent } from './main/main.component';
import { PostCreateComponent } from './posts/post-create/post-create.component';
import { PricingComponent } from './pricing/pricing.component';
import { PostListComponent } from './posts/post-list/post-list.component';


@NgModule({
  declarations: [
    PostListComponent,
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
    FormsModule,
    MatInputModule,
    MatCardModule,
    MatButtonModule,
    MatToolbarModule,
    // NoopAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
