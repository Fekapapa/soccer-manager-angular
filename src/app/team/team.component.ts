import { Component, OnInit } from '@angular/core';
import { StateService } from '../state.service';

@Component({
  selector: 'app-team',
  templateUrl: './team.component.html',
  styleUrls: ['./team.component.css']
})
export class TeamComponent {

  setTeam(teamInput) {
    this.stateService.setTeam(teamInput.value);
    teamInput.value = this.stateService.state.teamList[0];
  }

  onEditSubmitTeam(teamInputEdited, id) {
    this.stateService.onEditSubmitTeam(teamInputEdited.value, id);
  }

  onEditTeam(id) {
    this.stateService.onEditTeam(id);
  }

  constructor(private stateService: StateService) {}


}
