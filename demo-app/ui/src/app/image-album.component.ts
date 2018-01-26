import {Component} from '@angular/core';
import {Image} from './image'
import {ImageService} from './image.service';
import {ServerInfo} from "./serverInfo";
import {ServerInfoService} from "./serverInfo.service";

@Component({
  selector: 'image-album',
  templateUrl: './image-album.component.html',
  styleUrls: ['./image-album.component.css'],
  providers: [ImageService, ServerInfoService]
})

export class ImageAlbumComponent {
  images: Image[];
  serverInfo: ServerInfo;

  constructor(private imageService: ImageService, private serverInfoService: ServerInfoService) {
  }

  getImages(): void {
    this.imageService.getImages().then(images => this.images = images);
  }

  getServerInfo(): void {
    this.serverInfoService.getServerInfo().then(serverInfo => this.serverInfo = serverInfo);
  }

  ngOnInit(): void {
    this.getImages();
    this.getServerInfo();
  }
}

