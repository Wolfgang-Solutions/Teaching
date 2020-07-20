import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';

@Component({
  selector: 'app-subjects',
  templateUrl: './subjects.component.html',
  styleUrls: ['./subjects.component.scss']
})
export class SubjectsComponent implements OnInit {

  sub: Object;

  constructor(private _http: HttpService) { }

  ngOnInit() {
    this._http.getSubject().subscribe(data => {
      this.sub = data
      console.log(this.sub);
    }
  );
  }

}
