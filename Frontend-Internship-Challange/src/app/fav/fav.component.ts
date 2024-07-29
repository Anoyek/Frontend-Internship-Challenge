import { Component } from '@angular/core';

import { AlbumComponent } from "../album/album.component";
import { LocalStorageService } from '../services/LocalStorage/local-storage.service';
import { AlbumListComponent } from "../album-list/album-list.component";
import { Album } from '../album';

@Component({
  selector: 'app-fav',
  standalone: true,
  imports: [AlbumComponent, AlbumListComponent],
  templateUrl: './fav.component.html',
  styleUrl: './fav.component.css'
})

export class FavComponent {
  favAlbumList: Array<Album> = []
  jsonText: string = '';
  constructor(private LocalStorage: LocalStorageService){
    this.jsonText = localStorage.getItem('fav')!;
    this.favAlbumList = JSON.parse(JSON.parse(this.jsonText));
  }
}
