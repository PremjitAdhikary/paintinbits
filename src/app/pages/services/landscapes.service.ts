import { Injectable } from '@angular/core';
import { IImage } from 'src/app/shared/domain/image';
import { ImageLocationService } from 'src/app/shared/services/image-location.service';

@Injectable({
  providedIn: 'root'
})
export class LandscapesService {

  constructor(private _imgLocationService: ImageLocationService) { }

  getImagePath(img: string) {
    return this._imgLocationService.getImagePath(img);
  }

  getFirstImage(): IImage {
    return {
      hiPath: this.getImagePath('landscapes_01_hi'),
      loPath: this.getImagePath('landscapes_01_lo'),
      thumbPath: '',
      alt: '1st attempt',
      text: '',
      description: ''
    };
  }

  getGlacierImage(): IImage {
    return {
      hiPath: this.getImagePath('landscapes_03_hi'),
      loPath: this.getImagePath('landscapes_03_lo'),
      thumbPath: '',
      alt: 'Glacier attempt',
      text: '',
      description: ''
    };
  }

  getSlideImages(): IImage[] {
    return [
      {
        hiPath: this.getImagePath('landscapes_02_a_hi'),
        loPath: this.getImagePath('landscapes_02_a_lo'),
        thumbPath: this.getImagePath('landscapes_02_a_thumb'),
        alt: 'Canvas Layout',
        text: '',
        description: `The first step was to start laying out the background elements, in this case, 
        the sky, far off fading mountains, few clouds.`
      },
      {
        hiPath: this.getImagePath('landscapes_02_b_hi'),
        loPath: this.getImagePath('landscapes_02_b_lo'),
        thumbPath: this.getImagePath('landscapes_02_b_thumb'),
        alt: 'Mid Ground',
        text: '',
        description: `The next step, to draw some mountains in focus.`
      },
      {
        hiPath: this.getImagePath('landscapes_02_c_hi'),
        loPath: this.getImagePath('landscapes_02_c_lo'),
        thumbPath: this.getImagePath('landscapes_02_c_thumb'),
        alt: 'Add a cliff',
        text: '',
        description: `Next I added a cliff, this will hold a waterfall, dramatic isn't it?`
      },
      {
        hiPath: this.getImagePath('landscapes_02_d_hi'),
        loPath: this.getImagePath('landscapes_02_d_lo'),
        thumbPath: this.getImagePath('landscapes_02_d_thumb'),
        alt: 'Add Lake',
        text: '',
        description: `Next I added a small water-body.`
      },
      {
        hiPath: this.getImagePath('landscapes_02_e_hi'),
        loPath: this.getImagePath('landscapes_02_e_lo'),
        thumbPath: this.getImagePath('landscapes_02_e_thumb'),
        alt: 'Add Lake',
        text: '',
        description: `Next I added a waterfall.`
      },
      {
        hiPath: this.getImagePath('landscapes_02_f_hi'),
        loPath: this.getImagePath('landscapes_02_f_lo'),
        thumbPath: this.getImagePath('landscapes_02_f_thumb'),
        alt: 'Fillers',
        text: '',
        description: `Then I started adding trees to fill up the empty spaces.`
      },
      {
        hiPath: this.getImagePath('landscapes_02_g_hi'),
        loPath: this.getImagePath('landscapes_02_g_lo'),
        thumbPath: this.getImagePath('landscapes_02_g_thumb'),
        alt: 'More Fillers',
        text: '',
        description: `Few more trees to give a perception of depth.`
      },
      {
        hiPath: this.getImagePath('landscapes_02_h_hi'),
        loPath: this.getImagePath('landscapes_02_h_lo'),
        thumbPath: this.getImagePath('landscapes_02_h_thumb'),
        alt: 'Complete Scenery',
        text: '',
        description: `And last use the advantage of digital power to mirror and fill the empty 
        space on the left, add my signature, and finish.`
      }
    ];
  }
}
