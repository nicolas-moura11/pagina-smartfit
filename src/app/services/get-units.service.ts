import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import { BehaviorSubject, Observable, of } from 'rxjs';
import { UnitResponse } from '../types/units-response.interface';
import { Location } from '/home/desktop/Documents/curso/pagina-smartfit/src/app/types/location.interface';


@Injectable({
  providedIn: 'root'
})
export class GetUnitsService {

  readonly apiUrl = "https://test-frontend-developer.s3.amazonaws.com/data/locations.json";

  private allUnitsSubject: BehaviorSubject<Location[]> = new BehaviorSubject<Location[]>([]);
  private allUnits$: Observable<Location[]> = this.allUnitsSubject.asObservable();
  private filteredUnits: Location[] = []

  constructor(private httpClient: HttpClient) {
    this.httpClient.get<UnitResponse>(this.apiUrl).subscribe(data => {
      this.allUnitsSubject.next(data.locations);
      this.filteredUnits = data.locations;
    });
   }

  getAllUnits(): Observable<Location[]>{
    return this.allUnits$;
  }

  getFilteredUnits(){
    return this.filteredUnits;
  }

  setFilteredUnits(value: Location[]){
    this.filteredUnits = value;


  }
}
