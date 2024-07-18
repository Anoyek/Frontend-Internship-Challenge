import { Component, inject, OnInit, Input } from '@angular/core';

import { AlbumsService } from '../albums.service'
import { Album } from '../album';
import { AlbumComponent } from '../album/album.component';

import { Subscription } from 'rxjs';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-album-list',
  standalone: true,
  imports: [AlbumComponent],
  templateUrl: './album-list.component.html',
  styleUrl: './album-list.component.css'
})
export class AlbumListComponent implements OnInit{
  @Input() set lookForIt(searchbarValue: string){
    if(this.filtredAlbumList.length > 0 && this.albums.length > 0){
      console.log(this.filtredAlbumList)
      this.filtredAlbumList = this.albums.filter((singleAlbum)=>{
        singleAlbum.title.toLocaleLowerCase().indexOf(searchbarValue.toLocaleLowerCase()) >= 0
      })
    }
    console.log(this.filtredAlbumList)
  }
  private AlbumsService = inject(AlbumsService);
  subscription: any;
  constructor(private http: AlbumsService) {}
  // albumList: Album[] = this.albums.filter((singleAlbum)=>{
  //   // if(this.lookForIt){
  //     singleAlbum.title.includes(this.lookForIt) || singleAlbum.author.includes(this.lookForIt);
  //   // }else{
  //   //   this.albumList = this.albums;
  //   // }
  // });
  albumList: Album[] = [];
  albums: Album[] = [];
  filtredAlbumList: any = [];


  ngOnInit() {
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
            id: element.id.attributes['im:id'],
            category: element.category.attributes.label,
            releaseDate: element['im:releaseDate'].attributes.label
          }))
          this.filtredAlbumList = this.albums
        //   this.array.forEach((element) => {
        //     this.object = 
        //     {
        //       title: element['im:name']['label'],
        //       author: element['im:artist']['label'],
        //       source: element['id']['label'],
        //       imgSource: element['im:image'][2]['label'],
        //       price: element['im:price']['attributes']['amount'],
        //       currency: element['im:price']['attributes']['currency']
        //     };
        //     this.albumList.push(this.object)
        //   });
        } 
      })
  }
  ngOnDestroy(){
    this.subscription.unsubscribe()
  }
}
// this.albumList = this.albums.filter( singleAlbum => {
//   singleAlbum.title.includes(this.lookForIt) || singleAlbum.author.includes(this.lookForIt);
// });