import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Character } from '../../interfaces/character.interface';
import { v4 as uuid } from 'uuid';

@Component({
  selector: 'dbz-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent {

  @Output()
  public onDelete: EventEmitter<string> = new EventEmitter();

  @Input()
  public characterList: Character[] = [{
    id: uuid(),
    name: 'Trunk',
    power: 10
  }]

  // onDelete = index:number
  onDeleteCharacter(id?:string):void{
    if(!id) return;
    this.onDelete.emit(id);
    //  console.log({id});
  }



}
