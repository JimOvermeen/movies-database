import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { MovieData } from '../models/movie.model';


@Injectable({
  providedIn: 'root'
})
export class MovieSearchService {

  constructor(private http: HttpClient) {}

  getSearch(keyword : string): Observable<MovieData>{
    console.log(environment.searchMoviesApiUrl + keyword);
    return this.http.get<MovieData>(environment.searchMoviesApiUrl + keyword, {
      headers: new HttpHeaders()
      .set(environment.XRapidAPIHostLabel, environment.XRapidAPIHostValue)
      .set(environment.XRapidAPIKeyLabel, environment.XRapidAPIKeyValue)
  });
  }
}
