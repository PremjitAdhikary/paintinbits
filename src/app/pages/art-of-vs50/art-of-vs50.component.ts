import { Component, OnInit } from '@angular/core';
import { ArtOfVs50Service } from '../services/art-of-vs50.service';
import { IImage } from 'src/app/shared/domain/image';

@Component({
  selector: 'app-art-of-vs50',
  templateUrl: './art-of-vs50.component.html',
  styleUrls: ['./art-of-vs50.component.css']
})
export class ArtOfVs50Component implements OnInit {

  public mesmerizeVs50Preview: IImage;
  public mesmerizeVs50Ram: IImage;
  public mesmerizeVsSimCombatPreview: IImage;
  public characterStudy: IImage[];
  public ramRun: IImage;
  public gameArt: IImage[];

  constructor(private _artForVS50Service: ArtOfVs50Service) { }

  ngOnInit(): void {
    this.mesmerizeVs50Preview = this._artForVS50Service.getMesmerizeVs50Preview();
    this.mesmerizeVs50Ram = this._artForVS50Service.getMesmerizeVs50Ram();
    this.mesmerizeVsSimCombatPreview = this._artForVS50Service.getMesmerizeVsSimCombatPreview();
    this.characterStudy = this._artForVS50Service.getCharacterStudy();
    this.ramRun = this._artForVS50Service.getRamRunPreview();
    this.gameArt = this._artForVS50Service.getGameArt();
  }

}
