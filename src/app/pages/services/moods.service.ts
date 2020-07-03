import { Injectable } from '@angular/core';
import { ImageLocationService } from 'src/app/shared/services/image-location.service';
import { IImage } from 'src/app/shared/domain/image';

@Injectable({
  providedIn: 'root'
})
export class MoodsService {

  constructor(private _imgLocationService: ImageLocationService) { }

  getImagePath(imgPath: string) {
    return this._imgLocationService.getImagePath(imgPath);
  }

  getSlideImages(): IImage[] {
    return [
      {
        desktopPath: this.getImagePath('moods_shine_desk'),
        tabPath: this.getImagePath('moods_shine_tab'),
        mobilePath: this.getImagePath('moods_shine_mob'),
        thumbPath: '',
        alt: 'Mood 1 - Shine',
        text: 'Mood 1 - Shine',
        description: `As Sky was the subject, I decided to keep the rest is silhouette, that way I 
        can keep the viewers interest on the Sky and not on the details anywhere else.  The idea was 
        simple, brightest day ever.`
      },
      {
        desktopPath: this.getImagePath('moods_set_desk'),
        tabPath: this.getImagePath('moods_set_tab'),
        mobilePath: this.getImagePath('moods_set_mob'),
        thumbPath: '',
        alt: 'Mood 2 - Set',
        text: 'Mood 2 - Set',
        description: `Romantic mood anyone?`
      },
      {
        desktopPath: this.getImagePath('moods_dark_desk'),
        tabPath: this.getImagePath('moods_dark_tab'),
        mobilePath: this.getImagePath('moods_dark_mob'),
        thumbPath: '',
        alt: 'Mood 3 - Dark',
        text: 'Mood 3 - Dark',
        description: `This was the most challenging Sky to come up on the canvas.  Dark Mood meant 
        lot of dark clouds hovering over you.  The lightning strike gave the atmosphere a touch of 
        evil.`
      }
    ];
  }
}
