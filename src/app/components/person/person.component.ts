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
    this.newPersonForm = this.fb.group({
      name: ['Person1', Validators.required],
      birthday: '1/1/2001',
      fastFacts: 'This is actually a premade person'
    });

    this.personService.shareDataSubject.subscribe(receivedData=>{
      this.people = receivedData;
    });

    this.route.params.subscribe(p=>{
      console.log("params", p);
      this.initializeState(p.id);
    })
  }

  initializeState(id){
    // this.newPersonForm.controls['name'].setValue('ohayou');
    // this.newPersonForm.controls['name'].setValue(this.people[id].name);
    // this.newPersonForm.controls = this.people.id.map((attr) => [attr]);
    this.newPersonForm = this.fb.group(this.people[id]);
  }

}
