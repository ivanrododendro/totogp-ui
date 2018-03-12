import { Observable } from 'rxjs';
import { UserSessionService } from './user-session.service';
import { UserSession } from './../model/user-session';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { TotogpHttpClient } from './../shared/totogp-http-client';
import { Injectable } from '@angular/core';

@Injectable()
export class LoginService {
  constructor(
    private httpClient: TotogpHttpClient,
    private userSessionService: UserSessionService
  ) {}

  login<UserSession>(
    username: string,
    password: string
  ): Observable<UserSession> {
    return this.httpClient.postForm(
      'user/login',
      new Map([['username', username], ['password', password]])
    );
  }
}
