import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-bet-dialog',
  templateUrl: './bet-dialog.component.html',
  styleUrls: ['./bet-dialog.component.css']
})
export class BetDialogComponent implements OnInit {
  displayed = true;

  constructor() {}

  ngOnInit() {}

  display() {
    this.displayed = true;

    console.log('displayed : ' + this.displayed);
  }

  hide() {
    this.displayed = false;
  }
}
