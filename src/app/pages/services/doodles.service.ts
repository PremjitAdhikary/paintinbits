import { Injectable } from '@angular/core';
import { ImageLocationService } from 'src/app/shared/services/image-location.service';
import { IImage } from 'src/app/shared/domain/image';

@Injectable({
  providedIn: 'root'
})
export class DoodlesService {

  constructor(private _imgLocationService: ImageLocationService) { }

  getImagePath(img: string): string {
    return this._imgLocationService.getImagePath(img);
  }

  getSlide(): IImage[] {
    return [
      {
        hiPath: this.getImagePath('doodles_reDog_hi'),
        loPath: this.getImagePath('doodles_reDog_lo'),
        thumbPath: this.getImagePath('doodles_reDog_thumb'),
        alt: 'Dog from Resident Evil',
        text: '',
        description: `The creature designs in _Resident Evil_ impressed me a lot back then.`
      },
      {
        hiPath: this.getImagePath('doodles_forest_hi'),
        loPath: this.getImagePath('doodles_forest_lo'),
        thumbPath: this.getImagePath('doodles_forest_thumb'),
        alt: 'Forest Sketch',
        text: '',
        description: `Most probably from some game.`
      },
      {
        hiPath: this.getImagePath('doodles_furnace_hi'),
        loPath: this.getImagePath('doodles_furnace_lo'),
        thumbPath: this.getImagePath('doodles_furnace_thumb'),
        alt: 'Forest Sketch',
        text: '',
        description: `Another game environment.`
      },
      {
        hiPath: this.getImagePath('doodles_dh_hi'),
        loPath: this.getImagePath('doodles_dh_lo'),
        thumbPath: this.getImagePath('doodles_dh_thumb'),
        alt: 'Demon Hunter',
        text: '',
        description: `__Demon Hunter__ from _Diablo 3_.`
      },
      {
        hiPath: this.getImagePath('doodles_rorschach_hi'),
        loPath: this.getImagePath('doodles_rorschach_lo'),
        thumbPath: this.getImagePath('doodles_rorschach_thumb'),
        alt: 'Rorschach',
        text: '',
        description: `__Rorschach__ from _Watchmen_. This art was a sketch and animation hybrid. 
        Check out the (animation)[https://premjitadhikary.github.io/Mesmerize/rorschach/] here`
      }
    ];
  }

}
