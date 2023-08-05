import { Component } from '@angular/core';
import { DatePipe } from '@angular/common';
import { CollegeInfo } from './college-info.model';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent {
  collegeInfo: CollegeInfo;
  currentDate: string;

  constructor(private datePipe: DatePipe) {
    // Replace the information with your actual college and campus details
    this.collegeInfo = new CollegeInfo('Sheridan College', 'Oakvil');

    // Get the current date and format it using the DatePipe
    const currentDate = new Date();
    this.currentDate = this.datePipe.transform(currentDate, 'MMM d, y')!;
  }
}
