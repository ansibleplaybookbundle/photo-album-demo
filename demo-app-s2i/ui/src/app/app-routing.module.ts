import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {ImageAlbumComponent} from "./image-album.component";


const routes: Routes = [
  {
    path: '',
    component: ImageAlbumComponent
  },
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule {
}
