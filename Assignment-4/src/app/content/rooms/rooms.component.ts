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

  Room( room1:number){
    
  const newArr=[...this.movies];
  this.RandomMovies(newArr);
  const res=newArr.slice(0,room1);
  this.data=res;
  console.log(this.data);
  }
  RandomMovies(moviesData:any[]){
    for(let i=moviesData.length;i>0;i--) {
    const roomsRandom =Math.floor(Math.random()*(i+1));
[moviesData[i],moviesData[roomsRandom]]=[moviesData[roomsRandom],moviesData[i]]
    }
  }
}
