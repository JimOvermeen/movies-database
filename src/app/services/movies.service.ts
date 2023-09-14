import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { MovieData } from '../models/movie.model';


@Injectable({
  providedIn: 'root'
})
export class MoviesService {

  constructor(private http: HttpClient) {}

  getRandomMoviesData(): Observable<MovieData>{
    return this.http.get<MovieData>(environment.randomMoviesApiUrl, {
      headers: new HttpHeaders()
      .set(environment.XRapidAPIHostLabel, environment.XRapidAPIHostValue)
      .set(environment.XRapidAPIKeyLabel, environment.XRapidAPIKeyValue)
  });
  }
}
