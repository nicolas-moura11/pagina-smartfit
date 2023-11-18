import { Location } from '/home/desktop/Documents/curso/pagina-smartfit/src/app/types/location.interface';

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
      this.results = data.locations;
      this.filteredResults = data.locations;
    });
  }


 
  onSubmit(): void{
   let {showClosed, hour} = this.formGroup.value
   this.filteredResults = this.filterUnitsServices.filter(this.results, showClosed, hour)
    
  }

  onClean() : void{
    console.log(this.formGroup.reset())
  }
}
