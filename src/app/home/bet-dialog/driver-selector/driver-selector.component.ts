import { RiderService } from './../../../service/rider-service';
import { Rider } from './../../../model/rider';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-driver-selector',
  templateUrl: './driver-selector.component.html',
  styleUrls: ['./driver-selector.component.css']
})
export class DriverSelectorComponent implements OnInit {
  selectedRider: Rider;

  riders: Rider[];

  constructor(private riderService: RiderService) { }

  ngOnInit() {
    this.riders = this.riderService.getRiders();
  }

  showSelected() {
    console.log(this.selectedRider.name);
  }
}
