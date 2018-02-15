import { Component, OnInit } from '@angular/core';
import { RiderService } from '../../service/rider-service';
import { Rider } from '../../model/rider';

@Component({
  selector: 'app-bet-dialog',
  templateUrl: './bet-dialog.component.html',
  styleUrls: ['./bet-dialog.component.css']
})
export class BetDialogComponent implements OnInit {
  winnerRider: Rider;
  poleRider: Rider;
  firstRider: Rider;
  secondRider: Rider;
  thirdRider: Rider;

  riders: Rider[];

  constructor(private riderService: RiderService) {}

  ngOnInit() {
    this.riders = this.riderService.getRiders();
  }
}
