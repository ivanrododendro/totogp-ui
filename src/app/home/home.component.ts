import { Component, Injectable, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Message } from 'primeng/api';
import { MessageService } from 'primeng/components/common/messageservice';
import { DataList } from 'primeng/datalist';

import { Player } from '../model/player';
import { BetService } from '../service/bet-service.service';
import { HomeService } from '../service/home-service.service';

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
  ) { }

  ngOnInit() {
    this.players = this.playerService.getPlayerRanking();
    this.playerService.playerHasToBet().subscribe(data => {
      this.playerHasToBet = data['userCanBet'];
      console.log(data);
    });
  }

  bet() {
    this.router.navigate(['bet']);
  }
}
