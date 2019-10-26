import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class WebService {
  private url:string = 'http://localhost:3000/api/v1/generate_guid';

  constructor(private http: HttpClient) { }

  getGuid(){
    console.log('within get guid');
    return this.http.get(this.url);
  }
}
