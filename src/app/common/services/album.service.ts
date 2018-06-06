import { Injectable } from '@angular/core';

@Injectable()
export class AlbumService {
  album: any = [];
  images: any = [];

  constructor() {
    this.album = [
      { key: 0, src: 'assets/images/android/android-cupcake.jpg', caption: 'Cupcake' },
      { key: 1, src: 'assets/images/android/android-donut.jpg', caption: 'Donut' },
      { key: 2, src: 'assets/images/android/android-eclair.png', caption: 'Eclair' },
      { key: 3, src: 'assets/images/android/android-froyo.jpg', caption: 'Froyo' },
      { key: 4, src: 'assets/images/android/android-gingerbread.jpg', caption: 'Gingerbread' },
      { key: 5, src: 'assets/images/android/android-honeycomb.jpg', caption: 'Honeycomb' },
      { key: 6, src: 'assets/images/android/android-Ice-Cream-Sandwich.jpg', caption: 'Ice Cream Sandwich' },
      { key: 7, src: 'assets/images/android/android-jellibean.jpg', caption: 'Jellibean' },
      { key: 8, src: 'assets/images/android/android-kitkat.jpg', caption: 'Kitkat' },
      { key: 9, src: 'assets/images/android/android-lollipop.jpg', caption: 'Lollipop' },
      { key: 10, src: 'assets/images/android/android-marshmello.png', caption: 'Marshmello' },
      { key: 11, src: 'assets/images/android/android-naugat.jpeg', caption: 'Naugat' },
    ];

  this.images = [
      { src: 'assets/images/hamsaDamayanthi.jpg', caption: 'Hamsa Dmayanthi' },
      { src: 'assets/images/ladyWithFruits.jpg', caption: 'Lady with Fruits' },
      { src: 'assets/images/hereComesPapa.jpg', caption: 'Here Comes Papa' },
      { src: 'assets/images/radhaInMoonlight.jpg', caption: 'Radha in Moonlight' },
      { src: 'assets/images/musician.jpg', caption: 'Musician' },
      { src: 'assets/images/saraswathi.jpg', caption: 'Saraswathi'},
      { src: 'assets/images/ladyWithPots.jpg', caption: 'Lady with Pots' },
      { src: 'assets/images/sakunthala.jpg', caption: 'Sakunthala' },
      { src: 'assets/images/LadyGivingAlms.jpg', caption: 'Lady giving alms' },
      { src: 'assets/images/lakshmi.jpg', caption: 'Lakshmi' },
      { src: 'assets/images/ladyLostInThought.jpg', caption: 'Lady lost in thoughts' },
      { src: 'assets/images/Arjuna_and_Subhadra.jpg', caption: 'Arjuna and Subhadra' },
      { src: 'assets/images/kadambari.jpg', caption: 'Kadambari' },
      { src: 'assets/images/ladyWithJasmineGarland.jpg', caption: 'Lady with Jasmine Garland' },
      { src: 'assets/images/jadayuvadha.jpg', caption: 'Jadayuvadha' }
    ];
  }

}



