import { Component, Input, Inject } from '@angular/core';

import { MatDialog } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';

import { DialogModule, DialogRef } from '@angular/cdk/dialog';

import { Album } from '../album';
import { AlbumDetailsComponent } from '../album-details/album-details.component';

@Component({
  selector: 'app-album',
  standalone: true,
  imports: [MatButtonModule, DialogModule],
  templateUrl: './album.component.html',
  styleUrl: './album.component.css'
})
export class AlbumComponent {
  @Input() album: any;
  isDialog: boolean = false;
  constructor(
    public dialog: MatDialog,
    // public dialogRef: DialogRef
  ) {}

  openDialog() {
    this.dialog.open(AlbumDetailsComponent, {
      data: {
        title: this.album.title,
        author: this.album.author,
        source: this.album.source,
        imgSource: this.album.imgSource,
        price: this.album.price,
        currency: this.album.currency,
        category: this.album.category,
        releaseDate: this.album.releaseDate
      },
    });
  }
}