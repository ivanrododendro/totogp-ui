import { Component, OnInit } from '@angular/core';
import {MenuModule} from 'primeng/menu';
import {MenuItem} from 'primeng/api';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  items: MenuItem[];

  ngOnInit() {
    this.items = [
      {
        label: 'File',
        items: [
          { label: 'New', icon: 'fa-plus' },
          { label: 'Open', icon: 'fa-download' }
        ]
      },
      {
        label: 'Edit',
        items: [
          { label: 'Undo', icon: 'fa-refresh' },
          { label: 'Redo', icon: 'fa-repeat' }
        ]
      }
    ];
  }
  constructor() {}
}
