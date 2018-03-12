import { UserSession } from './../model/user-session';
import { Injectable } from '@angular/core';

@Injectable()
export class UserSessionService {
  constructor() {}

  create(session: UserSession) {
    sessionStorage.setItem('userSession', JSON.stringify(session));
  }

  getEnrollmentId() {
    const session: UserSession = JSON.parse(
      sessionStorage.getItem('userSession')
    );

    if (session == null) {
      return null;
    }

    return session.enrollmentId;
  }

  getRaceLabel() {
    const session: UserSession = JSON.parse(
      sessionStorage.getItem('userSession')
    );

    if (session == null) {
      return null;
    }

    return session.raceLabel;
  }

  getFirstname() {
    const session: UserSession = JSON.parse(
      sessionStorage.getItem('userSession')
    );

    if (session == null) {
      return null;
    }

    return session.firstname;
  }

  getRanking() {
    const session: UserSession = JSON.parse(
      sessionStorage.getItem('userSession')
    );

    if (session == null) {
      return null;
    }

    return session.ranking;
  }

  getContestLabel() {
    const session: UserSession = JSON.parse(
      sessionStorage.getItem('userSession')
    );

    if (session == null) {
      return null;
    }

    return session.contestLabel;
  }

  isLoggedIn() {
    const session: UserSession = JSON.parse(
      sessionStorage.getItem('userSession')
    );

    return session != null;
  }
}
