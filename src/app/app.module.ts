import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { StateService } from './state.service';
import { PlayerComponentComponent } from './player-component/player-component.component';
import { ListComponentComponent } from './list-component/list-component.component';
import { TeamComponent } from './team/team.component';

const appRoutes: Routes = [
  { path: 'soccer-players', component: PlayerComponentComponent },
  { path: 'soccer-teams', component: TeamComponent },
  { path: 'soccer-list', component: ListComponentComponent },
];

@NgModule({
  declarations: [
    AppComponent,
    PlayerComponentComponent,
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
