import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormBuilder, Validators} from '@angular/forms';
import { PersonService } from '../../services/person.service';
import { WebService } from 'src/app/services/web.service';
@Component({
  selector: 'app-add-person',
  templateUrl: './add-person.component.html',
  styleUrls: ['./add-person.component.css']
})
export class AddPersonComponent implements OnInit {
  newPersonForm : FormGroup;
  localData: any;
  constructor(private fb: FormBuilder,
    private personService: PersonService, private webService: WebService) { }

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

  test(){
    console.log('from add-person');
    this.webService.getGuid()
    .subscribe((data: any) => {
          this.localData = data;

    });
  }

}
