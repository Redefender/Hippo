import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams} from '@angular/common/http';
import { Subject } from 'rxjs/';

@Injectable({
  providedIn: 'root'
})
export class PersonService {
  shareDataSubject = new Subject<any>();

  constructor() { }

  sendDataToOtherComponent(someData){
     this.shareDataSubject.next(someData);
  }
}
