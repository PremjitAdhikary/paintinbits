import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-agent-header',
  templateUrl: './agent-header.component.html',
  styleUrls: ['./agent-header.component.css']
})
export class AgentHeaderComponent implements OnInit {

  @Input() public id = 0;
  @Input() public series = "main";
  @Input() public title = "Story Title";
  public articleId: number;
  public seriesTitle: string;
  public articleTitle: string;

  constructor() { }

  ngOnInit(): void {
    this.articleId = this.id;
    this.articleTitle = this.title;
    if (this.series === "shots") {
      this.seriesTitle = "AGENT Shots:";
    } else {
      this.seriesTitle = "An AGENT:";
    }
  }

}
