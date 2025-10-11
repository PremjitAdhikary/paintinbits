import { Component, OnInit } from '@angular/core';
import { AwesomeAssamConventionService } from '../services/awesome-assam-convention.service';
import { IImage } from 'src/app/shared/domain/image';

@Component({
  selector: 'app-awesome-assam-convention',
  templateUrl: './awesome-assam-convention.component.html',
  styleUrls: ['./awesome-assam-convention.component.css']
})
export class AwesomeAssamConventionComponent implements OnInit {

  public comics: IImage[];
  public published: IImage;

  constructor(private _awesomeAssamConventionService : AwesomeAssamConventionService) { }

  ngOnInit(): void {
    this.comics = this._awesomeAssamConventionService.getComic();
  }

}
