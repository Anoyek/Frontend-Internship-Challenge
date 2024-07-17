import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { catchError, map, Observable, throwError } from 'rxjs';
import { Album } from './album'


@Injectable({
  providedIn: 'root'
})

export class AlbumsService {
  private url:string = 'https://itunes.apple.com/us/rss/topalbums/limit=100/json';

  constructor(private http: HttpClient) { }

  getAlbums(): Observable<any>{
    return this.http.get(`${this.url}`)
    .pipe(
      map ((resData) => resData),
      catchError((e) =>{
        console.log(e);
        return throwError(
          () => new Error('something went wrong')
        );
      })
    );
  }
}
