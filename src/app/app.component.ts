import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'pagina-smartfit';

  onSubmit(){
    console.log('chegou no app')
  }
}


