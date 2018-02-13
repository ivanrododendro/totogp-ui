import { Component, OnInit } from '@angular/core';
import { Rider } from '../../model/rider';
import { RiderService } from '../../service/rider-service';

@Component({
  selector: 'app-driver-selector',
  templateUrl: './driver-selector.component.html',
  styleUrls: ['./driver-selector.component.css']
})
export class DriverSelectorComponent implements OnInit {
  selectedDriver: Rider;

  riders: Rider[];

  constructor(private riderService: RiderService) {}

  ngOnInit() {
    this.riders = this.riderService.riders;
  }

  showSelected() {
    console.log(this.selectedDriver.name);
  }
}
