import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component'; 
import { DatePipe } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ContentComponent } from './content/content.component';


@NgModule({
  
  declarations: [AppComponent, HeaderComponent, FooterComponent, ContentComponent],
  imports: [BrowserModule, FormsModule],
  providers: [DatePipe],
  bootstrap: [AppComponent]
})
export class AppModule {}
