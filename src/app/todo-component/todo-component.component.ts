import { Component, OnInit } from '@angular/core';
import { StateService } from '../state.service';

@Component({
  selector: 'app-todo-component',
  templateUrl: './todo-component.component.html',
  styleUrls: ['./todo-component.component.css']
})

export class TodoComponentComponent implements OnInit {

  ngOnInit() {
  }

  items = [];
  data = {};
  state = [];

  initData = [
    {
        'title': 'hangya',
        'status': 0
    }]

  //  [
  //   {
  //     name: 'Lisztes',
  //     id: 0,
  //     team: 'none0',
  //     autoEdit: false
  //   },
  //   {
  //     name: 'Ronaldo',
  //     id: 1,
  //     team: 'none1',
  //     autoEdit: false
  //   },
  //   {
  //     name: 'Zidan',
  //     id: 2,
  //     team: 'none1',
  //     autoEdit: false
  //   },
  //   {
  //     name: 'Gera',
  //     id: 3,
  //     team: 'none2',
  //     autoEdit: false
  //   },
  //   {
  //     name: 'Dzsudzsák',
  //     id: 4,
  //     team: 'none2',
  //     autoEdit: false
  //   },
  //   {
  //     name: 'Balotelli',
  //     id: 5,
  //     team: 'none2',
  //     autoEdit: false
  //   },
  //   {
  //     name: 'Alma',
  //     id: 6,
  //     team: 'none3',
  //     autoEdit: false
  //   },
  //   {
  //     name: 'hangya',
  //     id: 7,
  //     team: 'none3',
  //     autoEdit: false
  //   },
  //   {
  //     name: 'Vue',
  //     id: 8,
  //     team: 'none3',
  //     autoEdit: false
  //   },
  //   {
  //     name: 'Piké',
  //     id: 9,
  //     team: 'none3',
  //     autoEdit: false
  //   }
  // ];


  constructor(private stateService: StateService) {
    if (!localStorage.getItem('soccer-manager-hf-angular')) {
      localStorage.setItem('soccer-manager-hf-angular', JSON.stringify(this.initData));
    } else {
      this.state = JSON.parse(localStorage.getItem('soccer-manager-hf-angular'));
    }
    let heroes = this.stateService.serviceData;
    console.log(heroes)
  }

  logger = function() {
    console.log(this.state);
  }

  setItem = function(value) {
    this.logger()
    this.data = {};
    this.data = {
        'title': value,
        'status': 0,
    }
    this.state.push(this.data);
    this.saveData();
  };

  saveData() {
    if (localStorage.getItem('soccer-manager-hf-angular')) {
      localStorage.setItem('soccer-manager-hf-angular', JSON.stringify(this.state));
    }
  }

  removeItem = function(index) {
    this.state.splice(index, 1);
  }

  readyCheck = function(e) {
    if (e.target.className === 'uncheck') {
      e.target.className = 'readycheck';
      console.log(e.target.className);
    }
    else if(e.target.className === 'readycheck') {
      e.target.className = 'uncheck';
      console.log(e.target.className);
    }
  }
}
