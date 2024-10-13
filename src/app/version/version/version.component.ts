import { Component } from '@angular/core';

@Component({
  selector: 'app-version',
  templateUrl: './version.component.html',
  styleUrl: './version.component.css'
})
export class VersionComponent {
version:string = '1.3.1'
}
