import { Component } from '@angular/core';
import { StateService } from '../state.service';

@Component({
  selector: 'app-todo-component',
  templateUrl: './todo-component.component.html',
  styleUrls: ['./todo-component.component.css']
})

export class TodoComponentComponent {

  state = this.stateService.state;

  setItem(nameinput, teaminput) {
    this.stateService.setItem(nameinput.value, teaminput.value);
    nameinput.value = '';
    teaminput.value = '';
  }

  onDelete(id) {
    this.stateService.onDelete(id);
    console.log(this.state)
  }

  constructor(private stateService: StateService) {}

}
