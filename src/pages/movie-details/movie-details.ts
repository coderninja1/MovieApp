import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-movie-details',
  templateUrl: 'movie-details.html',
})
export class MovieDetailsPage {
  title;
  release_date;
  original_title;
  overview;
  poster_path;
  backdrop_path;
  vote_count;
  popularity;
  image_url="https://image.tmdb.org/t/p/w500/";

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  	 var data=navParams.get('slide'); 
  	 this.title=data.original_title;
  	 this.release_date=data.release_date;
  	 this.overview=data.overview;
  	 this.poster_path=data.poster_path;
  	 this.backdrop_path=data.backdrop_path;
  	 this.vote_count=data.vote_count;
  	 this.popularity=data.popularity;
  	
  }

  ionViewDidLoad() {
 
  }

}
