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
      hiPath: this.getImagePath('etch_all_hi'),
      loPath: this.getImagePath('etch_all_lo'),
      thumbPath: '',
      alt: 'all together',
      text: '',
      description: ''
    };
  }

  getSlides(): IImage[] {
    return [
      {
        hiPath: this.getImagePath('etch_01_hi'),
        loPath: this.getImagePath('etch_01_lo'),
        thumbPath: this.getImagePath('etch_01_thumb'),
        alt: 'Ichigo',
        text: '',
        description: `First Up: Ichigo Kurosaki from Bleach, one of the most stylish anime 
        characters in my opinion.`
      },
      {
        hiPath: this.getImagePath('etch_02_hi'),
        loPath: this.getImagePath('etch_02_lo'),
        thumbPath: this.getImagePath('etch_02_thumb'),
        alt: 'Tintin',
        text: '',
        description: `Next, Tintin and Snowy.  They were my introduction to comics.`
      },
      {
        hiPath: this.getImagePath('etch_03_hi'),
        loPath: this.getImagePath('etch_03_lo'),
        thumbPath: this.getImagePath('etch_03_thumb'),
        alt: 'Mogli',
        text: '',
        description: `Third, Mogli from Jungle book, those Sunday mornings still make me nostalgic.`
      },
      {
        hiPath: this.getImagePath('etch_04_hi'),
        loPath: this.getImagePath('etch_04_lo'),
        thumbPath: this.getImagePath('etch_04_thumb'),
        alt: 'Asterix',
        text: '',
        description: `Fourth, Asterix n Obelix, their adventures still bring a smile to my face.`
      },
      {
        hiPath: this.getImagePath('etch_05_hi'),
        loPath: this.getImagePath('etch_05_lo'),
        thumbPath: this.getImagePath('etch_05_thumb'),
        alt: 'Archie',
        text: '',
        description: `Fifth, Archie and his 2 favorite gals.  The eternal love triangle still 
        goes on.`
      },
      {
        hiPath: this.getImagePath('etch_06_hi'),
        loPath: this.getImagePath('etch_06_lo'),
        thumbPath: this.getImagePath('etch_06_thumb'),
        alt: 'Archie',
        text: '',
        description: `Sixth, Calvin and Hobbes.  Back in the days every morning I would take out 
        the comics strip page from the newspaper and start my day.`
      },
      {
        hiPath: this.getImagePath('etch_07_hi'),
        loPath: this.getImagePath('etch_07_lo'),
        thumbPath: this.getImagePath('etch_07_thumb'),
        alt: 'Samurai Jack',
        text: '',
        description: `Seventh, Samurai Jack. Cinematic storytelling, stylish action, minimum 
        dialogue, 1 amazing show`
      },
      {
        hiPath: this.getImagePath('etch_08_hi'),
        loPath: this.getImagePath('etch_08_lo'),
        thumbPath: this.getImagePath('etch_08_thumb'),
        alt: 'Avatar Aang',
        text: '',
        description: `Eight, Avatar Aang. A goofy kid with superpowers, love the show, love the 
        comics`
      },
      {
        hiPath: this.getImagePath('etch_09_hi'),
        loPath: this.getImagePath('etch_09_lo'),
        thumbPath: this.getImagePath('etch_09_thumb'),
        alt: 'Naruto',
        text: '',
        description: `Ninth, Naruto, anyone who knows anime/manga knows this action packed 
        series.`
      },
      {
        hiPath: this.getImagePath('etch_10_hi'),
        loPath: this.getImagePath('etch_10_lo'),
        thumbPath: this.getImagePath('etch_10_thumb'),
        alt: 'Major Kusanagi',
        text: '',
        description: `Tenth, Major Kusanagi from Ghost in the Shell. The best sci-fi series ever in 
        my humble opinion.`
      },
      {
        hiPath: this.getImagePath('etch_11_hi'),
        loPath: this.getImagePath('etch_11_lo'),
        thumbPath: this.getImagePath('etch_11_thumb'),
        alt: 'Ed and Al Elric',
        text: '',
        description: `Eleventh, Elric brothers from Fullmetal Alchemist. Amazing story and action in 
        this series, but it was the chemistry between the brothers that set it apart.`
      },
      {
        hiPath: this.getImagePath('etch_12_hi'),
        loPath: this.getImagePath('etch_12_lo'),
        thumbPath: this.getImagePath('etch_12_thumb'),
        alt: 'Miyamoto Musashi',
        text: '',
        description: `Twelfth, Musashi from Vagabond. The detailed artwork in the manga is simply 
        out of the world. While I tried my best to bring out mangaka Takehiko's style in this, I 
        have my limits.`
      },
      {
        hiPath: this.getImagePath('etch_13_hi'),
        loPath: this.getImagePath('etch_13_lo'),
        thumbPath: this.getImagePath('etch_13_thumb'),
        alt: 'Phantom',
        text: '',
        description: `Thirteenth, Phantom, The Ghost Who Walks ... I used to read the newspaper 
        strips and also whatever digests I could get my hands on back in the days.`
      },
      {
        hiPath: this.getImagePath('etch_14_hi'),
        loPath: this.getImagePath('etch_14_lo'),
        thumbPath: this.getImagePath('etch_14_thumb'),
        alt: 'Afro Samurai',
        text: '',
        description: `Fourteenth, Afro Samurai ... Just love this series, bloody stylish, nuff 
        said!`
      },
      {
        hiPath: this.getImagePath('etch_15_hi'),
        loPath: this.getImagePath('etch_15_lo'),
        thumbPath: this.getImagePath('etch_15_thumb'),
        alt: 'Scorpion',
        text: '',
        description: `Fifteenth, Scorpion from Mortal Kombat - Still love the 'Get Over Here' ... and 
        used this move/power so often in the game ...`
      },
      {
        hiPath: this.getImagePath('etch_16_hi'),
        loPath: this.getImagePath('etch_16_lo'),
        thumbPath: this.getImagePath('etch_16_thumb'),
        alt: 'Batman n Superman',
        text: '',
        description: `Sixteenth, Worlds Finest, I don't mind watching episodes of Justice League 
        Unlimited even now, and with Man of Steel 2 announced to have Batman in it, I had to get 
        these 2 together.`
      },
      {
        hiPath: this.getImagePath('etch_17_hi'),
        loPath: this.getImagePath('etch_17_lo'),
        thumbPath: this.getImagePath('etch_17_thumb'),
        alt: 'Spawn',
        text: '',
        description: `Seventeenth, Spawn... and I just had to RED his cape, felt incomplete 
        otherwise.`
      },
      {
        hiPath: this.getImagePath('etch_18_hi'),
        loPath: this.getImagePath('etch_18_lo'),
        thumbPath: this.getImagePath('etch_18_thumb'),
        alt: 'Wolverine',
        text: '',
        description: `Eighteenth, Wolverine ... He is just too cool ...`
      },
      {
        hiPath: this.getImagePath('etch_19_hi'),
        loPath: this.getImagePath('etch_19_lo'),
        thumbPath: this.getImagePath('etch_19_thumb'),
        alt: 'Arthas',
        text: '',
        description: `Ninteenth, the one and only Lich King - from Warcraft, best strategy game ever 
        IMHO. Took me 2 days to complete this...`
      },
      {
        hiPath: this.getImagePath('etch_20_hi'),
        loPath: this.getImagePath('etch_20_lo'),
        thumbPath: this.getImagePath('etch_20_thumb'),
        alt: 'Bonnie',
        text: '',
        description: `Extra... Bonnie`
      },
      {
        hiPath: this.getImagePath('etch_21_hi'),
        loPath: this.getImagePath('etch_21_lo'),
        thumbPath: this.getImagePath('etch_21_thumb'),
        alt: 'Putai',
        text: '',
        description: `Extra... Putai`
      }
    ];
  }
}
