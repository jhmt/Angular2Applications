import {Component} from '@angular/core';

@Component({
  selector: 'notepad',
  template: require('./notepad.html'),
  styles: [require('./notepad.css')]
})

export class NotepadComponent {
  public message: string;

  public save () : void {
    alert("saved");
  }
  
  public clear () : void {
    this.message = '';
  }
}
