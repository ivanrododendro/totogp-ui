import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SelectItem } from 'primeng/api';
import { MessageService } from 'primeng/components/common/messageservice';

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

  riderSelect: SelectItem[];

  constructor(private riderService: RiderService,
    private router: Router, private messageService: MessageService) { }

  ngOnInit() {
    const riders = this.riderService.getRiders();

    for (let index = 0; index < riders.length; index++) {
      const element = array[index];

    }
  }
  placeBet() {
    this.messageService.add({ severity: 'success', summary: 'Your bet has been placed!' + ' ', detail: '' });

    this.router.navigate(['/home']);
  }
}
