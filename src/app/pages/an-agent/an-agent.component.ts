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

  constructor(private _anAgentSercie: AnAgentService) { }

  ngOnInit(): void {
    this.comics = this._anAgentSercie.getComic();
  }

}
