import { Injectable } from '@angular/core';
import { ImageLocationService } from 'src/app/shared/services/image-location.service';
import { IImage } from 'src/app/shared/domain/image';

@Injectable({
  providedIn: 'root'
})
export class ProjectPanelPrintService {

  constructor(private _imgLocationService: ImageLocationService) { }

  getImagePath(img: string): string {
    return this._imgLocationService.getImagePath(img);
  }

  getCustomArtImages(): IImage[] {
    return [
      {
        hiPath: this.getImagePath('ppp_bob_hi'),
        loPath: this.getImagePath('ppp_bob_lo'),
        thumbPath: '',
        alt: 'Blessings of Brahma',
        text: 'Blessings of Brahma',
        description: `The idea here is _Lord Brahma_ blesses upon the artist, that's me, to boost 
        his creativity.`
      }, 
      {
        hiPath: this.getImagePath('ppp_uni_exp_hi'),
        loPath: this.getImagePath('ppp_uni_exp_lo'),
        thumbPath: '',
        alt: 'Experience Universe of Imagination',
        text: 'Experience Universe of Imagination',
        description: `The story here is that the artist opens up the door of imagination for 
        his daughter to explore.`
      }
    ];
  }

  getMakingOfBOB(): IImage[] {
    return [
      {
        hiPath: this.getImagePath('ppp_bob_01_hi'),
        loPath: this.getImagePath('ppp_bob_01_lo'),
        thumbPath: this.getImagePath('ppp_bob_01_th'),
        alt: 'Initial Rough',
        text: 'Initial Rough',
        description: ``
      },
      {
        hiPath: this.getImagePath('ppp_bob_02_hi'),
        loPath: this.getImagePath('ppp_bob_02_lo'),
        thumbPath: this.getImagePath('ppp_bob_02_th'),
        alt: 'Line Art',
        text: 'Line Art',
        description: ``
      },
      {
        hiPath: this.getImagePath('ppp_bob_03_hi'),
        loPath: this.getImagePath('ppp_bob_03_lo'),
        thumbPath: this.getImagePath('ppp_bob_03_th'),
        alt: 'Initial GrayScale',
        text: 'Initial GrayScale',
        description: ``
      },
      {
        hiPath: this.getImagePath('ppp_bob_04_hi'),
        loPath: this.getImagePath('ppp_bob_04_lo'),
        thumbPath: this.getImagePath('ppp_bob_04_th'),
        alt: 'Final GrayScale',
        text: 'Final GrayScale',
        description: ``
      },
      {
        hiPath: this.getImagePath('ppp_bob_hi'),
        loPath: this.getImagePath('ppp_bob_lo'),
        thumbPath: this.getImagePath('ppp_bob_th'),
        alt: 'Finished Color',
        text: 'Finished Color',
        description: ``
      }
    ];
  }

}
