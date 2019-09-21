import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-person-figure',
  templateUrl: './person-figure.component.html',
  styleUrls: ['./person-figure.component.css']
})
export class PersonFigureComponent implements OnInit {
  name: string
  constructor() { 
    this.name = 'Ken';
  }

  ngOnInit() {
  }

}
