import { Component, OnInit, Input, Output, OnChanges, EventEmitter, SimpleChanges } from '@angular/core';
import { FormsModule, ReactiveFormsModule, FormControl, FormGroup, FormBuilder, NgForm } from '@angular/forms';

@Component({
  selector: 'app-personal-info',
  templateUrl: './personal-info.component.html',
  styleUrls: ['./personal-info.component.css']
})
export class PersonalInfoComponent implements OnInit {

  @Input() myForm: FormGroup;
  @Output() formReady = new EventEmitter<FormGroup>();
  personalForm: FormGroup;
  public first_name:string;
  public last_name:string;
  public email:string;

  constructor(private fb: FormBuilder) { }

  ngOnInit() {
    this.personalForm = this.fb.group({
      first_name: null,
      last_name: null,
      email: null
    });

    // Emit the form group to the father to do whatever it wishes
    this.formReady.emit(this.personalForm);
  }

  ngDoCheck() {
    this.personalForm.patchValue({
        first_name: this.first_name,
        last_name: this.last_name,
        email: this.email
    });    
    this.formReady.emit(this.personalForm);
  }
}
