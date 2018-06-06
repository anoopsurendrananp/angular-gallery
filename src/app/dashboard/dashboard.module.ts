
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
// import { Ng2ImageGalleryModule } from 'ng2-image-gallery';
import { LightboxModule } from 'angular2-lightbox';

import { AlbumService } from './../common/services/album.service';
import { VertionInfoService } from './../common/services/vertion-info.service';

import { DashboardComponent } from './dashboard.component';
import { DashboardViewComponent } from './dashboard-view/dashboard-view.component';
import { DashboardDetailsComponent } from './dashboard-details/dashboard-details.component';
import { DashboardRoutingModule } from './dashboard-routing.module';

@NgModule({
  declarations: [
    DashboardComponent,
    DashboardViewComponent,
    DashboardDetailsComponent
  ],
  imports: [
    DashboardRoutingModule,
    FormsModule,
    CommonModule,
    LightboxModule,
    // Ng2ImageGalleryModule
  ],
  providers: [AlbumService, VertionInfoService],
  bootstrap: [DashboardComponent]
})
export class DashboardModule { }

