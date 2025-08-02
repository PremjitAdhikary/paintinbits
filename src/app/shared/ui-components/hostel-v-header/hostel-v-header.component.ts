import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-hostel-v-header',
  templateUrl: './hostel-v-header.component.html',
  styleUrls: ['./hostel-v-header.component.css']
})
export class HostelVHeaderComponent implements OnInit {

  @Input() public id = 0;
  @Input() public title = "Story Title";
  public articleId: number;
  public articleTitle: string;

  constructor() { }

  ngOnInit(): void {
    this.articleId = this.id;
    this.articleTitle = this.title;
  }

}
