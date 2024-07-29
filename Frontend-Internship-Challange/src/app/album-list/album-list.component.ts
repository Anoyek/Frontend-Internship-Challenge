import { Component, inject, Input } from '@angular/core';

import { Album } from '../album';
import { AlbumComponent } from '../album/album.component';
import { SearchbarComponent } from '../searchbar/searchbar.component';

import { AlbumsService } from '../services/albums/albums.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-album-list',
  standalone: true,
  imports: [AlbumComponent, SearchbarComponent],
  templateUrl: './album-list.component.html',
  styleUrl: './album-list.component.css'
})
export class AlbumListComponent{
  @Input() albumsList: Array<Album> = [];
  private AlbumsService = inject(AlbumsService);
  subscription: Subscription;
  albums: Album[] = [];
  filtredAlbumList: any = [];

  
  constructor(private http: AlbumsService) {
    this.subscription =
    this.AlbumsService.getAlbums().subscribe({
      next: (res)=>{
        this.albums = res.feed.entry
        .map((element: any) => ({
          title: element['im:name']['label'],
          author: element['im:artist']['label'],
          source: element['id']['label'],
          imgSource: element['im:image'][2]['label'],
          price: element['im:price']['attributes']['amount'],
          currency: element['im:price']['attributes']['currency'],
          albumId: element.id.attributes['im:id'],
          category: element.category.attributes.label,
          releaseDate: element['im:releaseDate'].attributes.label
        }))
        this.albumsList = this.albums
      } 
    })}

  handleFiltering(value:string){
    this.filtredAlbumList = this.albums.filter((singleAlbum)=>
      singleAlbum.title.toLocaleLowerCase().includes(value.toLocaleLowerCase()) || singleAlbum.author.toLocaleLowerCase().includes(value.toLocaleLowerCase()))
    this.albumsList = this.filtredAlbumList;
  }

  ngOnDestroy(){
    this.subscription.unsubscribe()
  }
}