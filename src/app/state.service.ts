import { Injectable } from '@angular/core';

@Injectable()
export class StateService {

  constructor() {}

  initData =
    {
      teamList:
      [{
         name: 'Player not in team',
         id: 0,
         autoEdit: false
      },
      {
         name: 'none1',
         id: 1,
         autoEdit: false
      },
      {
         name: 'none2',
         id: 2,
         autoEdit: false
      },
      {
         name: 'none3',
         id: 3,
         autoEdit: false
      },
      {
         name: 'none5',
         id: 4,
         autoEdit: false
      }],
      playerList:
        [{
         name: 'Lisztes',
         footballPower: 10,
         accuracy: 10,
         stamina: 10,
         team: 'Player not in team',
         id: 0,
         autoEdit: false
        },
        {
          name: 'Ronaldo',
          footballPower: 8,
          accuracy: 7,
          stamina: 6,
          team: 'Player not in team',
          id: 1,
          autoEdit: false
        },
        {
          name: 'Zidan',
          footballPower: 8,
          accuracy: 9,
          stamina: 7,
          team: 'Player not in team',
          id: 2,
          autoEdit: false
        },
        {
          name: 'Gera',
          footballPower: 11,
          accuracy: 10,
          stamina: 8,
          team: 'Player not in team',
          id: 3,
          autoEdit: false
        },
        {
          name: 'Lisztes',
          footballPower: 12,
          accuracy: 8,
          stamina: 13,
          team: 'Player not in team',
          id: 4,
          autoEdit: false
        },
        {
          name: 'Böde',
          footballPower: 8,
          accuracy: 5,
          stamina: 15,
          team: 'Player not in team',
          id: 5,
          autoEdit: false
        }]
    };

  setState = function(object) {
    this.state = object;
  }

  getState = function() {
    return this.state;
  }

  // The change of the State can only happen through this function.
  stateChange = function(data) {
    this.setState(data);
    if (localStorage.getItem('soccer-manager-hf-angular')) {
      localStorage.setItem('soccer-manager-hf-angular', JSON.stringify(data));
    }
  }

  dataInitialiser = function() {
    if (!localStorage.getItem('soccer-manager-hf-angular')) {
      localStorage.setItem('soccer-manager-hf-angular', JSON.stringify(this.initData));
    }
    return JSON.parse(localStorage.getItem('soccer-manager-hf-angular'));
  }

  state = this.dataInitialiser();

  idSetter = function(playerList, tempId = 0) {
    Object.keys(playerList).forEach(function(key) {
      playerList[key].autoEdit = false;

      if (playerList[key].id >= tempId) {
        tempId = playerList[key].id + 1;
      }
    });

    return tempId
  }

  setItem = function(nameValue, footballPowerValue, accuracyValue, staminaValue, team) {
    let currentState = this.getState();
    let player = {
      name: nameValue,
      footballPower: footballPowerValue,
      accuracy: accuracyValue,
      stamina: staminaValue,
      id: this.idSetter(currentState.playerList),
      team: team,
      autoEdit: false
    }

    currentState.playerList.push(player);
    this.stateChange(currentState);
  };

  setTeam = function(team) {
    let currentState = this.getState();

    currentState.teamList.push(team);
    this.stateChange(currentState);
  };

  onDelete = function(id) {
    let playerList = this.getState().playerList;
    let newState = this.getState();

    let filteredPlayerList = playerList.filter(player => {
      return player.id !== id;
    })

    newState.playerList = filteredPlayerList;
    this.stateChange(newState);
  }

  onEdit = function(id) {
    let playerList = this.getState().playerList;
    let newState = this.getState();

    let updatedPlayerList = playerList.map(player => {
      if (player.id === id) {
        player.autoEdit = !player.autoEdit;
      }
      return player;
    })

    newState.playerList = updatedPlayerList;
    this.stateChange(newState);
  }

  onEditSubmit = function(nameValue, footballPowerValue, accuracyValue, staminaValue, teamValue, id) {
    let playerList = this.getState().playerList;
    let newState = this.getState();

    let updatedPlayerList = playerList.map(player => {
      if (player.id === id) {
        player.name = nameValue;
        player.footballPower = footballPowerValue;
        player.accuracy = accuracyValue;
        player.stamina = staminaValue;
        player.team = teamValue;
        player.autoEdit = false;
      }
      return player;
    })

    newState.playerList = updatedPlayerList;
    this.stateChange(newState);
  }

  onEditTeam = function(id) {
    let teamList = this.getState().teamList;
    let newState = this.getState();

    let updatedTeamList = teamList.map(team => {
      if (team.id === id) {
        team.autoEdit = !team.autoEdit;
      }
      return team;
    })
    console.log(updatedTeamList)

    newState.teamList = updatedTeamList;
    this.stateChange(newState);
  }

  onEditSubmitTeam = function(nameValue, id) {
    let teamList = this.getState().teamList;
    let newState = this.getState();

    let updatedTeamList = teamList.map(team => {
      if (team.id === id) {
        team.name = nameValue;
        team.autoEdit = false;
      }
      return team;
    })

    newState.teamList = updatedTeamList;
    this.stateChange(newState);
  }

}
