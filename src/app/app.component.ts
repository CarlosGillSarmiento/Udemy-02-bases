import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  eyelash: any = 'list';
  title = '02-bases';

  options(value:string) {
    this.eyelash = value;
  }

}
