import { Injectable } from '@angular/core';
import { Character } from '../interfaces/character.interface';
import { v4 as uuid } from 'uuid'
@Injectable({ providedIn: 'root' })
export class DbzService {
  public characters: Character[] = [{
    id: uuid(),
    name: 'Goku',
    power: 1,
  },
  {
    id: uuid(),
    name: 'Veggeta',
    power: 10,
  },
  {
    id: uuid(),
    name: 'Piccolo',
    power: 20,
  }]

  addCharacter(character: Character): void {
    const newCharacter: Character = {
      id: uuid(), ...character

    }
    this.characters.push(newCharacter);
  }
  //    this.character.splice(index, 1);
  deleteCharacterById(id: string): void {
    this.characters = this.characters.filter(character => character.id !== id);
  }
}
