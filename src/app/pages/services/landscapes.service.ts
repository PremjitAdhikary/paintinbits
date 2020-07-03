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
      desktopPath: this.getImagePath('landscapes_01_desk'),
      tabPath: this.getImagePath('landscapes_01_tab'),
      mobilePath: this.getImagePath('landscapes_01_mob'),
      thumbPath: '',
      alt: '1st attempt',
      text: '',
      description: ''
    };
  }

  getGlacierImage(): IImage {
    return {
      desktopPath: this.getImagePath('landscapes_03_desk'),
      tabPath: this.getImagePath('landscapes_03_tab'),
      mobilePath: this.getImagePath('landscapes_03_mob'),
      thumbPath: '',
      alt: 'Glacier attempt',
      text: '',
      description: ''
    };
  }

  getSlideImages(): IImage[] {
    return [
      {
        desktopPath: this.getImagePath('landscapes_02_a_desk'),
        tabPath: this.getImagePath('landscapes_02_a_tab'),
        mobilePath: this.getImagePath('landscapes_02_a_mob'),
        thumbPath: this.getImagePath('landscapes_02_a_thumb'),
        alt: 'Canvas Layout',
        text: '',
        description: `The first step was to start laying out the background elements, in this case, 
        the sky, far off fading mountains, few clouds.`
      },
      {
        desktopPath: this.getImagePath('landscapes_02_b_desk'),
        tabPath: this.getImagePath('landscapes_02_b_tab'),
        mobilePath: this.getImagePath('landscapes_02_b_mob'),
        thumbPath: this.getImagePath('landscapes_02_b_thumb'),
        alt: 'Mid Ground',
        text: '',
        description: `The next step, to draw some mountains in focus.`
      },
      {
        desktopPath: this.getImagePath('landscapes_02_c_desk'),
        tabPath: this.getImagePath('landscapes_02_c_tab'),
        mobilePath: this.getImagePath('landscapes_02_c_mob'),
        thumbPath: this.getImagePath('landscapes_02_c_thumb'),
        alt: 'Add a cliff',
        text: '',
        description: `Next I added a cliff, this will hold a waterfall, dramatic isn't it?`
      },
      {
        desktopPath: this.getImagePath('landscapes_02_d_desk'),
        tabPath: this.getImagePath('landscapes_02_d_tab'),
        mobilePath: this.getImagePath('landscapes_02_d_mob'),
        thumbPath: this.getImagePath('landscapes_02_d_thumb'),
        alt: 'Add Lake',
        text: '',
        description: `Next I added a small water-body.`
      },
      {
        desktopPath: this.getImagePath('landscapes_02_e_desk'),
        tabPath: this.getImagePath('landscapes_02_e_tab'),
        mobilePath: this.getImagePath('landscapes_02_e_mob'),
        thumbPath: this.getImagePath('landscapes_02_e_thumb'),
        alt: 'Add Lake',
        text: '',
        description: `Next I added a waterfall.`
      },
      {
        desktopPath: this.getImagePath('landscapes_02_f_desk'),
        tabPath: this.getImagePath('landscapes_02_f_tab'),
        mobilePath: this.getImagePath('landscapes_02_f_mob'),
        thumbPath: this.getImagePath('landscapes_02_f_thumb'),
        alt: 'Fillers',
        text: '',
        description: `Then I started adding trees to fill up the empty spaces.`
      },
      {
        desktopPath: this.getImagePath('landscapes_02_g_desk'),
        tabPath: this.getImagePath('landscapes_02_g_tab'),
        mobilePath: this.getImagePath('landscapes_02_g_mob'),
        thumbPath: this.getImagePath('landscapes_02_g_thumb'),
        alt: 'More Fillers',
        text: '',
        description: `Few more trees to give a perception of depth.`
      },
      {
        desktopPath: this.getImagePath('landscapes_02_h_desk'),
        tabPath: this.getImagePath('landscapes_02_h_tab'),
        mobilePath: this.getImagePath('landscapes_02_h_mob'),
        thumbPath: this.getImagePath('landscapes_02_h_thumb'),
        alt: 'Complete Scenery',
        text: '',
        description: `And last use the advantage of digital power to mirror and fill the empty 
        space on the left, add my signature, and finish.`
      }
    ];
  }
}
