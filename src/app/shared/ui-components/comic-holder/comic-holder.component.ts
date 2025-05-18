import { Component, OnInit, Input } from '@angular/core';
import { IImage } from '../../domain/image';

@Component({
  selector: 'app-comic-holder',
  templateUrl: './comic-holder.component.html',
  styleUrls: ['./comic-holder.component.css']
})
export class ComicHolderComponent implements OnInit {
  @Input() public comics: IImage[] = [];

  constructor() { }

  ngOnInit(): void {
  }

}
