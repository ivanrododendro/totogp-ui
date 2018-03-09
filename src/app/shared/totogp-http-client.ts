import { Observable } from 'rxjs';
import { Injectable, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from '../../environments/environment';

@Injectable()
export class TotogpHttpClient {

  private SERVER_URL: string = environment.serverUrl;

  constructor(private httpClient: HttpClient) {
    if (this.SERVER_URL.endsWith('/')) {
      this.SERVER_URL = this.SERVER_URL.substring(0, this.SERVER_URL.length - 1);
    }
  }

  postForm(urlFragment: string, params: Map<string, string>): Observable<any> {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/x-www-form-urlencoded'
      })
    };

    let paramString = '';
    params.forEach((value: string, key: string) => {
      paramString += (key + '=' + value + '&');
    });

    const url = this.SERVER_URL + '/' + urlFragment;

    return this.httpClient.post(url, paramString, httpOptions);
  }
}
