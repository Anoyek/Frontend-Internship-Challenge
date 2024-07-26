import { Routes } from '@angular/router';
import { AlbumListComponent } from './album-list/album-list.component';
import { FavComponent } from './fav/fav.component';

export const routes: Routes = [
    {
        path:'',
        component: AlbumListComponent,
    },
    {
        path: 'favorites',
        component: FavComponent,
    }
];
