import { Component, Injectable, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Message } from 'primeng/api';
import { MessageService } from 'primeng/components/common/messageservice';
import { DataList } from 'primeng/datalist';

import { Player } from '../model/player';
import { BetService } from '../service/bet-service';
import { PlayerService } from '../service/player-service';

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
    private playerService: PlayerService,
    private betService: BetService,
    private router: Router,
    private messageService: MessageService,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    this.players = this.playerService.getPlayerRanking();
    this.playerHasToBet = this.playerService.playerHasToBet();
  }

  bet() {
    this.router.navigate(['bet']);
  }
}
