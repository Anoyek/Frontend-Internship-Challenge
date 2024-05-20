import { Component } from '@angular/core';

@Component({
  selector: 'app-album',
  standalone: true,
  imports: [],
  templateUrl: './album.component.html',
  styleUrl: './album.component.css'
})
export class AlbumComponent {
  width: number = 170;
  height: number = 170;
  title: string = 'Album title';
  price: number = 10;
  currency: string = '$';
}
