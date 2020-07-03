import { Component, OnInit } from '@angular/core';
import { IImage } from 'src/app/shared/domain/image';
import { MoodsService } from '../services/moods.service';

@Component({
  selector: 'app-moods',
  templateUrl: './moods.component.html',
  styleUrls: ['./moods.component.css']
})
export class MoodsComponent implements OnInit {

  public slideImages: IImage[];

  constructor(private _moodsService: MoodsService) { }

  ngOnInit(): void {
    this.slideImages = this._moodsService.getSlideImages();
  }

}
