import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { AlbumService } from '../../common/services/album.service';

@Component({
  selector: 'app-dashboard-view',
  templateUrl: './dashboard-view.component.html',
  styleUrls: ['./dashboard-view.component.css']
})
export class DashboardViewComponent implements OnInit {
  pics: any = [];

  constructor(private router: Router, private albumService: AlbumService) {
  }

  ngOnInit() {
    this.pics = this.albumService.album;
  }

  viewDetails(key) {
    this.router.navigate(['/dashboard/details', key]);
  }

}
