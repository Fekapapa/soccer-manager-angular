import { Injectable } from '@angular/core';

@Injectable()
export class StateService {

  constructor() {}

  initData =
    [
     {
       name: 'Lisztes',
       id: 0,
       team: 'none0',
       autoEdit: false
     },
     {
       name: 'Ronaldo',
       id: 1,
       team: 'none1',
       autoEdit: false
     },
     {
       name: 'Zidan',
       id: 2,
       team: 'none1',
       autoEdit: false
     },
     {
       name: 'Gera',
       id: 3,
       team: 'none2',
       autoEdit: false
     },
     {
       name: 'Dzsudzsák',
       id: 4,
       team: 'none2',
       autoEdit: false
     },
     {
       name: 'Balotelli',
       id: 5,
       team: 'none2',
       autoEdit: false
     },
     {
       name: 'Alma',
       id: 6,
       team: 'none3',
       autoEdit: false
     },
     {
       name: 'hangya',
       id: 7,
       team: 'none3',
       autoEdit: false
     },
     {
       name: 'Vue',
       id: 8,
       team: 'none3',
       autoEdit: false
     },
     {
       name: 'Piké',
       id: 9,
       team: 'none3',
       autoEdit: false
     }
   ];

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

  setItem = function(playerName, team) {
    let playerList = this.getState();
    let player = {
      name: playerName,
      id: this.idSetter(playerList),
      team: team,
      autoEdit: false
    }

    playerList.push(player);
    this.stateChange(playerList);
  };

  onDelete = function(id) {
    const playerList = this.getState();

    let filteredPlayerList = playerList.filter(player => {
      return player.id !== id;
    })
    this.stateChange(filteredPlayerList);
  }
}
