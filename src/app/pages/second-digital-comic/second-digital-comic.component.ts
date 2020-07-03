import { Component, OnInit } from '@angular/core';
import { SecondDigitalComicService } from '../services/second-digital-comic.service';
import { IImage } from 'src/app/shared/domain/image';

@Component({
  selector: 'app-second-digital-comic',
  templateUrl: './second-digital-comic.component.html',
  styleUrls: ['./second-digital-comic.component.css']
})
export class SecondDigitalComicComponent implements OnInit {

  public comics: IImage[];

  constructor(private _secondService: SecondDigitalComicService) { }

  ngOnInit(): void {
    this.comics = this._secondService.getComic();
  }

}
