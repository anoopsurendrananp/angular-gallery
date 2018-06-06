import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './dashboard.component';
import { DashboardViewComponent } from './dashboard-view/dashboard-view.component';
import { DashboardDetailsComponent } from './dashboard-details/dashboard-details.component';

const routes: Routes = [
                            {
                                path: '',
                                component: DashboardComponent,
                                children:   [
                                                {
                                                    path: 'view',
                                                    component: DashboardViewComponent
                                                },
                                                {
                                                    path: 'details/:id',
                                                    component: DashboardDetailsComponent
                                                }
                                            ]
                            }
                       ];

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  exports : [RouterModule]
})
export class DashboardRoutingModule {}
