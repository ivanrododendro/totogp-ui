export class UserSession {
  firstname: string;
  lastname: string;
  ranking: number;
  image: any;
  enrollmentId: number;
  raceLabel: string;
  contestLabel: string;
  contestId: number;

  constructor(firstname: string,
    lastname: string,
    ranking: number,
    image: any,
    enrollmentId: number,
    raceLabel: string,
    contestLabel: string,
    contestId: number) {
    this.firstname = firstname;
    this.ranking = ranking;
    this.image = image;
    this.enrollmentId = enrollmentId;
    this.raceLabel = raceLabel;
    this.contestLabel = contestLabel;
    this.contestId = contestId;
    this.lastname = lastname;
  }
}
