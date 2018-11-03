import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-bartender-card',
  templateUrl: './bartender-card.component.html',
  styleUrls: ['./bartender-card.component.less'],
})
export class BartenderCardComponent implements OnInit {
  @Input()
  bartender: any;
  comment: string;

  constructor() {}

  ngOnInit() {}
  ratingComponentClick(clickObj: any): void {
    console.log(clickObj);
  }
}
