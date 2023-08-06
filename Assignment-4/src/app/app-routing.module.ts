// app-routing.module.ts
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContentComponent } from './content/content.component';
import { MoviesListComponent } from './content/movies-list/movies-list.component';
import { RoomsComponent } from './content/rooms/rooms.component';

const routes: Routes = [
  {
    path: '',component: ContentComponent,children: [
      { path: 'movies-list', component: MoviesListComponent },
      { path: 'rooms', component: RoomsComponent },
      {path: '',component: MoviesListComponent}
    ]
  },
  // Add a wildcard route to redirect to ContentComponent in case of an invalid route
  { path: '**', redirectTo: '' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
