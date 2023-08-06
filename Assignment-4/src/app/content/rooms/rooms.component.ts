import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-my-component',
  templateUrl: './rooms.component.html',
  styleUrls: ['./rooms.component.css']
})
export class rooms implements OnInit {
  movies: string[] = ["movie1", "movie2", "movie3", "movie4", "movie5"];
  data: string[] = [];

  ngOnInit() {
    this.retrieveData();
  }

  retrieveData() {
    for (let i = 0; i < this.movies.length; i++) {
      this.data.push(this.movies[i]);
      if (i === 2) {
        break;
      }
    }

    console.log(this.data);
    console.log(this.data[1]);
  }
}
