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
  username: string;

  ngOnInit(): void {
    this.username = localStorage.getItem('username');
  }
}
