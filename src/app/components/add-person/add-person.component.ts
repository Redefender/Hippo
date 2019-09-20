import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-add-person',
  templateUrl: './add-person.component.html',
  styleUrls: ['./add-person.component.css']
})
export class AddPersonComponent implements OnInit {
  form = new FormGroup({
    name: new FormControl('', Validators.required),
    birthday: new FormControl('1/1/2001')
  });
  constructor() { }

  ngOnInit() {

  }

  onSubmit(): void {
    console.log(this.form.value);
  }

}
