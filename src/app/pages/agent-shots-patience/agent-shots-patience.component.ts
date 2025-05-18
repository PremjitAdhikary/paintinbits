import { Component, OnInit } from '@angular/core';
import { IImage } from 'src/app/shared/domain/image';
import { AgentShotsPatienceService } from '../services/agent-shots-patience.service';

@Component({
  selector: 'app-agent-shots-patience',
  templateUrl: './agent-shots-patience.component.html',
  styleUrls: ['./agent-shots-patience.component.css']
})
export class AgentShotsPatienceComponent implements OnInit{

  public comicsSingle: IImage[];
  public comicsDouble: IImage[];
  public pageMap: number[];
  public making: IImage[];

  constructor(private _aibohphobiaService: AgentShotsPatienceService) { }

  ngOnInit(): void {
    this.comicsDouble = this._aibohphobiaService.getComicDouble();
    this.comicsSingle = this._aibohphobiaService.getComicSingle();
    this.pageMap = [];
    this.pageMap[4] = 0;
    this.pageMap[5] = 0;
    this.making = this._aibohphobiaService.getMaking();
  }

}
