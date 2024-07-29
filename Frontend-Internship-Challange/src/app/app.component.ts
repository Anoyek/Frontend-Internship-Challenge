import { Component, inject } from '@angular/core';
import { MatGridListModule } from '@angular/material/grid-list';
import { RouterOutlet } from '@angular/router';

import { NavbarComponent } from './navbar/navbar.component';
import { AlbumComponent } from './album/album.component';
import { AlbumListComponent } from './album-list/album-list.component';
import { SearchbarComponent } from './searchbar/searchbar.component';

import { Album } from './album';
import { AlbumsService } from './services/albums/albums.service';
import { FavComponent } from "./fav/fav.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [NavbarComponent, AlbumComponent, AlbumListComponent, SearchbarComponent, MatGridListModule, RouterOutlet, FavComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Frontend-Internship-Challenge';
  // private AlbumsService = inject(AlbumsService);
  // subscription: any;
  // albums: Album[] = [];
  // filtredAlbumList: any = [];

  // constructor(private http: AlbumsService) {
  //   this.subscription =
  //   this.AlbumsService.getAlbums().subscribe({
  //     next: (res)=>{
  //       this.albums = res.feed.entry
  //       .map((element: any) => ({
  //         title: element['im:name']['label'],
  //         author: element['im:artist']['label'],
  //         source: element['id']['label'],
  //         imgSource: element['im:image'][2]['label'],
  //         price: element['im:price']['attributes']['amount'],
  //         currency: element['im:price']['attributes']['currency'],
  //         id: element.id.attributes['im:id'],
  //         category: element.category.attributes.label,
  //         releaseDate: element['im:releaseDate'].attributes.label
  //       }))
  //       this.filtredAlbumList = this.albums
  //     } 
  //   })}


  // handleFiltering(value:string){
  // this.filtredAlbumList = this.albums.filter((singleAlbum)=>
  //   singleAlbum.title.toLocaleLowerCase().includes(value.toLocaleLowerCase()) || singleAlbum.author.toLocaleLowerCase().includes(value.toLocaleLowerCase()))
  // }

  // ngOnDestroy(){
  //   this.subscription.unsubscribe()
  // }
}