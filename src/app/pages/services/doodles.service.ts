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
        desktopPath: this.getImagePath('doodles_reDog_desk'),
        tabPath: this.getImagePath('doodles_reDog_tab'),
        mobilePath: this.getImagePath('doodles_reDog_mob'),
        thumbPath: this.getImagePath('doodles_reDog_thumb'),
        alt: 'Dog from Resident Evil',
        text: '',
        description: `The creature designs in Resident Evil impressed me a lot back then.`
      },
      {
        desktopPath: this.getImagePath('doodles_forest_desk'),
        tabPath: this.getImagePath('doodles_forest_tab'),
        mobilePath: this.getImagePath('doodles_forest_mob'),
        thumbPath: this.getImagePath('doodles_forest_thumb'),
        alt: 'Forest Sketch',
        text: '',
        description: `Most probably from some game.`
      },
      {
        desktopPath: this.getImagePath('doodles_furnace_desk'),
        tabPath: this.getImagePath('doodles_furnace_tab'),
        mobilePath: this.getImagePath('doodles_furnace_mob'),
        thumbPath: this.getImagePath('doodles_furnace_thumb'),
        alt: 'Forest Sketch',
        text: '',
        description: `Another game environment.`
      },
      {
        desktopPath: this.getImagePath('doodles_dh_desk'),
        tabPath: this.getImagePath('doodles_dh_tab'),
        mobilePath: this.getImagePath('doodles_dh_mob'),
        thumbPath: this.getImagePath('doodles_dh_thumb'),
        alt: 'Demon Hunter',
        text: '',
        description: `Demon Hunter from Diablo 3.`
      },
      {
        desktopPath: this.getImagePath('doodles_rorschach_desk'),
        tabPath: this.getImagePath('doodles_rorschach_tab'),
        mobilePath: this.getImagePath('doodles_rorschach_mob'),
        thumbPath: this.getImagePath('doodles_rorschach_thumb'),
        alt: 'Rorschach',
        text: '',
        description: `Rorschach from Watchmen. This art was a skect and animation hybrid.`
      }
    ];
  }

}
