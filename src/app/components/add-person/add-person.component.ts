import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormBuilder, Validators} from '@angular/forms';
import { PersonService } from '../../services/person.service';
@Component({
  selector: 'app-add-person',
  templateUrl: './add-person.component.html',
  styleUrls: ['./add-person.component.css']
})
export class AddPersonComponent implements OnInit {
  newPersonForm : FormGroup;
  constructor(private fb: FormBuilder,
    private personService: PersonService) { }

  ngOnInit() {
    this.newPersonForm = this.fb.group({
      name: ['', Validators.required],
      birthday: '',
      fastFacts: ''
  
    });
  }

  onSubmit(): void {
    console.log(this.newPersonForm.value);
    
    this.personService.sendDataToOtherComponent(this.newPersonForm.value);
  }

}
