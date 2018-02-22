import { RiderService } from './../../service/rider-service';
import { Rider } from './../../model/rider';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SelectItem } from 'primeng/api';
import { MessageService } from 'primeng/components/common/messageservice';

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

  riderSelect: SelectItem[] = [];

  constructor(private riderService: RiderService,
    private router: Router, private messageService: MessageService) { }

  ngOnInit() {
    const riders = this.riderService.getRiders();

    for (let index = 0; index < riders.length; index++) {
      const rider = riders[index];

      this.riderSelect.push({ label: rider.name, value: rider.id });
    }
  }
  placeBet() {
    this.messageService.add({ severity: 'success', summary: 'Your bet has been placed!' + ' ', detail: '' });

    this.router.navigate(['/home']);
  }
}