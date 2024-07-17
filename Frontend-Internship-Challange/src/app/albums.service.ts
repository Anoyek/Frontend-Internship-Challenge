import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Album } from './album'


@Injectable({
  providedIn: 'root'
})

export class AlbumsService {
  private url:string = 'https://itunes.apple.com/us/rss/topalbums/limit=100/json';

  constructor(private http: HttpClient) { }

  getAlbums(): Observable<Album[]>{
    return this.http.get<Album[]>(`${this.url}`);
  }
}
