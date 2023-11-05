import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import { Observable } from 'rxjs';
import { UnitResponse } from '../types/units-response.interface';

@Injectable({
  providedIn: 'root'
})
export class GetUnitsService {

  readonly apiUrl = "https://test-frontend-developer.s3.amazonaws.com/data/locations.json";

  constructor(private httpClient: HttpClient) { }

  getAllUnits(): Observable<UnitResponse>{
    return this.httpClient.get<UnitResponse>(this.apiUrl);
  }
}
