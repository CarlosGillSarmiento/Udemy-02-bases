import { Injectable } from '@angular/core';
import { v4 as uuid } from "uuid";



import { Character } from '../interfaces/character.interface';

@Injectable({ providedIn: 'root' })
export class dbzService {

    constructor() { }

    public characters: Character[] = [{
        name: 'Goku', power: 10000, id: uuid()
    }, {
        name: 'Vegeta', power: 8000, id: uuid()
    }, {
        name: 'Piccoro', power: 6000, id: uuid()
    }, {
        name: 'krillin', power: 400, id: uuid()
    }, {
        name: 'Yamcha', power: 1, id: uuid()
    }]

    onNewCharacter(character: Character): void {
        const newCharacter: Character = { id: uuid(), ...character };
        this.characters.push(newCharacter);
    }

    onDelete(index: number): void {
        this.characters.splice(index, 1);
    }

}