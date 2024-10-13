import { Component, Input } from '@angular/core';
import { Character } from '../interfaces/character.interface';
import { dbzService } from '../services/dbz.service';

@Component({
    selector: 'app-dbz-main-page',
    templateUrl: 'main-pages.component.html'
})

export class DbzMainComponent {

    constructor(private dbzService: dbzService) { }

    get characters(): Character[] {
        return [...this.dbzService.characters];
    }

    onDeleteCharacter(id: string): void {
        this.dbzService.deleteCharacterById(id)
    }

    onNewCharacter(character: Character): void {
        this.dbzService.onNewCharacter(character)
    }
}