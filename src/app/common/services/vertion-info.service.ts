import { Injectable } from '@angular/core';

@Injectable()
export class VertionInfoService {
  featureData: any = [];

  constructor() {
    this.featureData = [
      { versionName: 'Cupcake', versionNumber: '1.5', releaseDate: 'April 27, 2009' },
      { versionName: 'Donut', versionNumber: '1.6', releaseDate: 'September 15, 2009' },
      { versionName: 'Eclair', versionNumber: '2.0 – 2.1', releaseDate: 'October 26, 2009' },
      { versionName: 'Froyo', versionNumber: '2.2 – 2.2.3', releaseDate: 'May 20, 2010' },
      { versionName: 'Gingerbread', versionNumber: '2.3 – 2.3.7', releaseDate: 'December 6, 2010' },
      { versionName: 'Honeycomb', versionNumber: '3.0 – 3.2.6', releaseDate: 'February 22, 2011' },
      { versionName: 'Ice Cream Sandwich', versionNumber: '4.0 – 4.0.4', releaseDate: 'October 18, 2011' },
      { versionName: 'Jellibean', versionNumber: '4.1 – 4.3.1', releaseDate: 'July 9, 2012' },
      { versionName: 'Kitkat', versionNumber: '4.4 - 4.4.4', releaseDate: 'October 31, 2013' },
      { versionName: 'Lollipop', versionNumber: '5.0 – 5.1.1', releaseDate: 'November 12, 2014' },
      { versionName: 'Marshmello', versionNumber: '6.0 – 6.0.1', releaseDate: 'October 5, 2015' },
      { versionName: 'Naugat', versionNumber: '7.0 - 7.1.2', releaseDate: 'August 22, 2016' }
    ];
  }
}