import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from '../../environments/environment';

@Injectable()
export class TotogpHttpClient {

  private SERVER_URL: string = environment.serverUrl;

  constructor(private httpClient: HttpClient) { }

  postForm(urlFragment: string, params: Map<string, string>) {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/x-www-form-urlencoded'
      })
    };

    let paramString;

    params.forEach((value: string, key: string) => {
      paramString += (key + '=' + value + '&');
    });

    console.log('params : ' + paramString);

    return this.httpClient.post(this.SERVER_URL + '/' + urlFragment, paramString, httpOptions);
  }
}
