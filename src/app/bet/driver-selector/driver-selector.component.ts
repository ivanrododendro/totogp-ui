import { Component, OnInit } from '@angular/core';
import { Rider } from '../../model/rider';

@Component({
  selector: 'app-driver-selector',
  templateUrl: './driver-selector.component.html',
  styleUrls: ['./driver-selector.component.css']
})
export class DriverSelectorComponent implements OnInit {
  selectedDriver: Rider;

  constructor() {}

  ngOnInit() {}
}
