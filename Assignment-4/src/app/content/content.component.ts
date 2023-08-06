import { Component } from '@angular/core';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.scss']
})
export class ContentComponent {
  activeButton: string = 'movies';
  setActiveButton(button: string) {
    this.activeButton = button;
  }
}
