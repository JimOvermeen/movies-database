import { Component } from '@angular/core';
import { MoviesService } from './services/movies.service';
import { MovieData } from './models/movie.model';
import { MovieSearchService } from './services/moviesearch.service';
import { NextsearchService } from './services/nextsearch.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
searchInput: string = '';
movieItem: any;
moviesData: any;

  
  constructor(private moviesService: MoviesService, private searchMovieService: MovieSearchService, private NextSearch: NextsearchService) { }

  


  ngOnInit(): void {
    this.getRandomMoviesData();
  }
  private getRandomMoviesData(){
    this.moviesService.getRandomMoviesData().subscribe((data) => {
      this.moviesData = data;

    }
    );
  }

  searchMovie() {    
    this.searchMovieService.getSearch(encodeURI(this.searchInput.toLocaleLowerCase())).subscribe((data) => {
      this.moviesData = data;
      console.log(data);
    }
    );
  }

  nextSearch(url: string | undefined) {
    this.NextSearch.getNextSearch(url).subscribe((data) => {
      this.moviesData = data;
      console.log(data);
    }
    );
  }

  previousSearch(url: string | undefined) {
    this.NextSearch.getPreviousSearch(url).subscribe((data) => {
      this.moviesData = data;
      console.log(data);
    }
    );
  }

}
