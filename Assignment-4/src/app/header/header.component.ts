import { Component } from '@angular/core';
import { HeaderInfo } from './header-info.model';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  headerInfo: HeaderInfo;

  constructor() { this.headerInfo = new HeaderInfo('Summer 2023 Assignment #4', 'Molham Altraboulsi', 'Syria'); }
}
