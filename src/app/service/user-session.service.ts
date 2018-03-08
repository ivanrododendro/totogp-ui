import { UserSession } from './../model/user-session';
import { Injectable } from '@angular/core';

@Injectable()
export class UserSessionService {

  constructor() { }

  create(session: UserSession) {
    sessionStorage.setItem('userSession', JSON.stringify(session));
  }

  getFirstname() {
    const session: UserSession = JSON.parse(sessionStorage.getItem('userSession'));

    if (session == null) {
      return null;
    }

    return session.firstName;
  }

  isLoggedIn() {
    const session: UserSession = JSON.parse(sessionStorage.getItem('userSession'));

    return session != null;
  }
}
