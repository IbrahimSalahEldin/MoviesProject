import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContentComponent } from './content/content.component';
import { MoviesListComponent } from './content/movies-list/movies-list.component';
import { RoomsComponent } from './content/rooms/rooms.component';


const routes: Routes = [
  {path: '', component: ContentComponent},
  {path:'content/movies-list',component: MoviesListComponent},
  {path:'content/rooms',component: RoomsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
