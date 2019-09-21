import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { PersonService } from 'src/app/services/person.service';

@Component({
  selector: 'app-person',
  templateUrl: './person.component.html',
  styleUrls: ['./person.component.css']
})
export class PersonComponent implements OnInit {
  
  newPersonForm : FormGroup;
  constructor(private fb: FormBuilder) { }

  ngOnInit() {
    this.newPersonForm = this.fb.group({
      name: ['Person1', Validators.required],
      birthday: '1/1/2001',
      fastFacts: 'This is actually a premade person'
    });
  }

}
