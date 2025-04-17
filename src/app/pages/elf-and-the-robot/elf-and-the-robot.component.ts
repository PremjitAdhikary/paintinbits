import { Component, OnInit } from '@angular/core';
import { ElfAndTheRobotService } from '../services/elf-and-the-robot.service';
import { IImage } from 'src/app/shared/domain/image';

@Component({
  selector: 'app-elf-and-the-robot',
  templateUrl: './elf-and-the-robot.component.html',
  styleUrls: ['./elf-and-the-robot.component.css']
})
export class ElfAndTheRobotComponent implements OnInit {

  public comics: IImage[];
  public published: IImage;

  constructor(private _elfAndTheRobotService : ElfAndTheRobotService) { }

  ngOnInit(): void {
    this.comics = this._elfAndTheRobotService.getComic();
    this.published = this._elfAndTheRobotService.getPublished();
  }

}
