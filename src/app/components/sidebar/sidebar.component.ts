import { Component, OnInit } from '@angular/core';
import { PersonService } from '../../services/person.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {
  people: any;
  constructor(private personService: PersonService) {
    
    this.people = this.personService.getPeople();    
    
  }

  ngOnInit() {
    this.personService.shareDataSubject.subscribe(receivedData=>{
      this.people = receivedData;
    });
  }

}
