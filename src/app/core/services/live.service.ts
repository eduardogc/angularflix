import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { accessKey, baseUrl, liveChannelId } from './api';

@Injectable({
  providedIn: 'root'
})
export class LiveService {

  constructor(private httpClient: HttpClient) { }

  loadVideos() {
    return this.httpClient.get(`${baseUrl}/playlistItems/?part=snippet&channelId=`
                              + `${liveChannelId}&key=${accessKey}&playlistId=PLHvLxHvtgDGaknHO6bv0aV4rkcjuoKZM6&maxResults=50&order=date`);
  }

  loadNextPageVideos(nextPageToken) {
    return this.httpClient.get(`${baseUrl}/playlistItems/?part=snippet&channelId=`
                              + `${liveChannelId}&key=${accessKey}&playlistId=PLHvLxHvtgDGaknHO6bv0aV4rkcjuoKZM6&maxResults=50&order=date`
                              + `&pageToken=${nextPageToken}`);
  }

}
