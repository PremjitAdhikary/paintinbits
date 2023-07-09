import { Component, OnInit } from '@angular/core';
import { AnAgentService } from '../services/an-agent.service';
import { IImage } from 'src/app/shared/domain/image';

@Component({
  selector: 'app-an-agent',
  templateUrl: './an-agent.component.html',
  styleUrls: ['./an-agent.component.css']
})
export class AnAgentComponent implements OnInit {

  public comics: IImage[];
  public xtras: IImage[];
  public markedPage12: IImage;
  public oldPage17: IImage;

  constructor(private _anAgentService: AnAgentService) { }

  ngOnInit(): void {
    this.comics = this._anAgentService.getComic();
    this.xtras = this._anAgentService.getXtra();
    this.markedPage12 = this._anAgentService.getMarkedPage12();
    this.oldPage17 = this._anAgentService.getOldPage17();
  }

}
