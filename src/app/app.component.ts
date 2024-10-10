import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  eyelash: any = 'dbz';
  title = 'Curso Udemy!';

  options(value:string) {
    this.eyelash = value;
  }

}
