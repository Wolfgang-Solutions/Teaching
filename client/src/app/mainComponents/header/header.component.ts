import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  public links = [
    {
      "id":1,
      "name":"pricing",
      "dest":"/pricing"
    },
    {
      "id":2,
      "name":"downloads",
      "dest":"/download"
    },
    {
      "id":3,
      "name":"subjects",
      "dest":"/subjects"
    }
  ];

  constructor() { }

  ngOnInit(): void {
  }

  
}
