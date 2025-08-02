import { Component, OnInit } from '@angular/core';
import { IImage } from 'src/app/shared/domain/image';
import { ProjectPanelPrintService } from '../services/project-panel-print.service';

@Component({
  selector: 'app-project-panel-print',
  templateUrl: './project-panel-print.component.html',
  styleUrls: ['./project-panel-print.component.css']
})
export class ProjectPanelPrintComponent implements OnInit {

  public customArtImages: IImage[];
  public makingOfBOB: IImage[];

  constructor(private _projectPanelPrintService:ProjectPanelPrintService ) {
    this.customArtImages = this._projectPanelPrintService.getCustomArtImages();
    this.makingOfBOB = this._projectPanelPrintService.getMakingOfBOB();
  }

  ngOnInit(): void {
  }

}
