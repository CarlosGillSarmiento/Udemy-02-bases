import { Component, Input } from '@angular/core';
import { Character } from '../interfaces/character.interface';
import { dbzService } from '../services/dbz.service';

@Component({
    selector: 'app-dbz-main-page',
    templateUrl: 'main-pages.component.html'
})

export class DbzMainComponent {

    constructor(public dbzService: dbzService){
    }
}