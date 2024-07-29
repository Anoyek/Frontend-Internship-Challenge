import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogTitle, MatDialogContent, MatDialogClose, MatDialogRef} from '@angular/material/dialog';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';

import { Album } from '../album';

import { LocalStorageService } from '../services/LocalStorage/local-storage.service';

@Component({
  selector: 'app-album-details',
  standalone: true,
  imports: [MatDialogTitle, MatDialogContent, MatIconModule, MatButtonModule, MatDialogClose],
  templateUrl: './album-details.component.html',
  styleUrl: './album-details.component.css',
})
export class AlbumDetailsComponent {
  isFavorite: boolean = this.CheckIfFavorite() || false;
  favData: string = '';
  favList: Array<Album> = [];

  constructor(
    @Inject(MAT_DIALOG_DATA)
    public data: Album,
    public dialogRef: MatDialogRef<AlbumDetailsComponent>,
    public localStorage : LocalStorageService,
  ) {
  }

  goToPage(url: string){
    window.open(url, '_blank');
  }

  addToFavorite(){
    this.isFavorite = true;
    if (!this.parse(this.localStorage.getData('fav')!)) {
      this.favList.push(this.data);
      this.favData = JSON.stringify(this.favList);
      this.localStorage.saveData('fav', this.favData);
    }else{
      this.favList = this.parse(this.localStorage.getData('fav')!);
      this.favList.push(this.data);
      this.favData = JSON.stringify(this.favList);
      this.localStorage.saveData('fav',this.favData);
    }
  }

  removeFromFavorite(){
    this.isFavorite = false;
    this.favList = this.parse(this.localStorage.getData('fav'));
  }

  CheckIfFavorite(){
    let selectedAlbum = this.data.albumId;
    console.log(selectedAlbum)
    let list = this.parse(this.localStorage.getData('fav')) || [];
    console.log(list)
    for (let i = 0; i < list.length; i++) {
      console.log(list[i].albumId);
      console.log(selectedAlbum)
      if(selectedAlbum == list[i].albumId){
        return true;
      }
    }
  }

  parse(data:any){
    return JSON.parse(JSON.parse(data));
  }
}


// splice zeby usunac konkretny index z tablicy
