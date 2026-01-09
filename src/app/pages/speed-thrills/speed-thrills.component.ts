import { Component, OnInit } from '@angular/core';
import { IImage } from 'src/app/shared/domain/image';
import { SpeedThrillsService } from '../services/speed-thrills.service';

@Component({
  selector: 'app-speed-thrills',
  templateUrl: './speed-thrills.component.html',
  styleUrls: ['./speed-thrills.component.css']
})
export class SpeedThrillsComponent implements OnInit {
  public comicsSingle: IImage[];
  public comicsDouble: IImage[];
  public pageMap: number[];
  public making: IImage[];

  constructor(private _speedThrillService: SpeedThrillsService) { }

  ngOnInit(): void {
    this.comicsDouble = this._speedThrillService.getComicDouble();
    this.comicsSingle = this._speedThrillService.getComicSingle();
    this.pageMap = [];
    this.pageMap[13] = 0;
    this.pageMap[14] = 0;
    this.making = this._speedThrillService.getMaking();
  }

}
