import { Component, OnInit, APP_INITIALIZER } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { PersonService } from 'src/app/services/person.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-person',
  templateUrl: './person.component.html',
  styleUrls: ['./person.component.css']
})
export class PersonComponent implements OnInit {
  people:any;
  newPersonForm : FormGroup;

  constructor(private fb: FormBuilder, 
    private personService: PersonService, private route: ActivatedRoute) {

    this.people = this.personService.getPeople();
  }

  ngOnInit() {
    this.personService.shareDataSubject.subscribe(receivedData=>{
      this.people = receivedData;
    });

    this.route.params.subscribe(p=>{
      this.initializeState(p.id);
    })
  }

  initializeState(id){
    this.newPersonForm = this.fb.group(this.people[id]);
  }

}
