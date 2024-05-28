import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-album',
  standalone: true,
  imports: [],
  templateUrl: './album.component.html',
  styleUrl: './album.component.css'
})
export class AlbumComponent {
  @Input() album: any




  // {
  //   title:string,
  //   author:string,
  //   source:string,
  //   imgSource:string,
  //   price: string,
  //   currency:string,
  //   width: string;
  // };
}
