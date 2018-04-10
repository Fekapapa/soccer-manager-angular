import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { StateService } from './state.service';
import { TodoComponentComponent } from './todo-component/todo-component.component';
import { ListComponentComponent } from './list-component/list-component.component';
import { TeamComponent } from './team/team.component';

const appRoutes: Routes = [
  { path: 'soccer-players', component: TodoComponentComponent },
  { path: 'soccer-teams', component: TeamComponent },
  { path: 'soccer-list', component: ListComponentComponent },
];

@NgModule({
  declarations: [
    AppComponent,
    TodoComponentComponent,
    ListComponentComponent,
    TeamComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [
    StateService
  ],
  bootstrap: [AppComponent]
})

export class AppModule { }
