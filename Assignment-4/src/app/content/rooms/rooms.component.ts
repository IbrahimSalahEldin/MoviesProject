import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-rooms',
  templateUrl: './rooms.component.html',
  styleUrls: ['./rooms.component.scss']
})

export class RoomsComponent {
  movies: any;
  data:any;
  constructor(private http: HttpClient) {}
  ngOnInit() {
    this.http.get('assets/movies.json').subscribe((data: any) => {

      this.movies= data;
      // console.log(data); 
    });
  }

  room1(){

  }
 
  
}
