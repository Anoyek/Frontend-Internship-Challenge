import { Component, Inject } from '@angular/core';

import { MAT_DIALOG_DATA, MatDialogTitle, MatDialogContent, MatDialogClose, MatDialogRef} from '@angular/material/dialog';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';

// import { DialogRef } from '@angular/cdk/dialog';

import { Album } from '../album';

@Component({
  selector: 'app-album-details',
  standalone: true,
  imports: [MatDialogTitle, MatDialogContent, MatIconModule, MatButtonModule, MatDialogClose],
  templateUrl: './album-details.component.html',
  styleUrl: './album-details.component.css',
})
export class AlbumDetailsComponent {
  constructor(
    @Inject(MAT_DIALOG_DATA) 
    public data: Album,
    public dialogRef: MatDialogRef<AlbumDetailsComponent>
  ) {}
  goToPage(url: string){
    window.open(url, '_blank')
  }
}
