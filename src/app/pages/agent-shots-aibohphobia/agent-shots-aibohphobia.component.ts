import { Component, OnInit } from '@angular/core';
import { IImage } from 'src/app/shared/domain/image';
import { AgentShotsAibohphobiaServiceService } from '../services/agent-shots-aibohphobia-service.service';

@Component({
  selector: 'app-agent-shots-aibohphobia',
  templateUrl: './agent-shots-aibohphobia.component.html',
  styleUrls: ['./agent-shots-aibohphobia.component.css']
})
export class AgentShotsAibohphobiaComponent implements OnInit {
  
  public comics: IImage[];

  constructor(private _aibohphobiaService: AgentShotsAibohphobiaServiceService) { }

  ngOnInit(): void {
    this.comics = this._aibohphobiaService.getComic();
  }

}
