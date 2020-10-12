import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { accessKey, baseUrl, kidsChannelId } from './api';

@Injectable({
  providedIn: 'root'
})
export class KidsService {

  constructor(private httpClient: HttpClient) { }

  loadPlaylists() {
    return this.httpClient.get(`${baseUrl}/playlists/?part=snippet&channelId=${kidsChannelId}&key=`
                              + `${accessKey}&order=title&maxResults=50`);
  }

  loadVideos(playlistId) {
    return this.httpClient.get(`${baseUrl}/playlistItems/?part=snippet&channelId=`
                              + `${kidsChannelId}&key=${accessKey}&playlistId=${playlistId}&maxResults=50`);
  }

  loadNextPageVideos(playlistId, nextPageToken) {
    return this.httpClient.get(`${baseUrl}/playlistItems/?part=snippet&channelId=`
                              + `${kidsChannelId}&key=${accessKey}&playlistId=${playlistId}&maxResults=50`
                              + `&pageToken=${nextPageToken}`);
  }

}
