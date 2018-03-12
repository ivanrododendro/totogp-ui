import { Component, Injectable, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Message } from 'primeng/api';
import { MessageService } from 'primeng/components/common/messageservice';
import { DataList } from 'primeng/datalist';

import { Player } from '../model/player';
import { BetService } from '../service/bet.service';
import { HomeService } from '../service/home.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
@Injectable()
export class HomeComponent implements OnInit {
  players: Player[];
  playerHasToBet: boolean;

  constructor(
    private playerService: HomeService,
    private betService: BetService,
    private router: Router,
    private messageService: MessageService,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    this.playerService.getPlayerRanking().subscribe(next => {
      this.players = next;
    });

    this.playerService.playerHasToBet().subscribe(data => {
      this.playerHasToBet = data['userCanBet'];
    });
  }

  bet() {
    this.router.navigate(['bet']);
  }
}
