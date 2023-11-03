import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';


@Component({
  selector: 'app-forms',
  templateUrl: './forms.component.html',
  styleUrls: ['./forms.component.scss']
})
export class FormsComponent implements OnInit{
  results = [];
  formGroup!: FormGroup;
  
  constructor(private formBuilder: FormBuilder) { }

  ngOnInit(): void {
      this.formGroup = this.formBuilder.group({
        hour: '',
        showClosed: false
      })
  }
  
  onSubmit(): void{
    console.log(this.formGroup.value)
  }

  onClean() : void{
    console.log(this.formGroup.reset())
  }
}
