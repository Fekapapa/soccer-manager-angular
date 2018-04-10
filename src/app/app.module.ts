import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { StateService } from './state.service';
import { TodoComponentComponent } from './todo-component/todo-component.component';
import { ListComponentComponent } from './list-component/list-component.component';

const appRoutes: Routes = [
  { path: 'todo', component: TodoComponentComponent },
  { path: 'list', component: ListComponentComponent },
];

@NgModule({
  declarations: [
    AppComponent,
    TodoComponentComponent,
    ListComponentComponent
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
