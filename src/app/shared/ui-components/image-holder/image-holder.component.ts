import { Component, OnInit, Input } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { IImage } from '../../domain/image';

@Component({
  selector: 'app-image-holder',
  templateUrl: './image-holder.component.html',
  styleUrls: ['./image-holder.component.css']
})
export class ImageHolderComponent implements OnInit {

  @Input() public imageDetails: IImage;
  @Input() public showText: boolean = false;
  @Input() public showDescription: boolean = false;

  constructor( private sanitizer: DomSanitizer ) { }

  ngOnInit(): void {  }

  processMdText(description: string) {
    let converted: string = '';
    let bold: boolean = false;
    let boldStr: string = '';
    let italics: boolean = false;
    let italicsStr: string = '';
    let linkTxt: boolean = false;
    let linkTxtStr: string = '';
    let linkUrl: boolean = false;
    let linkUrlStr: string = '';
    let i = 0;
    for (; i < description.length; i++) {
      if (!bold && this.isBoldMarker(description, i)) {
        bold = true;
        i++;
        continue;
      } else if (bold && this.isBoldMarker(description, i)) {
        bold = false;
        converted += '<b>'+boldStr+'</b>';
        boldStr = '';
        i++;
        continue;
      } else if (!italics && this.isItalicsMarker(description, i)) {
        italics = true;
        continue;
      } else if (italics && this.isItalicsMarker(description, i)) {
        italics = false;
        converted += '<em>'+italicsStr+'</em>';
        italicsStr = '';
        continue;
      } else if (!linkTxt && this.isCurlyStartMarker(description, i)) {
        linkTxt = true;
        continue;
      } else if (linkTxt && this.isCurlyEndMarker(description, i)) {
        linkTxt = false;
        if (!linkUrl && this.isSquareStartMarker(description, i+1)) {
          linkUrl = true;
          i++;
          continue;
        } else {
          linkTxtStr = '';
          continue;
        }
      } else if (linkUrl && this.isSquareEndMarker(description, i)) {
        linkUrl = false;
        converted += '<a target="_blank" href=' + linkUrlStr + '>' + linkTxtStr + '</a>'
        linkTxtStr = '';
        linkUrlStr = '';
        continue;
      }
      let ch = description.charAt(i);
      if (bold) {
        boldStr += ch;
      } else if (italics) {
        italicsStr += ch;
      } else if (linkTxt) {
        linkTxtStr += ch;
      } else if (linkUrl) {
        linkUrlStr += ch;
      } else {
        converted += ch;
      }
    }
    return this.sanitizer.bypassSecurityTrustHtml(converted);
  }

  isBoldMarker(description: string, i: number) {
    return i < description.length-1 && description.charAt(i) == '_' && description.charAt(i+1) == '_';
  }

  isItalicsMarker(description: string, i: number) {
    return description.charAt(i) == '_';
  }

  isCurlyStartMarker(description: string, i: number) {
    return description.charAt(i) == '(';
  }

  isCurlyEndMarker(description: string, i: number) {
    return description.charAt(i) == ')';
  }

  isSquareStartMarker(description: string, i: number) {
    return description.charAt(i) == '[';
  }

  isSquareEndMarker(description: string, i: number) {
    return description.charAt(i) == ']';
  }

}
