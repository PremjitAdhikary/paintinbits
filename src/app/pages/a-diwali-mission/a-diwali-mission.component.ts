import { Component, OnInit } from '@angular/core';
import { ADiwaliMissionService } from '../services/a-diwali-mission.service';
import { IImage } from 'src/app/shared/domain/image';

@Component({
  selector: 'app-a-diwali-mission',
  templateUrl: './a-diwali-mission.component.html',
  styleUrls: ['./a-diwali-mission.component.css']
})
export class ADiwaliMissionComponent implements OnInit {
  
  public comics: IImage[];

  public making: IImage[];

  public mesmerize: IImage;

  public published: IImage[];

  constructor(private _aDiwaliMissionService: ADiwaliMissionService) { }

  ngOnInit(): void {
    this.comics = this._aDiwaliMissionService.getComic();
    this.making = this._aDiwaliMissionService.getMaking();
    this.mesmerize = this._aDiwaliMissionService.getMesmerize();
    this.published = this._aDiwaliMissionService.getPublished();
  }

}
