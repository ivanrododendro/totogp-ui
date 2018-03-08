import { Observable } from 'rxjs';
import { UserSessionService } from './user-session.service';
import { UserSession } from './../model/user-session';
import { HttpHeaders } from '@angular/common/http';
import { TotogpHttpClient } from './../shared/totogp-http-client';
import { Injectable } from '@angular/core';

@Injectable()
export class LoginService {

  constructor(private httpClient: TotogpHttpClient, private userSessionService: UserSessionService) { }

  login(username: string, password: string) {
    this.httpClient.postForm('login', new Map([['username', username], ['password', password]])).subscribe(
      next => {/* TODO*/ }
    );

    const session: UserSession = new UserSession('Ivan', 'Rododendro', 1, '', 1, 'Qatar', 'TotoGP 2018');

    this.userSessionService.create(session);

    return Observable.of(true);
  }
}
