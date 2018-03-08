import { Rider } from './../../model/rider';
import { Component, OnInit, Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { SelectItem } from 'primeng/api';
import { MessageService } from 'primeng/components/common/messageservice';
import { BetService } from '../../service/bet-service.service';

@Component({
  selector: 'app-bet-dialog',
  templateUrl: './bet-dialog.component.html',
  styleUrls: ['./bet-dialog.component.css']
})
@Injectable()
export class BetDialogComponent implements OnInit {
  winnerRider: Rider;
  poleRider: Rider;
  firstRider: Rider;
  secondRider: Rider;
  thirdRider: Rider;

  // riderSelect: SelectItem[] = [];
  riders: Rider[];

  currentBetType: string;

  constructor(
    private router: Router,
    private messageService: MessageService,
    private betService: BetService
  ) { }

  ngOnInit() {
    this.riders = this.betService.getRiders();

    /*     for (let index = 0; index < this.riders.length; index++) {
          const rider = this.riders[index];

          this.riderSelect.push({ label: rider.name, value: rider.id });
        } */

    this.betService.getCurrentBetType().subscribe(data => {
      this.currentBetType = data['currentBetType'];
      /* console.log('current bet : ' + this.currentBetType); */
    });
  }

  placeBet() {
    this.betService.placeWinnerBet(this.winnerRider.id);

    this.messageService.add({
      severity: 'success',
      summary: 'Your bet has been placed!' + ' ',
      detail: ''
    });

    this.router.navigate(['/home']);
  }
}
