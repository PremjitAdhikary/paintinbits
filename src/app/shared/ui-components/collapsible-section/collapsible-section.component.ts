import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-collapsible-section',
  templateUrl: './collapsible-section.component.html',
  styleUrls: ['./collapsible-section.component.css']
})
export class CollapsibleSectionComponent implements OnInit {

  @Input() public heading = "Section Heading";
  @Input() public show = false;

  constructor() { }

  ngOnInit(): void {
  }

}
