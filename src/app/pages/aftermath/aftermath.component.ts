import { Component, OnInit } from '@angular/core';
import { AftermathService } from '../services/aftermath.service';
import { IImage } from 'src/app/shared/domain/image';

@Component({
  selector: 'app-aftermath',
  templateUrl: './aftermath.component.html',
  styleUrls: ['./aftermath.component.css']
})
export class AftermathComponent implements OnInit {

  public comics: IImage[];
  public published: IImage;

  constructor(private _aftermathService: AftermathService) { }

  ngOnInit(): void {
    this.comics = this._aftermathService.getComic();
  }

}
