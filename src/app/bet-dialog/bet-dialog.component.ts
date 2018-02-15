import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Rider } from '../model/rider';
import { RiderService } from '../service/rider-service';

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

  constructor(private riderService: RiderService,
    private router: Router) { }

  ngOnInit() {
    this.riders = this.riderService.getRiders();
  }
  placeBet() {
    this.router.navigate(['/home']);
  }
}
