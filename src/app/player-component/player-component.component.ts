import { Component } from '@angular/core';
import { StateService } from '../state.service';

@Component({
  selector: 'app-player-component',
  templateUrl: './player-component.component.html',
  styleUrls: ['./player-component.component.css']
})

export class PlayerComponentComponent {

  setItem = function(nameInput, footballPowerInput, accuracyInput, staminaInput, teamInput) {
    this.stateService.setItem(nameInput.value, footballPowerInput.value, accuracyInput.value, staminaInput.value, teamInput.value);
    nameInput.value = '';
    footballPowerInput.value = '';
    accuracyInput.value = '';
    staminaInput.value = '';
    teamInput.value = this.stateService.state.teamList[0];
  }

  onDelete = function(id) {
    this.stateService.onDelete(id);
  }

  onEdit = function(id) {
    this.stateService.onEdit(id);
  }

  onEditSubmit = function(nameInputEdited, footballPowerInputEdited, accuracyInputEdited, staminaInputEdited, teamInputEdited, id) {
    this.stateService.onEditSubmit(nameInputEdited.value, footballPowerInputEdited.value, accuracyInputEdited.value, staminaInputEdited.value, teamInputEdited.value, id);
    nameInputEdited.value = '';
    footballPowerInputEdited.value = '';
    accuracyInputEdited.value = '';
    staminaInputEdited.value = '';
    teamInputEdited.value = this.stateService.state.teamList[0].name;
  }

  constructor(private stateService: StateService) {}

}
