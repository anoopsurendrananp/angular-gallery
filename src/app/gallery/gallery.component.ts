import { Component, OnInit } from '@angular/core';
import { Lightbox, LightboxConfig } from 'angular2-lightbox';

import { AlbumService } from './../common/services/album.service';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.css']
})
export class GalleryComponent implements OnInit {
  images: any[];
  current = null;
  pics: any = [];

  constructor(private _lightbox: Lightbox, private lightboxConfig: LightboxConfig, private albumService: AlbumService) {
    lightboxConfig.alwaysShowNavOnTouchDevices = true;
    // lightboxConfig.fitImageInViewPort = false;
    lightboxConfig.wrapAround = true;
  }

  ngOnInit() {
    this.pics = this.albumService.album;
    this.current = this.pics[0];
  }

  openImageLightBox(index: number): void {
    this._lightbox.open(this.pics, index);
  }

}
