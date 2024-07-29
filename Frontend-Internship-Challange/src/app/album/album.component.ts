import { Component, Input } from '@angular/core';

import { MatDialog } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';

import { Album } from '../album';
import { AlbumDetailsComponent } from '../album-details/album-details.component';

@Component({
  selector: 'app-album',
  standalone: true,
  imports: [MatButtonModule],
  templateUrl: './album.component.html',
  styleUrl: './album.component.css'
})
export class AlbumComponent {
  @Input() album: any;
  constructor(
    public dialog: MatDialog,
  ) {}

  openDialog() {
    this.dialog.open(AlbumDetailsComponent, {
      data: {
        title: this.album.title,
        author: this.album.author,
        source: this.album.source,
        imgSource: this.album.imgSource,
        price: this.album.price,
        albumId: this.album.albumId,
        currency: this.album.currency,
        category: this.album.category,
        releaseDate: this.album.releaseDate
      },
    });
  }
}
