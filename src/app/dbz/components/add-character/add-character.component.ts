import { Component, EventEmitter, Output } from '@angular/core';
import { Character } from '../../interfaces/character.interface';

@Component({
  selector: 'dbz-add-character',
  templateUrl: './add-character.component.html',
  styleUrl: './add-character.component.css'
})
export class AddCharacterComponentComponent {

  @Output()
  public onNewCharacter: EventEmitter<Character> = new EventEmitter();

  public character: Character = {
    id : '',
    name:'',
    power:0
  };

  emitCharacter(){
    //  console.log(this.character)

    // debugger;

    if(this.character.name.length ===0 ) return;

    this.onNewCharacter.emit(this.character);

    // this.character.name = '';
    // this.character.power=0;

    this.character = {id: '', name: '', power:0}
  }

}
