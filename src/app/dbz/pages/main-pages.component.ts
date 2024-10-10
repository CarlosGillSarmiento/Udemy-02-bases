import { Component, Input } from '@angular/core';
import { Character } from '../interfaces/character.interface';

@Component({
    selector: 'app-dbz-main-page',
    templateUrl: 'main-pages.component.html'
})

export class DbzMainComponent {

    public characters: Character[] = [{
        name: 'Goku', power: 10000
    },
    {
        name: 'Vegeta', power: 8000
    },
    {
        name: 'Piccoro', power: 6000
    },
    {
        name: 'krillin', power: 400
    },
    {
        name: 'Yamcha', power: 10
    }]

    onNewCharacter(character: Character): void {
        console.log("padre")
        console.log(character)
        this.characters.push(character);
    }
}