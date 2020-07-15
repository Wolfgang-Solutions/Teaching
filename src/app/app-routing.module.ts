import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {PricingComponent} from './pricing/pricing.component';
import {DownloadComponent} from './download/download.component';


const routes: Routes = [ 
  { path: 'pricing' , component: PricingComponent },
  { path: 'download' , component: DownloadComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
