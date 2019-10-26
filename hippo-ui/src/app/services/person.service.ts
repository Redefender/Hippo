import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams} from '@angular/common/http';
import { Subject } from 'rxjs/';
import { Person } from '../components/person/person';

@Injectable({
  providedIn: 'root'
})
export class PersonService {
  people: any;
  shareDataSubject = new Subject<any>();
  
  constructor() {
    this.people =[
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
   }

  sendDataToOtherComponent(someData){
    if(someData){
      this.people.push(someData);
      this.shareDataSubject.next(this.people);
    
    }

    
      
  }

  getPeople(): any{    
    return this.people;
  }
  
  addPerson(person: Person){
    this.people.push(person);
  }
  
  
}
