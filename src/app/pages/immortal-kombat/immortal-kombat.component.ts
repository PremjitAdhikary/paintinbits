import { Component, OnInit } from '@angular/core';
import { ImmortalKombatService } from '../services/immortal-kombat.service';
import { IImage } from 'src/app/shared/domain/image';

@Component({
  selector: 'app-immortal-kombat',
  templateUrl: './immortal-kombat.component.html',
  styleUrls: ['./immortal-kombat.component.css']
})
export class ImmortalKombatComponent implements OnInit {

  public comics: IImage[];
  public process: IImage;
  public perspective: IImage;

  constructor(private _immortalKombatService: ImmortalKombatService) { }

  ngOnInit(): void {
    this.comics = this._immortalKombatService.getComic();
    this.process = this._immortalKombatService.getProcess();
    this.perspective = this._immortalKombatService.getPerspective();
  }

}
