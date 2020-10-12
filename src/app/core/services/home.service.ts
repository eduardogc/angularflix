import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { accessKey, baseUrl, serviceUrl, channelId } from './api';

@Injectable({
  providedIn: 'root'
})
export class HomeService {

  constructor(private httpClient: HttpClient) { }

  loadVideosNew() {
    return this.httpClient.get(`${serviceUrl}/home-list`);
  }
}
