import { Component, OnInit, Injectable } from '@angular/core';
import { PlayerService } from '../service/player-service';
import { Player } from '../model/player';
import { DataList } from 'primeng/datalist';
import { BetService } from '../service/bet-service';
import { BetDialogComponent } from './bet-dialog/bet-dialog.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  providers: [BetDialogComponent]
})
@Injectable()
export class HomeComponent implements OnInit {
  players: Player[];

  constructor(
    private playerService: PlayerService,
    private betService: BetService,
    private betDialog: BetDialogComponent
  ) {}

  ngOnInit() {
    this.players = this.playerService.players;
  }

  bet() {
    // this.betService.bet();
    this.betDialog.display();
  }
}
