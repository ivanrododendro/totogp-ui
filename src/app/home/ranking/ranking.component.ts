import { BetService } from './../../service/bet-service';
import { PlayerService } from './../../service/player-service';
import { Player } from './../../model/player';
import { Component, Injectable, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Message } from 'primeng/api';
import { MessageService } from 'primeng/components/common/messageservice';
import { DataList } from 'primeng/datalist';

@Component({
  selector: 'app-ranking',
  templateUrl: './ranking.component.html',
  styleUrls: ['./ranking.component.css']
})
@Injectable()
export class RankingComponent implements OnInit {
  players: Player[];
  playerHasToBet: boolean;

  constructor(
    private playerService: PlayerService,
    private betService: BetService,
    private router: Router,
    private messageService: MessageService,
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    this.players = this.playerService.getPlayerRanking();
    this.playerHasToBet = this.playerService.playerHasToBet();
  }

  bet() {
    this.router.navigate(['bet'], { relativeTo: this.route });
  }
}
