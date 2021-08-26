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
      hiPath: this.getImagePath('whiteboard_from_my_comic_hi'),
      loPath: this.getImagePath('whiteboard_from_my_comic_lo'),
      thumbPath: '',
      alt: 'From My Comic',
      text: '',
      description: ''
    };
  }

  getSlideImages(): IImage[] {
    return [
      {
        hiPath: this.getImagePath('whiteboard_artwork_01_hi'),
        loPath: this.getImagePath('whiteboard_artwork_01_lo'),
        thumbPath: this.getImagePath('whiteboard_artwork_01_thumb'),
        alt: 'Eddy',
        text: 'Eddy',
        description: `My first art was inspired by my first rock band.  _Eddy_ is the mascot for 
          heavy metal band _Iron Maiden_.  I took _Piece of Mind_ cover and had a go. I think it 
          came out pretty good.`
      },
      {
        hiPath: this.getImagePath('whiteboard_artwork_02_hi'),
        loPath: this.getImagePath('whiteboard_artwork_02_lo'),
        thumbPath: this.getImagePath('whiteboard_artwork_02_thumb'),
        alt: 'Arthas',
        text: 'Arthas',
        description: `My next attempt was artwork from my favorite game _Warcraft_.  This piece was 
          _Arthas_ sitting on the _Frozen Throne_.  I love the Arthas storyline.  His descent into 
          the darkness.  I have used the same in my comic too.`
      },
      {
        hiPath: this.getImagePath('whiteboard_artwork_03_hi'),
        loPath: this.getImagePath('whiteboard_artwork_03_lo'),
        thumbPath: this.getImagePath('whiteboard_artwork_03_thumb'),
        alt: 'Portal',
        text: 'Portal',
        description: `Another artwork from _Warcraft_.  This piece was the _Dark Portal_. Both 
        the pieces had a majestic feel to them (you should try surfing for the original art).`
      },
      {
        hiPath: this.getImagePath('whiteboard_artwork_06_hi'),
        loPath: this.getImagePath('whiteboard_artwork_06_lo'),
        thumbPath: this.getImagePath('whiteboard_artwork_06_thumb'),
        alt: 'Blob',
        text: 'Blob',
        description: `Then I took a turn to evil, I am not sure where I got this, but it was some 
        concept art from a game.  Just loved it, had to draw it.`
      },
      {
        hiPath: this.getImagePath('whiteboard_artwork_08_hi'),
        loPath: this.getImagePath('whiteboard_artwork_08_lo'),
        thumbPath: this.getImagePath('whiteboard_artwork_08_thumb'),
        alt: 'Wolverine',
        text: 'Wolverine',
        description: `_X-men 3_ had either come out, or was about to.  Anyways, you can understand 
        the excitement.  I was so impressed by _Wolverine_, I had to draw him twice.  I found these 
        manga-ish Wolverines somewhere on the net.  Had to try.`
      },
      {
        hiPath: this.getImagePath('whiteboard_artwork_09_hi'),
        loPath: this.getImagePath('whiteboard_artwork_09_lo'),
        thumbPath: this.getImagePath('whiteboard_artwork_09_thumb'),
        alt: 'Rammstein',
        text: 'Rammstein',
        description: `_Rammstein_ - I had come across their live performance videos, they simply 
        blew me off.  Recently I had a chance to actually go and enjoy a live Rammstein concert.  
        I can hundred percent agree to the saying _Other bands Play, Rammstein Burns_.  Coming 
        back to the original article, I just couldn't stop myself from drawing this.`
      },
      {
        hiPath: this.getImagePath('whiteboard_artwork_04_hi'),
        loPath: this.getImagePath('whiteboard_artwork_04_lo'),
        thumbPath: this.getImagePath('whiteboard_artwork_04_thumb'),
        alt: 'Excorcist',
        text: 'Excorcist',
        description: `Back into Evil worship with _Exorcist_.  Most of my colleagues were 
        disturbed/disgusted.  I actually had HR come to me to get rid of it.  I said _in time_.  
        I mean someone could have simply erased it off the board, no one did.  That was 
        surprising.`
      },
      {
        hiPath: this.getImagePath('whiteboard_artwork_05_hi'),
        loPath: this.getImagePath('whiteboard_artwork_05_lo'),
        thumbPath: this.getImagePath('whiteboard_artwork_05_thumb'),
        alt: 'Random Characters',
        text: 'Random Characters',
        description: `After few more HR visits, I thought to get rid of it and draw something 
        new.  Thought to cool it off with something less severe.  I surfed and found some random 
        Fantasy Game Characters.  Picked 3 of them and wala, whiteboard updated.`
      },
      {
        hiPath: this.getImagePath('whiteboard_artwork_07_hi'),
        loPath: this.getImagePath('whiteboard_artwork_07_lo'),
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
        hiPath: this.getImagePath('whiteboard_artwork_10_hi'),
        loPath: this.getImagePath('whiteboard_artwork_10_lo'),
        thumbPath: this.getImagePath('whiteboard_artwork_10_thumb'),
        alt: 'Peace',
        text: 'Peace',
        description: `This was another album artwork.  Problem is I can't remember which.`
      },
      {
        hiPath: this.getImagePath('whiteboard_artwork_11_hi'),
        loPath: this.getImagePath('whiteboard_artwork_11_lo'),
        thumbPath: this.getImagePath('whiteboard_artwork_11_thumb'),
        alt: 'Zombies',
        text: 'Zombies',
        description: `_Resident Evil_.  Never played the game, but did follow the movies, zombies 
        getting their *** kicked by a chick, what's not to like?  I had used the _fewer lines to 
        express more_ technique here.  What does that mean?  Well I read somewhere about an 
        artstyle where the artist would just put in a few strokes and leave the rest up to the 
        viewers imagination to fill in the details.`
      },
      {
        hiPath: this.getImagePath('whiteboard_artwork_14_hi'),
        loPath: this.getImagePath('whiteboard_artwork_14_lo'),
        thumbPath: this.getImagePath('whiteboard_artwork_14_thumb'),
        alt: 'Spawn',
        text: 'Spawn',
        description: `_Spawn_ is another comic that always fascinated me.  The point is Spawn 
        always had the greatest cover art I could find.  I took 2 random covers and did a 
        whiteboard.`
      },
      {
        hiPath: this.getImagePath('whiteboard_artwork_15_hi'),
        loPath: this.getImagePath('whiteboard_artwork_15_lo'),
        thumbPath: this.getImagePath('whiteboard_artwork_15_thumb'),
        alt: 'More Spawn',
        text: 'More Spawn',
        description: `Another one with _Spawn_.  But this was totally imagined.  You can see from 
        the simple background that it was just so that I could fill up the board with something.  
        Later I regretted drawing the legs.  It would have been much cooler with just the cape 
        floating.`
      },
      {
        hiPath: this.getImagePath('whiteboard_artwork_12_hi'),
        loPath: this.getImagePath('whiteboard_artwork_12_lo'),
        thumbPath: this.getImagePath('whiteboard_artwork_12_thumb'),
        alt: 'The Joker',
        text: 'The Joker',
        description: `I read a graphic novel _Arkham Asylum_ sometime then.  There was a panel 
        where _Joker_ had a sinister laugh.  I wanted to see if I can create the same effect on 
        the board.  Again this was a disturbing image for my colleagues.`
      },
      {
        hiPath: this.getImagePath('whiteboard_artwork_ln_01_hi'),
        loPath: this.getImagePath('whiteboard_artwork_ln_01_lo'),
        thumbPath: this.getImagePath('whiteboard_artwork_ln_01_thumb'),
        alt: 'Still More Spawn',
        text: 'Still More Spawn',
        description: `Another _Spawn_ cover.  I know, I love their covers.  And my first witeboard 
        art in the US of A.`
      },
      {
        hiPath: this.getImagePath('whiteboard_artwork_ln_02_hi'),
        loPath: this.getImagePath('whiteboard_artwork_ln_02_lo'),
        thumbPath: this.getImagePath('whiteboard_artwork_ln_02_thumb'),
        alt: 'Bleach',
        text: 'Bleach',
        description: `_Ichigo Kurosaki_ from _Bleach_. This was my first attempt at manga art.  
        This was also the first time I collaborated with another artist.  Amol Jain, one of my 
        colleagues, also a fan of the anime, we teamed up and this is the outcome.  This was also 
        inspired by art found online.`
      },
      {
        hiPath: this.getImagePath('whiteboard_artwork_16_hi'),
        loPath: this.getImagePath('whiteboard_artwork_16_lo'),
        thumbPath: this.getImagePath('whiteboard_artwork_16_thumb'),
        alt: 'Tyrael from Diablo',
        text: 'Tyrael from Diablo',
        description: `Next was something from another of my favorite games, _Diablo_.  I started 
        playing _Diablo 2_ in college.  This is _Tyrael_ from _Diablo 3_.`
      },
      {
        hiPath: this.getImagePath('whiteboard_artwork_17_hi'),
        loPath: this.getImagePath('whiteboard_artwork_17_lo'),
        thumbPath: this.getImagePath('whiteboard_artwork_17_thumb'),
        alt: 'Joker Again',
        text: 'Joker Again',
        description: `Another _Joker_.  Christmas Special ...`
      },
      {
        hiPath: this.getImagePath('whiteboard_artwork_18_hi'),
        loPath: this.getImagePath('whiteboard_artwork_18_lo'),
        thumbPath: this.getImagePath('whiteboard_artwork_18_thumb'),
        alt: 'Batman v Superman',
        text: 'Batman v Superman',
        description: `Always been a big fan of the _Worlds Finest_.  This was when _Batman v 
        Superman_ hit the Big Screen.`
      },
      {
        hiPath: this.getImagePath('whiteboard_artwork_19_hi'),
        loPath: this.getImagePath('whiteboard_artwork_19_lo'),
        thumbPath: this.getImagePath('whiteboard_artwork_19_thumb'),
        alt: 'Ichigo Again',
        text: 'Ichigo Again',
        description: `Another _Ichigo_.  When will they finish the anime???`
      },
      {
        hiPath: this.getImagePath('whiteboard_artwork_c_01_hi'),
        loPath: this.getImagePath('whiteboard_artwork_c_01_lo'),
        thumbPath: this.getImagePath('whiteboard_artwork_c_01_thumb'),
        alt: 'Leap of Faith',
        text: 'Leap of Faith',
        description: `_Assassin's Creed_...  Never played the game, but loved the game videos.  I 
        was happy with the movie too...`
      },
    ];
  }
}
