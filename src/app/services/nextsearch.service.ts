import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { MovieData } from '../models/movie.model';

@Injectable({
  providedIn: 'root',
})
export class NextsearchService {
  constructor(private http: HttpClient) {}

  getNextSearch(url: string | undefined): Observable<MovieData> {
    return this.http.get<MovieData>(
      'https://moviesdatabase.p.rapidapi.com' + url,
      {
        headers: new HttpHeaders()
          .set(environment.XRapidAPIHostLabel, environment.XRapidAPIHostValue)
          .set(environment.XRapidAPIKeyLabel, environment.XRapidAPIKeyValue),
      }
    );
  }
  getPreviousSearch(url: string | undefined): Observable<MovieData> {
    {
      return this.http.get<MovieData>(
        'https://moviesdatabase.p.rapidapi.com' + url,
        {
          headers: new HttpHeaders()
            .set(environment.XRapidAPIHostLabel, environment.XRapidAPIHostValue)
            .set(environment.XRapidAPIKeyLabel, environment.XRapidAPIKeyValue),
        }
      );
    }
  }
}
