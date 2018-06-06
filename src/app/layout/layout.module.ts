import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { LayoutRoutingModule } from './layout-routing.module';
import { LayoutComponent } from './layout.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    LayoutRoutingModule,
    HttpModule
  ],
  declarations: [LayoutComponent],
})
export class LayoutModule { }



