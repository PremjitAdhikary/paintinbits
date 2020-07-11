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
        hiPath: this.getImagePath('moods_shine_hi'),
        loPath: this.getImagePath('moods_shine_lo'),
        thumbPath: '',
        alt: 'Mood 1 - Shine',
        text: 'Mood 1 - Shine',
        description: `As Sky was the subject, I decided to keep the rest is silhouette, that way I 
        can keep the viewers interest on the Sky and not on the details anywhere else.  The idea was 
        simple, brightest day ever.`
      },
      {
        hiPath: this.getImagePath('moods_set_hi'),
        loPath: this.getImagePath('moods_set_lo'),
        thumbPath: '',
        alt: 'Mood 2 - Set',
        text: 'Mood 2 - Set',
        description: `Romantic mood anyone?`
      },
      {
        hiPath: this.getImagePath('moods_dark_hi'),
        loPath: this.getImagePath('moods_dark_lo'),
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
