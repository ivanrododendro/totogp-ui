import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-bet-dialog',
  templateUrl: './bet-dialog.component.html',
  styleUrls: ['./bet-dialog.component.css']
})
export class BetDialogComponent implements OnInit {
  displayed: boolean = false;

  constructor() {}

  ngOnInit() {}

  display() {
    this.displayed = true;
  }

  hide() {
    this.displayed = false;
  }
}
