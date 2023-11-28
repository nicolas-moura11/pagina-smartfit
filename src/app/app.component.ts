import { Component } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Location } from './types/location.interface';
import { GetUnitsService } from './services/get-units.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  showList = new BehaviorSubject(false);
  
  onSubmit(){
    console.log("chegou no app");
  }
}