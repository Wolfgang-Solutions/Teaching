import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-pricing',
  templateUrl: './pricing.component.html',
  styleUrls: ['./pricing.component.scss']          
})
export class PricingComponent implements OnInit {

  public plans = [
    {"name":"Basic" , "price": 1000},
    {"name":"Premium" , "price": 2000},
    {"name":"Pro" , "price": 3000},
    {"name":"Advanced" , "price": 4000}
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
