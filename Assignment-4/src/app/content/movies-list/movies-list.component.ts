
import { Component, OnInit } from '@angular/core';
// import { movies } from '../../../assets/movies.json';  
import { HttpClient } from '@angular/common/http';




@Component({
  selector: 'app-movies-list',
  templateUrl: './movies-list.component.html',
  styleUrls: ['./movies-list.component.scss']
})
export class MoviesListComponent implements OnInit {
    movies: any;

  constructor(private http: HttpClient) {}
  ngOnInit() {
    this.http.get('assets/movies.json').subscribe((data: any) => {
      this.movies= data;
      console.log(data); 
    });
  }
  
}