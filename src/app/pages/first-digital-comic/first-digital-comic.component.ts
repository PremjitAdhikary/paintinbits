import { Component, OnInit } from '@angular/core';
import { FirstDigitalComicService } from '../services/first-digital-comic.service';
import { IImage } from 'src/app/shared/domain/image';

@Component({
  selector: 'app-first-digital-comic',
  templateUrl: './first-digital-comic.component.html',
  styleUrls: ['./first-digital-comic.component.css']
})
export class FirstDigitalComicComponent implements OnInit {

  public comics: IImage[];

  constructor(private _firstComicService: FirstDigitalComicService) { }

  ngOnInit(): void {
    this.comics = this._firstComicService.getComic();
  }

}
