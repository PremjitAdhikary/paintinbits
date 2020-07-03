import { Component, OnInit } from '@angular/core';
import { IImage } from 'src/app/shared/domain/image';
import { WhiteboardService } from '../services/whiteboard.service';

@Component({
  selector: 'app-whiteboard',
  templateUrl: './whiteboard.component.html',
  styleUrls: ['./whiteboard.component.css']
})
export class WhiteboardComponent implements OnInit {

  public testShow = true;
  public fromMyComicImg: IImage;
  public slideImages: IImage[] = [];

  constructor(private _whiteboardService: WhiteboardService) { }

  ngOnInit(): void {
    this.fromMyComicImg = this._whiteboardService.getFromMyComicImage();
    this.slideImages = this._whiteboardService.getSlideImages();
  }

}
