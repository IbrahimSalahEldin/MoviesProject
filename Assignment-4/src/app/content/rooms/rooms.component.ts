import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';


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
      console.log(data); 
    });
  }


  // shuffleArray(array: any[]) {
  //   for (let i = array.length - 1; i > 0; i--) {
  //     const j = Math.floor(Math.random() * (i + 1));
  //     [array[i], array[j]] = [array[j], array[i]];
  //   }
  // }

  
  // Rome(number: number) {
  //   const newarry = [...this.movies]; 
  //   this.shuffleArray(newarry); 
  //   const selectedMovies = newarry.slice(0, number);
  //   this.data = selectedMovies;
  //   console.log(selectedMovies);
  // }

  Rome1() {
    this.data = [];
    for (let i = 0; i < this.movies.length; i++) {
      const movieData = {
        name: this.movies[i].name,
        genre: this.movies[i].genre,
        running_time: this.movies[i].running_time,
        release_date: this.movies[i].release_date,
        ratings: this.movies[i].ratings,
        age_restriction: this.movies[i].age_restriction,
      };
      
      this.data.push(movieData);
      
      if (i === 1) {
        break;
      }
    }
    console.log('====================================');
    console.log(this.data);
    console.log('====================================');
   
  }
  
  Rome2() {
    this.data = [];
    for (let i = 2; i < this.movies.length; i++) {
      const movieData = {
        name: this.movies[i].name,
        genre: this.movies[i].genre,
        running_time: this.movies[i].running_time,
        release_date: this.movies[i].release_date,
        ratings: this.movies[i].ratings,
        age_restriction: this.movies[i].age_restriction,
      };
      
      this.data.push(movieData);
      
      if (i === 3) {
        break;
      }
    }
    console.log('====================================');
    console.log(this.data);
    console.log('====================================');
   
  }
  
  Rome3() {
    this.data = [];
    const number = {"number":3};
    for (let i = 4; i < this.movies.length; i++) {
      const movieData = {
        name: this.movies[i].name,
        genre: this.movies[i].genre,
        running_time: this.movies[i].running_time,
        release_date: this.movies[i].release_date,
        ratings: this.movies[i].ratings,
        age_restriction: this.movies[i].age_restriction,
      };
      
      this.data.push(movieData);
     
      
      if (i === 5) {
        break;
      }
    }
    this.data.push(number)
    console.log('====================================');
    console.log(this.data);
    console.log('====================================');
   
  }
  Rome4() {

    this.data = [];
    for (let i = 6; i < this.movies.length; i++) {
      const movieData = {
        name: this.movies[i].name,
        genre: this.movies[i].genre,
        running_time: this.movies[i].running_time,
        release_date: this.movies[i].release_date,
        ratings: this.movies[i].ratings,
        age_restriction: this.movies[i].age_restriction,
      };
      
      this.data.push(movieData);
      
      
      if (i === 7) {
        break;
      }
    }
    console.log('====================================');
    console.log(this.data);
    console.log('====================================');
   
  }
  
  
  

}
