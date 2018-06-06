import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { LightboxModule } from 'angular2-lightbox';

import { AlbumService } from './../common/services/album.service';

import { GalleryComponent } from './gallery.component';
import { GalleryRoutingModule } from './gallery-routing.module';

@NgModule({
  declarations: [
    GalleryComponent
  ],
  imports: [
    GalleryRoutingModule,
    FormsModule,
    CommonModule,
    LightboxModule,
    // Ng2ImageGalleryModule
  ],
  providers: [AlbumService],
  bootstrap: [GalleryComponent]
})
export class GalleryModule { }

