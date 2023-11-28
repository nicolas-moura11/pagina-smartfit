import { Component } from '@angular/core';
import { BehaviorSubject } from 'rxjs';


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


