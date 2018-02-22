import { Component, OnInit, Injectable } from '@angular/core';
import { PlayerService } from '../service/player-service';
import { Player } from '../model/player';
import { DataList } from 'primeng/datalist';
import { BetService } from '../service/bet-service';
import { Route } from '@angular/compiler/src/core';
import { Router } from '@angular/router';
import { Message } from 'primeng/api';
import { MessageService } from 'primeng/components/common/messageservice';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
@Injectable()
export class HomeComponent implements OnInit {
  players: Player[];
  playerHasToBet: boolean;
  msgs: Message[] = [];

  constructor(
    private playerService: PlayerService,
    private betService: BetService,
    private router: Router,
    private messageService: MessageService
  ) { }

  ngOnInit() {
    this.players = this.playerService.getPlayerRanking();
    this.playerHasToBet = this.playerService.playerHasToBet();

    this.messageService.messageObserver.subscribe((messages: Message) => {
      console.log(messages);
      this.msgs.push(messages);
    });
  }

  bet() {
    this.router.navigate(['/bet']);
  }

  message() {
    this.messageService.add({ severity: 'success', summary: 'Welcome' + ' ', detail: '' });
  }
}
