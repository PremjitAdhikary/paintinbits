import { Injectable } from '@angular/core';
import { ImageLocationService } from 'src/app/shared/services/image-location.service';
import { IImage } from 'src/app/shared/domain/image';

@Injectable({
  providedIn: 'root'
})
export class RaiseTheDeadService {

  constructor(private _imgLocationService: ImageLocationService) { }

  getFinalImage(): IImage {
    return {
      desktopPath: this.getImagePath('raise_13_desk'),
      tabPath: this.getImagePath('raise_13_tab'),
      mobilePath: this.getImagePath('raise_13_mob'),
      thumbPath: this.getImagePath('raise_13_thumb'),
      alt: 'Raise The Dead',
      text: 'Final Image',
      description: `Now the finishing touch - I add eerie glow on Necromancer's Staff, play with 
      some reflections, add my signature and we have the final piece.`
    };
  }

  getSlideImages(): IImage[] {
    return [
      {
        desktopPath: this.getImagePath('raise_01_desk'),
        tabPath: this.getImagePath('raise_01_tab'),
        mobilePath: this.getImagePath('raise_01_mob'),
        thumbPath: this.getImagePath('raise_01_thumb'),
        alt: 'Level Lines',
        text: 'Level Lines',
        description: `First I draw lines for the levels.`
      },
      {
        desktopPath: this.getImagePath('raise_02_desk'),
        tabPath: this.getImagePath('raise_02_tab'),
        mobilePath: this.getImagePath('raise_02_mob'),
        thumbPath: this.getImagePath('raise_02_thumb'),
        alt: 'Initial Lines',
        text: 'Initial Lines',
        description: `Second I put out initial positions for the characters.`
      },
      {
        desktopPath: this.getImagePath('raise_03_desk'),
        tabPath: this.getImagePath('raise_03_tab'),
        mobilePath: this.getImagePath('raise_03_mob'),
        thumbPath: this.getImagePath('raise_03_thumb'),
        alt: 'Form to Characters',
        text: 'Form to Characters',
        description: `A few more lines to flesh out the characters.`
      },
      {
        desktopPath: this.getImagePath('raise_04_desk'),
        tabPath: this.getImagePath('raise_04_tab'),
        mobilePath: this.getImagePath('raise_04_mob'),
        thumbPath: this.getImagePath('raise_04_thumb'),
        alt: 'Finalize Character forms',
        text: 'Finalize Character forms',
        description: `Final lines, along with a few changes made - leftmost skeleton now has a 
        twisted fist open, and the nearest skeletons jaw almost dropped to the ground.`
      },
      {
        desktopPath: this.getImagePath('raise_05_desk'),
        tabPath: this.getImagePath('raise_05_tab'),
        mobilePath: this.getImagePath('raise_05_mob'),
        thumbPath: this.getImagePath('raise_05_thumb'),
        alt: 'Cross Hatching',
        text: 'Cross Hatching',
        description: `Here I started putting in some shades.`
      },
      {
        desktopPath: this.getImagePath('raise_06_desk'),
        tabPath: this.getImagePath('raise_06_tab'),
        mobilePath: this.getImagePath('raise_06_mob'),
        thumbPath: this.getImagePath('raise_06_thumb'),
        alt: 'Smudge Pass',
        text: 'Smudge Pass',
        description: `Once the shades were down, I start to smudge and bring out the contrast.`
      },
      {
        desktopPath: this.getImagePath('raise_07_desk'),
        tabPath: this.getImagePath('raise_07_tab'),
        mobilePath: this.getImagePath('raise_07_mob'),
        thumbPath: this.getImagePath('raise_07_thumb'),
        alt: 'More Smudge Pass',
        text: 'More Smudge Pass',
        description: `Shade, Smudge, Lighten Repeat.`
      },
      {
        desktopPath: this.getImagePath('raise_08_desk'),
        tabPath: this.getImagePath('raise_08_tab'),
        mobilePath: this.getImagePath('raise_08_mob'),
        thumbPath: this.getImagePath('raise_08_thumb'),
        alt: 'Add background',
        text: 'Add background',
        description: `Once the characters were down, I fleshed out the surroundings and came up 
        with a nice little grayscale artwork.`
      },
      {
        desktopPath: this.getImagePath('raise_09_desk'),
        tabPath: this.getImagePath('raise_09_tab'),
        mobilePath: this.getImagePath('raise_09_mob'),
        thumbPath: this.getImagePath('raise_09_thumb'),
        alt: 'Color Characters',
        text: 'Color Characters',
        description: `I started by adding colors to the characters.`
      },
      {
        desktopPath: this.getImagePath('raise_10_desk'),
        tabPath: this.getImagePath('raise_10_tab'),
        mobilePath: this.getImagePath('raise_10_mob'),
        thumbPath: this.getImagePath('raise_10_thumb'),
        alt: 'Color Backgrounds',
        text: 'Color Backgrounds',
        description: `Then I colored the backgrounds, I went for a night atmosphere - undead and 
        darkness, kind of made it the obvious choice.`
      },
      {
        desktopPath: this.getImagePath('raise_11_desk'),
        tabPath: this.getImagePath('raise_11_tab'),
        mobilePath: this.getImagePath('raise_11_mob'),
        thumbPath: this.getImagePath('raise_11_thumb'),
        alt: 'Color Harmony',
        text: 'Color Harmony',
        description: `I toned down the colors on the characters and surroundings to compensate for 
        the night light, added shadows for them too.`
      },
      {
        desktopPath: this.getImagePath('raise_12_desk'),
        tabPath: this.getImagePath('raise_12_tab'),
        mobilePath: this.getImagePath('raise_12_mob'),
        thumbPath: this.getImagePath('raise_12_thumb'),
        alt: 'Added Foreground',
        text: 'Added Foreground',
        description: `Added some foliage to the foreground because I felt like it.`
      },
      this.getFinalImage()
    ];
  }

  getImagePath(imgPath: string) {
    return this._imgLocationService.getImagePath(imgPath);
  }
}
