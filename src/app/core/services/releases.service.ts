import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { accessKey, baseUrl, channelId } from './api';

@Injectable({
  providedIn: 'root'
})
export class ReleasesService {

  constructor(private httpClient: HttpClient) { }

  loadReleases() {
    return this.httpClient.get(`${baseUrl}/search?part=snippet&channelId=`
                              + `${channelId}&key=${accessKey}&order=date&type=video&maxResults=15`);
  }
}
