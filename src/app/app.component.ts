import { Component } from '@angular/core';
import { FormsModule, ReactiveFormsModule, FormControl, FormGroup,FormBuilder } from '@angular/forms';
import { BugInfo } from './bug-info';
import { PersonalInfoComponent } from './personal-info/personal-info.component';
import { BugInfoComponent } from './bug-info/bug-info.component';
import { FooterComponent } from './footer/footer.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'assignment9';

  buginfoform: FormGroup;
  status:boolean =false;
  mapped:any;

  constructor(private fb: FormBuilder) {}

  public buginfo = new BugInfo('','','','','','','');

  ngOnInit() {
    this.buginfoform = this.fb.group({});
  }

  public formInitialized(name: string, form: FormGroup) {
    this.buginfoform.setControl(name, form);  
     
    if(name == 'personal'){
      this.buginfo.first_name = form.value.first_name;
      this.buginfo.last_name = form.value.last_name;
      this.buginfo.email = form.value.email;
    } 
    if(name == 'bug'){
      this.buginfo.bug_found_date = form.value.bug_found_date;
      this.buginfo.bug_found_time = form.value.bug_found_time;
      this.buginfo.impact = form.value.impact;
      this.buginfo.details = form.value.details;
    }
  }

  onSubmitted(){
    this.status = true;
    this.mapped = Object.entries(this.buginfo).map(([type, value]) => ({type, value}));
    console.log(this.mapped);
    console.log(this.buginfoform);
  }
}
