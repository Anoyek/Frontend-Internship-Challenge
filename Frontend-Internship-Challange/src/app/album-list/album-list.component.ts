import { Component, OnInit } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AlbumsService } from '../albums.service'
import { Album } from '../album';
import { AlbumComponent } from '../album/album.component';

@Component({
  selector: 'app-album-list',
  standalone: true,
  imports: [AlbumComponent, HttpClientModule],
  templateUrl: './album-list.component.html',
  styleUrl: './album-list.component.css'
})
export class AlbumListComponent implements OnInit{
  albumList: Album[] = [];

  constructor(private http: AlbumsService) {}

  ngOnInit(): void {
    this.http.getAlbums().subscribe((album) =>{
      album = this.albumList
    })
  }


  // albumList = [
  //   {
  //     title: 'title',
  //     author: 'author',
  //     source: 'https://music.apple.com/us/album/hit-me-hard-and-soft/1739659134?uo=2',
  //     imgSource: 'https://is1-ssl.mzstatic.com/image/thumb/Music211/v4/92/9f/69/929f69f1-9977-3a44-d674-11f70c852d1b/24UMGIM36186.rgb.jpg/170x170bb.png',
  //     price: '10',
  //     currency: '$',
  //     width: 170
  //   }
  // ];
}
