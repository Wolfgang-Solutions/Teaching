//library imports alphabetical
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

//custom components alphabetical
import {DownloadComponent} from './download/download.component';
import {MainComponent} from './mainComponents/main/main.component';
import {PricingComponent} from './pricing/pricing.component';
import {SubjectsComponent} from './subjects/subjects.component';


const routes: Routes = [ 
  { path: 'pricing' , component: PricingComponent },
  { path: 'download' , component: DownloadComponent },
  { path: 'subjects' , component: SubjectsComponent },
  { path: '', component: MainComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
