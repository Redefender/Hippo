import { Component, OnInit } from '@angular/core';
import { PersonService } from '../../services/person.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {
  people =[
    {
      'name': 'test',
      'fastFacts': 'This is to see',
      'birthday':'1/1/2001'
    },
    {
      'name': 'John',
      'fastFacts': 'Why Hello there',
      'birthday':'3/4/2000'
    }
  ]
  constructor(private personService: PersonService) {
    this.personService.shareDataSubject.subscribe(receivedData=>{
      console.log(receivedData);
      this.people.push(receivedData);
    })
   }

  ngOnInit() {
  }

}
