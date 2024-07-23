import { Component, Input } from '@angular/core';

import { Album } from '../album';
import { AlbumComponent } from '../album/album.component';

@Component({
  selector: 'app-album-list',
  standalone: true,
  imports: [AlbumComponent],
  templateUrl: './album-list.component.html',
  styleUrl: './album-list.component.css'
})
export class AlbumListComponent{
  @Input() albumsList: Array<Album> = [];
}