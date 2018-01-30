import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {HttpModule} from '@angular/http';


import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {AppRoutingModule} from "./app-routing.module";

import {AppComponent} from './app.component';
import {ImageAlbumComponent} from './image-album.component';
import {ImageService} from "./image.service";
import {ServerInfoService} from "./serverInfo.service";

@NgModule({
  declarations: [
    AppComponent,
    ImageAlbumComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    AppRoutingModule,
    NgbModule.forRoot()
  ],
  providers: [
    ImageService,
    ServerInfoService
  ],
  bootstrap: [AppComponent]
})

export class AppModule {
}
