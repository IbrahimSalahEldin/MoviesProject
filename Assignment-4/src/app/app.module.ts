import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component'; 
import { DatePipe } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ContentComponent } from './content/content.component';
import { MoviesListComponent } from './content/movies-list/movies-list.component';
import { RoomsComponent } from './content/rooms/rooms.component';
import { RouterModule } from '@angular/router';

@NgModule({
  
  declarations: [AppComponent, HeaderComponent, FooterComponent, ContentComponent, MoviesListComponent, RoomsComponent],
  imports: [BrowserModule, FormsModule,  RouterModule],
  providers: [DatePipe],
  bootstrap: [AppComponent],

})
export class AppModule {}
