import { Component, Inject } from '@angular/core';

import { MAT_DIALOG_DATA, MatDialogTitle, MatDialogContent } from '@angular/material/dialog';
import { MatIconModule } from '@angular/material/icon';

import { DialogRef } from '@angular/cdk/dialog';

import { Album } from '../album';

@Component({
  selector: 'app-album-details',
  standalone: true,
  imports: [MatDialogTitle, MatDialogContent, MatIconModule],
  templateUrl: './album-details.component.html',
  styleUrl: './album-details.component.css',
})
export class AlbumDetailsComponent {
  constructor(
    @Inject(MAT_DIALOG_DATA) 
    public data: Album,
    public dialogRef: DialogRef
  ) {}
  goToPage(url: string){
    window.open(url, '_blank')
  }
}
