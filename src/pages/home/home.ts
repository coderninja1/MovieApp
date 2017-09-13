import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Http } from '@angular/http';
import { MovieDetailsPage } from '../movie-details/movie-details';

import 'rxjs/add/operator/map';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  NewInTheaters=[];
  PopularMovies=[];
  HighestRatedMovies=[];

  api_key:'abcdefgh';
  url='https://api.themoviedb.org/';
  image_url="https://image.tmdb.org/t/p/w500/";

  constructor(public navCtrl: NavController,public http: Http) {
  }

 // https://api.themoviedb.org/3/movie/popular?api_key=9ccf71f00dd185493289ff81ca558fe0&language=en-US&page=1

   ngOnInit(){

  	    this.http.get('https://api.themoviedb.org/3/movie/now_playing?api_key=9ccf71f00dd185493289ff81ca558fe0&language=en-US&page=1')
  	    .map(res => res.json())
  	    .subscribe(data => {
  	    		this.NewInTheaters=data.results;
  	    });

   	  	this.http.get('https://api.themoviedb.org/3/movie/top_rated?api_key=9ccf71f00dd185493289ff81ca558fe0')
  	    .map(res => res.json())
  	    .subscribe(data => {
  	    		this.HighestRatedMovies=data.results;
  	    });

  	    this.http.get('https://api.themoviedb.org/3/movie/popular?api_key=9ccf71f00dd185493289ff81ca558fe0&language=en-US&page=1')
  	    .map(res => res.json())
  	    .subscribe(data => {
  	    		this.PopularMovies=data.results;
  	    });

   }

   GoToMovie(slide){
    this.navCtrl.push(MovieDetailsPage, { slide:slide });
   }

 
}
