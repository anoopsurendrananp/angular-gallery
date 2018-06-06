import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LayoutComponent } from './layout.component';
// import { ActivateAuthGuard } from '../api/activate-auth.guard';
// import { RedirectAuthGuard } from '../api/redirect.guard';

const routes: Routes = [

                          {
                            path: '',
                            component: LayoutComponent,
                            children: [
                                        {
                                            path: 'home',
                                            loadChildren: '../home/home.module#HomeModule'
                                        },
                                        {
                                            path: 'dashboard',
                                            loadChildren: '../dashboard/dashboard.module#DashboardModule'
                                        },
                                        {
                                            path: 'gallery',
                                            loadChildren: '../gallery/gallery.module#GalleryModule'
                                        }
                                      ]
                          }
                        ];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LayoutRoutingModule { }
