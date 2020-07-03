import { Injectable } from '@angular/core';
import { ImageLocationService } from 'src/app/shared/services/image-location.service';
import { IImage } from 'src/app/shared/domain/image';

@Injectable({
  providedIn: 'root'
})
export class WhiteboardService {

  constructor(private _imgLocationService: ImageLocationService) { }

  getImagePath(img: string): string {
    return this._imgLocationService.getImagePath(img);
  }

  getFromMyComicImage(): IImage {
    return {
      desktopPath: this.getImagePath('whiteboard_from_my_comic_desk'),
      tabPath: this.getImagePath('whiteboard_from_my_comic_tab'),
      mobilePath: this.getImagePath('whiteboard_from_my_comic_mob'),
      thumbPath: '',
      alt: 'From My Comic',
      text: '',
      description: ''
    };
  }

  getSlideImages(): IImage[] {
    return [
      {
        desktopPath: this.getImagePath('whiteboard_artwork_01_desk'),
        tabPath: this.getImagePath('whiteboard_artwork_01_tab'),
        mobilePath: this.getImagePath('whiteboard_artwork_01_mob'),
        thumbPath: this.getImagePath('whiteboard_artwork_01_thumb'),
        alt: 'Eddy',
        text: 'Eddy',
        description: `My first art was inspired by my first rock band.  'Eddy' is the mascot for 
          heavy metal band Iron Maiden.  I took 'Piece of Mind' cover and had a go. I think it came 
          out pretty good.`
      },
      {
        desktopPath: this.getImagePath('whiteboard_artwork_02_desk'),
        tabPath: this.getImagePath('whiteboard_artwork_02_tab'),
        mobilePath: this.getImagePath('whiteboard_artwork_02_mob'),
        thumbPath: this.getImagePath('whiteboard_artwork_02_thumb'),
        alt: 'Arthas',
        text: 'Arthas',
        description: `My next attempt was artwork from my favorite game Warcraft.  This piece was 
          Arthas sitting on the frozen Throne.  I love the Arthas storyline.  His decent into the 
          darkness.  I have used the same in my comic too.`
      },
      {
        desktopPath: this.getImagePath('whiteboard_artwork_03_desk'),
        tabPath: this.getImagePath('whiteboard_artwork_03_tab'),
        mobilePath: this.getImagePath('whiteboard_artwork_03_mob'),
        thumbPath: this.getImagePath('whiteboard_artwork_03_thumb'),
        alt: 'Portal',
        text: 'Portal',
        description: `Another artwork from Warcraft.  This piece was the Dark Portal. Both the 
        pieces had a majestic feel to them (you should try surfing for the original art).`
      },
      {
        desktopPath: this.getImagePath('whiteboard_artwork_06_desk'),
        tabPath: this.getImagePath('whiteboard_artwork_06_tab'),
        mobilePath: this.getImagePath('whiteboard_artwork_06_mob'),
        thumbPath: this.getImagePath('whiteboard_artwork_06_thumb'),
        alt: 'Blob',
        text: 'Blob',
        description: `Then I took a turn to evil, I am not sure where I got this, but it was some 
        concept art from a game.  Just loved it, had to draw it.`
      },
      {
        desktopPath: this.getImagePath('whiteboard_artwork_08_desk'),
        tabPath: this.getImagePath('whiteboard_artwork_08_tab'),
        mobilePath: this.getImagePath('whiteboard_artwork_08_mob'),
        thumbPath: this.getImagePath('whiteboard_artwork_08_thumb'),
        alt: 'Wolverine',
        text: 'Wolverine',
        description: `X-men 3 had either come out, or was about to.  Anyways, you can understand the 
        excitement.  I was so impressed by Wolverine, I had to draw him twice.  I found these 
        manga-ish Wolverines somewhere on the net.  Had to try.`
      },
      {
        desktopPath: this.getImagePath('whiteboard_artwork_09_desk'),
        tabPath: this.getImagePath('whiteboard_artwork_09_tab'),
        mobilePath: this.getImagePath('whiteboard_artwork_09_mob'),
        thumbPath: this.getImagePath('whiteboard_artwork_09_thumb'),
        alt: 'Rammstein',
        text: 'Rammstein',
        description: `Rammstein - I had come across their live performance videos, they simply blew 
        me off.  Recently I had a chance to actually go and enjoy a live Rammstein concert.  I can 
        hundred percent agree to the saying "Other bands Play, Rammstein Burns".  Coming back to the 
        original article, I just couldn't stop myself from drawing this.`
      },
      {
        desktopPath: this.getImagePath('whiteboard_artwork_04_desk'),
        tabPath: this.getImagePath('whiteboard_artwork_04_tab'),
        mobilePath: this.getImagePath('whiteboard_artwork_04_mob'),
        thumbPath: this.getImagePath('whiteboard_artwork_04_thumb'),
        alt: 'Excorcist',
        text: 'Excorcist',
        description: `Back into Evil worship with Exorcist.  Most of my colleagues were 
        disturbed/disgusted.  I actually had HR come to me to get rid of it.  I said 'in time'.  
        I mean someone could have simply erased it off the board, no one did.  That was 
        surprising.`
      },
      {
        desktopPath: this.getImagePath('whiteboard_artwork_05_desk'),
        tabPath: this.getImagePath('whiteboard_artwork_05_tab'),
        mobilePath: this.getImagePath('whiteboard_artwork_05_mob'),
        thumbPath: this.getImagePath('whiteboard_artwork_05_thumb'),
        alt: 'Random Characters',
        text: 'Random Characters',
        description: `After few more HR visits, I thought to get rid of it and draw something 
        new.  Thought to cool it off with something less severe.  I surfed and found some random 
        Fantasy Game Characters.  Picked 3 of them and wala, whiteboard updated.`
      },
      {
        desktopPath: this.getImagePath('whiteboard_artwork_07_desk'),
        tabPath: this.getImagePath('whiteboard_artwork_07_tab'),
        mobilePath: this.getImagePath('whiteboard_artwork_07_mob'),
        thumbPath: this.getImagePath('whiteboard_artwork_07_thumb'),
        alt: 'Clash',
        text: 'Clash',
        description: `Next art was special.  In the sense it was the first time I had drawn 
        something on the whiteboard without any reference.  Inspiration was my day to day 
        activities.  I was being constantly pushed by my lead to ready deliverable before deadline 
        (which were ridiculous by the way).  In this I imagined myself a Knight and my lead as a 
        Fiery Dragon.`
      },
      {
        desktopPath: this.getImagePath('whiteboard_artwork_10_desk'),
        tabPath: this.getImagePath('whiteboard_artwork_10_tab'),
        mobilePath: this.getImagePath('whiteboard_artwork_10_mob'),
        thumbPath: this.getImagePath('whiteboard_artwork_10_thumb'),
        alt: 'Peace',
        text: 'Peace',
        description: `This was another album artwork.  Problem is I can't remember which.`
      },
      {
        desktopPath: this.getImagePath('whiteboard_artwork_11_desk'),
        tabPath: this.getImagePath('whiteboard_artwork_11_tab'),
        mobilePath: this.getImagePath('whiteboard_artwork_11_mob'),
        thumbPath: this.getImagePath('whiteboard_artwork_11_thumb'),
        alt: 'Zombies',
        text: 'Zombies',
        description: `Resident Evil.  Never played the game, but did follow the movies, zombies 
        getting their *** kicked by a chick, what's not to like?  I had used the 'fewer lines to 
        express more' technique here.  What does that mean?  Well I read somewhere about an 
        artstyle where the artist would just put in a few strokes and leave the rest up to the 
        viewers imagination to fill in the details.`
      },
      {
        desktopPath: this.getImagePath('whiteboard_artwork_14_desk'),
        tabPath: this.getImagePath('whiteboard_artwork_14_tab'),
        mobilePath: this.getImagePath('whiteboard_artwork_14_mob'),
        thumbPath: this.getImagePath('whiteboard_artwork_14_thumb'),
        alt: 'Spawn',
        text: 'Spawn',
        description: `Spawn is another comic that always fascinated me.  The point is Spawn always 
        had the greatest cover art I could find.  I took 2 random covers and did a whiteboard.`
      },
      {
        desktopPath: this.getImagePath('whiteboard_artwork_15_desk'),
        tabPath: this.getImagePath('whiteboard_artwork_15_tab'),
        mobilePath: this.getImagePath('whiteboard_artwork_15_mob'),
        thumbPath: this.getImagePath('whiteboard_artwork_15_thumb'),
        alt: 'More Spawn',
        text: 'More Spawn',
        description: `Another one with Spawn.  But this was totally imagined.  You can see from the 
        simple background that it was just so that I could fill up the board with something.  Later I 
        regretted drawing the legs.  It would have been much cooler with just the cape floating.`
      },
      {
        desktopPath: this.getImagePath('whiteboard_artwork_12_desk'),
        tabPath: this.getImagePath('whiteboard_artwork_12_tab'),
        mobilePath: this.getImagePath('whiteboard_artwork_12_mob'),
        thumbPath: this.getImagePath('whiteboard_artwork_12_thumb'),
        alt: 'The Joker',
        text: 'The Joker',
        description: `I read a graphic novel 'Arkham Asylum' sometime then.  There was a panel 
        where Joker had a sinister laugh.  I wanted to see if I can create the same effect on the 
        board.  Again this was a disturbing image for my colleagues.`
      },
      {
        desktopPath: this.getImagePath('whiteboard_artwork_ln_01_desk'),
        tabPath: this.getImagePath('whiteboard_artwork_ln_01_tab'),
        mobilePath: this.getImagePath('whiteboard_artwork_ln_01_mob'),
        thumbPath: this.getImagePath('whiteboard_artwork_ln_01_thumb'),
        alt: 'Still More Spawn',
        text: 'Still More Spawn',
        description: `Another Spawn cover.  I know, I love their covers.`
      },
      {
        desktopPath: this.getImagePath('whiteboard_artwork_ln_02_desk'),
        tabPath: this.getImagePath('whiteboard_artwork_ln_02_tab'),
        mobilePath: this.getImagePath('whiteboard_artwork_ln_02_mob'),
        thumbPath: this.getImagePath('whiteboard_artwork_ln_02_thumb'),
        alt: 'Bleach',
        text: 'Bleach',
        description: `Ichigo Kurosaki from Bleach. This was my first attempt at manga art.  This 
        was also the first time I collaborated with another artist.  Amol Jain, one of my colleagues, 
        also a fan of the anime, we teamed up and this is the outcome.  This was also inspired by 
        art found online.`
      },
      {
        desktopPath: this.getImagePath('whiteboard_artwork_16_desk'),
        tabPath: this.getImagePath('whiteboard_artwork_16_tab'),
        mobilePath: this.getImagePath('whiteboard_artwork_16_mob'),
        thumbPath: this.getImagePath('whiteboard_artwork_16_thumb'),
        alt: 'Tyrael from Diablo',
        text: 'Tyrael from Diablo',
        description: `Next was something from another of my favorite games, 'Diablo'.  I started 
        playing Diablo 2 in college.  This is Tyrael from Diablo 3.`
      },
      {
        desktopPath: this.getImagePath('whiteboard_artwork_17_desk'),
        tabPath: this.getImagePath('whiteboard_artwork_17_tab'),
        mobilePath: this.getImagePath('whiteboard_artwork_17_mob'),
        thumbPath: this.getImagePath('whiteboard_artwork_17_thumb'),
        alt: 'Joker Again',
        text: 'Joker Again',
        description: `Another Joker.  Christmas Special ...`
      },
      {
        desktopPath: this.getImagePath('whiteboard_artwork_18_desk'),
        tabPath: this.getImagePath('whiteboard_artwork_18_tab'),
        mobilePath: this.getImagePath('whiteboard_artwork_18_mob'),
        thumbPath: this.getImagePath('whiteboard_artwork_18_thumb'),
        alt: 'Batman v Superman',
        text: 'Batman v Superman',
        description: `Always been a bog fan of the Worlds finest.  This was when Batman v Superman 
        hit the theaters.`
      },
      {
        desktopPath: this.getImagePath('whiteboard_artwork_19_desk'),
        tabPath: this.getImagePath('whiteboard_artwork_19_tab'),
        mobilePath: this.getImagePath('whiteboard_artwork_19_mob'),
        thumbPath: this.getImagePath('whiteboard_artwork_19_thumb'),
        alt: 'Ichigo Again',
        text: 'Ichigo Again',
        description: `Another Ichigo.  When will they finish the anime???`
      },
      {
        desktopPath: this.getImagePath('whiteboard_artwork_c_01_desk'),
        tabPath: this.getImagePath('whiteboard_artwork_c_01_tab'),
        mobilePath: this.getImagePath('whiteboard_artwork_c_01_mob'),
        thumbPath: this.getImagePath('whiteboard_artwork_c_01_thumb'),
        alt: 'Leap of Faith',
        text: 'Leap of Faith',
        description: `Assassin's Creed...  Never played the game, but loved the game videos.  I was 
        happy with the movie too...`
      }
    ];
  }
}
