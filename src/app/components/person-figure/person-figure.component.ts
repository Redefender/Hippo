import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-person-figure',
  templateUrl: './person-figure.component.html',
  styleUrls: ['./person-figure.component.css']
})
export class PersonFigureComponent implements OnInit {
  @Input() name: string;
  constructor() { 

  }

  ngOnInit() {
    
  }

}
