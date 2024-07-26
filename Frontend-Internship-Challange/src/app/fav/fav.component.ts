import { Component } from '@angular/core';

import { AlbumComponent } from "../album/album.component";
import { LocalStorageService } from '../services/LocalStorage/local-storage.service';
import { AlbumListComponent } from "../album-list/album-list.component";

@Component({
  selector: 'app-fav',
  standalone: true,
  imports: [AlbumComponent, AlbumListComponent],
  templateUrl: './fav.component.html',
  styleUrl: './fav.component.css'
})
export class FavComponent {
  constructor(private LocalStorage: LocalStorageService){

  }
}
