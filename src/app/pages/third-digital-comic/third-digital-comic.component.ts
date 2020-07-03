import { Component, OnInit } from '@angular/core';
import { ThirdDigitalComicService } from '../services/third-digital-comic.service';
import { IImage } from 'src/app/shared/domain/image';

@Component({
  selector: 'app-third-digital-comic',
  templateUrl: './third-digital-comic.component.html',
  styleUrls: ['./third-digital-comic.component.css']
})
export class ThirdDigitalComicComponent implements OnInit {

  public comics: IImage[];
  public strip1Inspiration: IImage;
  public strip1Slide: IImage[];
  public strangeSlide: IImage[];
  public strip3Inspiration: IImage;
  public strip4Blacks: IImage;

  constructor(private _thirdService: ThirdDigitalComicService) { }

  ngOnInit(): void {
    this.comics = this._thirdService.getComic();
    this.strip1Inspiration = this._thirdService.getStrip1Inspiration();
    this.strip1Slide = this._thirdService.getStrip1Slide();
    this.strangeSlide = this._thirdService.getStrangeSlide();
    this.strip3Inspiration = this._thirdService.getStrip3Inspiration();
    this.strip4Blacks = this._thirdService.getStrip4Blacks()
  }

}
