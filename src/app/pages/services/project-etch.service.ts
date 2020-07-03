import { Injectable } from '@angular/core';
import { ImageLocationService } from 'src/app/shared/services/image-location.service';
import { IImage } from 'src/app/shared/domain/image';

@Injectable({
  providedIn: 'root'
})
export class ProjectEtchService {

  constructor(private _imgLocationService: ImageLocationService) { }

  getImagePath(imgPath: string) {
    return this._imgLocationService.getImagePath(imgPath);
  }

  getAll(): IImage {
    return {
      desktopPath: this.getImagePath('etch_all_desk'),
      tabPath: this.getImagePath('etch_all_tab'),
      mobilePath: this.getImagePath('etch_all_mob'),
      thumbPath: '',
      alt: 'all together',
      text: '',
      description: ''
    };
  }

  getSlides(): IImage[] {
    return [
      {
        desktopPath: this.getImagePath('etch_01_desk'),
        tabPath: this.getImagePath('etch_01_tab'),
        mobilePath: this.getImagePath('etch_01_mob'),
        thumbPath: this.getImagePath('etch_01_thumb'),
        alt: 'Ichigo',
        text: '',
        description: `First Up: Ichigo Kurosaki from Bleach, one of the most stylish anime 
        characters in my opinion.`
      },
      {
        desktopPath: this.getImagePath('etch_02_desk'),
        tabPath: this.getImagePath('etch_02_tab'),
        mobilePath: this.getImagePath('etch_02_mob'),
        thumbPath: this.getImagePath('etch_02_thumb'),
        alt: 'Tintin',
        text: '',
        description: `Next, Tintin and Snowy.  They were my introduction to comics.`
      },
      {
        desktopPath: this.getImagePath('etch_03_desk'),
        tabPath: this.getImagePath('etch_03_tab'),
        mobilePath: this.getImagePath('etch_03_mob'),
        thumbPath: this.getImagePath('etch_03_thumb'),
        alt: 'Mogli',
        text: '',
        description: `Third, Mogli from Jungle book, those Sunday mornings still make me nostalgic.`
      },
      {
        desktopPath: this.getImagePath('etch_04_desk'),
        tabPath: this.getImagePath('etch_04_tab'),
        mobilePath: this.getImagePath('etch_04_mob'),
        thumbPath: this.getImagePath('etch_04_thumb'),
        alt: 'Asterix',
        text: '',
        description: `Fourth, Asterix n Obelix, their adventures still bring a smile to my face.`
      },
      {
        desktopPath: this.getImagePath('etch_05_desk'),
        tabPath: this.getImagePath('etch_05_tab'),
        mobilePath: this.getImagePath('etch_05_mob'),
        thumbPath: this.getImagePath('etch_05_thumb'),
        alt: 'Archie',
        text: '',
        description: `Fifth, Archie and his 2 favorite gals.  The eternal love triangle still 
        goes on.`
      },
      {
        desktopPath: this.getImagePath('etch_06_desk'),
        tabPath: this.getImagePath('etch_06_tab'),
        mobilePath: this.getImagePath('etch_06_mob'),
        thumbPath: this.getImagePath('etch_06_thumb'),
        alt: 'Archie',
        text: '',
        description: `Sixth, Calvin and Hobbes.  Back in the days every morning I would take out 
        the comics strip page from the newspaper and start my day.`
      },
      {
        desktopPath: this.getImagePath('etch_07_desk'),
        tabPath: this.getImagePath('etch_07_tab'),
        mobilePath: this.getImagePath('etch_07_mob'),
        thumbPath: this.getImagePath('etch_07_thumb'),
        alt: 'Samurai Jack',
        text: '',
        description: `Seventh, Samurai Jack. Cinematic storytelling, stylish action, minimum 
        dialogue, 1 amazing show`
      },
      {
        desktopPath: this.getImagePath('etch_08_desk'),
        tabPath: this.getImagePath('etch_08_tab'),
        mobilePath: this.getImagePath('etch_08_mob'),
        thumbPath: this.getImagePath('etch_08_thumb'),
        alt: 'Avatar Aang',
        text: '',
        description: `Eight, Avatar Aang. A goofy kid with superpowers, love the show, love the 
        comics`
      },
      {
        desktopPath: this.getImagePath('etch_09_desk'),
        tabPath: this.getImagePath('etch_09_tab'),
        mobilePath: this.getImagePath('etch_09_mob'),
        thumbPath: this.getImagePath('etch_09_thumb'),
        alt: 'Naruto',
        text: '',
        description: `Ninth, Naruto, anyone who knows anime/manga knows this action packed 
        series.`
      },
      {
        desktopPath: this.getImagePath('etch_10_desk'),
        tabPath: this.getImagePath('etch_10_tab'),
        mobilePath: this.getImagePath('etch_10_mob'),
        thumbPath: this.getImagePath('etch_10_thumb'),
        alt: 'Major Kusanagi',
        text: '',
        description: `Tenth, Major Kusanagi from Ghost in the Shell. The best sci-fi series ever in 
        my humble opinion.`
      },
      {
        desktopPath: this.getImagePath('etch_11_desk'),
        tabPath: this.getImagePath('etch_11_tab'),
        mobilePath: this.getImagePath('etch_11_mob'),
        thumbPath: this.getImagePath('etch_11_thumb'),
        alt: 'Ed and Al Elric',
        text: '',
        description: `Eleventh, Elric brothers from Fullmetal Alchemist. Amazing story and action in 
        this series, but it was the chemistry between the brothers that set it apart.`
      },
      {
        desktopPath: this.getImagePath('etch_12_desk'),
        tabPath: this.getImagePath('etch_12_tab'),
        mobilePath: this.getImagePath('etch_12_mob'),
        thumbPath: this.getImagePath('etch_12_thumb'),
        alt: 'Miyamoto Musashi',
        text: '',
        description: `Twelfth, Musashi from Vagabond. The detailed artwork in the manga is simply 
        out of the world. While I tried my best to bring out mangaka Takehiko's style in this, I 
        have my limits.`
      },
      {
        desktopPath: this.getImagePath('etch_13_desk'),
        tabPath: this.getImagePath('etch_13_tab'),
        mobilePath: this.getImagePath('etch_13_mob'),
        thumbPath: this.getImagePath('etch_13_thumb'),
        alt: 'Phantom',
        text: '',
        description: `Thirteenth, Phantom, The Ghost Who Walks ... I used to read the newspaper 
        strips and also whatever digests I could get my hands on back in the days.`
      },
      {
        desktopPath: this.getImagePath('etch_14_desk'),
        tabPath: this.getImagePath('etch_14_tab'),
        mobilePath: this.getImagePath('etch_14_mob'),
        thumbPath: this.getImagePath('etch_14_thumb'),
        alt: 'Afro Samurai',
        text: '',
        description: `Fourteenth, Afro Samurai ... Just love this series, bloody stylish, nuff 
        said!`
      },
      {
        desktopPath: this.getImagePath('etch_15_desk'),
        tabPath: this.getImagePath('etch_15_tab'),
        mobilePath: this.getImagePath('etch_15_mob'),
        thumbPath: this.getImagePath('etch_15_thumb'),
        alt: 'Scorpion',
        text: '',
        description: `Fifteenth, Scorpion from Mortal Kombat - Still love the 'Get Over Here' ... and 
        used this move/power so often in the game ...`
      },
      {
        desktopPath: this.getImagePath('etch_16_desk'),
        tabPath: this.getImagePath('etch_16_tab'),
        mobilePath: this.getImagePath('etch_16_mob'),
        thumbPath: this.getImagePath('etch_16_thumb'),
        alt: 'Batman n Superman',
        text: '',
        description: `Sixteenth, Worlds Finest, I don't mind watching episodes of Justice League 
        Unlimited even now, and with Man of Steel 2 announced to have Batman in it, I had to get 
        these 2 together.`
      },
      {
        desktopPath: this.getImagePath('etch_17_desk'),
        tabPath: this.getImagePath('etch_17_tab'),
        mobilePath: this.getImagePath('etch_17_mob'),
        thumbPath: this.getImagePath('etch_17_thumb'),
        alt: 'Spawn',
        text: '',
        description: `Seventeenth, Spawn... and I just had to RED his cape, felt incomplete 
        otherwise.`
      },
      {
        desktopPath: this.getImagePath('etch_18_desk'),
        tabPath: this.getImagePath('etch_18_tab'),
        mobilePath: this.getImagePath('etch_18_mob'),
        thumbPath: this.getImagePath('etch_18_thumb'),
        alt: 'Wolverine',
        text: '',
        description: `Eighteenth, Wolverine ... He is just too cool ...`
      },
      {
        desktopPath: this.getImagePath('etch_19_desk'),
        tabPath: this.getImagePath('etch_19_tab'),
        mobilePath: this.getImagePath('etch_19_mob'),
        thumbPath: this.getImagePath('etch_19_thumb'),
        alt: 'Arthas',
        text: '',
        description: `Ninteenth, the one and only Lich King - from Warcraft, best strategy game ever 
        IMHO. Took me 2 days to complete this...`
      },
      {
        desktopPath: this.getImagePath('etch_20_desk'),
        tabPath: this.getImagePath('etch_20_tab'),
        mobilePath: this.getImagePath('etch_20_mob'),
        thumbPath: this.getImagePath('etch_20_thumb'),
        alt: 'Bonnie',
        text: '',
        description: `Extra... Bonnie`
      },
      {
        desktopPath: this.getImagePath('etch_21_desk'),
        tabPath: this.getImagePath('etch_21_tab'),
        mobilePath: this.getImagePath('etch_21_mob'),
        thumbPath: this.getImagePath('etch_21_thumb'),
        alt: 'Putai',
        text: '',
        description: `Extra... Putai`
      }
    ];
  }
}
