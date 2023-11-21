import { Location } from 'src/app/types/location.interface';

import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { GetUnitsService } from 'src/app/services/get-units.service';
import { FilterUnitsService } from 'src/app/services/filter-units.service';





@Component({
  selector: 'app-forms',
  templateUrl: './forms.component.html',
  styleUrls: ['./forms.component.scss']
})
export class FormsComponent implements OnInit{
  results: Location[] = [];
  filteredResults: Location[] = [];
  formGroup!: FormGroup;
  
  constructor(
    private formBuilder: FormBuilder, 
    private unitService: GetUnitsService, 
    private filterUnitsServices: FilterUnitsService ) { }

  ngOnInit(): void {
    this.formGroup = this.formBuilder.group({
      hour: '',
      showClosed: false
    });
  
    this.unitService.getAllUnits().subscribe(data => {
      this.results = data;
      this.filteredResults = data;
    });
  }


 
  onSubmit(): void{
   let {showClosed, hour} = this.formGroup.value
   this.filteredResults = this.filterUnitsServices.filter(this.results, showClosed, hour)
   this.unitService.setFilteredUnits(this.filteredResults);
  }

  onClean() : void{
    console.log(this.formGroup.reset())
  }
}
