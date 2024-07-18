import { Component } from '@angular/core';

import { NavbarComponent } from './navbar/navbar.component';
import { AlbumComponent } from './album/album.component';
import { AlbumListComponent } from './album-list/album-list.component';
import { SearchbarComponent } from './searchbar/searchbar.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [NavbarComponent, AlbumComponent, AlbumListComponent, SearchbarComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  constructor(){}
  title = 'Frontend-Internship-Challenge';
}
