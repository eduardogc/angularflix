import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { accessKey, baseUrl, channelId } from './api';

@Injectable({
  providedIn: 'root'
})
export class HeaderService {

  constructor(private httpClient: HttpClient) { }

  search(term) {
    return this.httpClient.get(`${baseUrl}/search/?part=snippet&channelId=`
                            +  `${channelId}&key=${accessKey}&order=title&maxResults=5&type=video&q=${term}`);
  }
}
