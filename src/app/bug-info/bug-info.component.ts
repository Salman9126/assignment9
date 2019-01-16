import { Component, OnInit, Input, Output, EventEmitter, SimpleChanges } from '@angular/core';
import { FormsModule, ReactiveFormsModule, FormControl, FormGroup, FormBuilder, NgForm } from '@angular/forms';

@Component({
  selector: 'app-bug-info',
  templateUrl: './bug-info.component.html',
  styleUrls: ['./bug-info.component.css']
})
export class BugInfoComponent implements OnInit {

  @Input() myForm: FormGroup;
  @Output() formReady = new EventEmitter<FormGroup>();
  buginfoForm: FormGroup;
  //public buginfo:any;
  public bug_found_date:any;
  public bug_found_time:any;
  public impact:string;
  public details:any;

  constructor(private fb: FormBuilder) {   
  }

  ngOnInit() {
    
    this.bug_found_date = new Date();
    this.bug_found_time = new Date();

    this.buginfoForm = this.fb.group({
      bug_found_date: null,
      bug_found_time: null,
      impact: null,
      details: null
    });

    // Emit the form group to the father to do whatever it wishes
    this.formReady.emit(this.buginfoForm);
  }

  onDateChange(newDate: Date) {
    console.log(newDate);
  }

  ngDoCheck() {
    this.buginfoForm.patchValue({
      bug_found_date: this.bug_found_date,
      bug_found_time: this.bug_found_time.getTime(),
      impact: this.impact,
      details: this.details
    });
    this.formReady.emit(this.buginfoForm);
  }

}
