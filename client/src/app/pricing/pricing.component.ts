import { Component, OnInit } from '@angular/core';
import { PlansService } from '../plans.service';


@Component({
  selector: 'app-pricing',
  templateUrl: './pricing.component.html',
  styleUrls: ['./pricing.component.scss']          
})
export class PricingComponent implements OnInit {

  plans: Object;

  constructor(private _http: PlansService) { }

  ngOnInit(): void {
    this._http.getSubject().subscribe(data => {
      this.plans = data
      console.log(this.plans);
      }
    );
  }

}
