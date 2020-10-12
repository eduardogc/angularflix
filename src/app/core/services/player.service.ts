import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { accessKey, baseUrl, channelId, serviceUrl } from './api';

@Injectable({
  providedIn: 'root'
})
export class PlayerService {

  constructor(private httpClient: HttpClient) { }

  loadVideoInfo(videoId) {
    return this.httpClient.get(`${serviceUrl}/video`);
  }

  getPlaylistName(playlistId) {
    return this.httpClient.get(`${baseUrl}/playlists?part=snippet&key=${accessKey}&id=${playlistId}`);
  }

  getRelatedVideos(videoId) {
    return this.httpClient.get(`${baseUrl}/search/?part=snippet&channelId=`
                              + `${channelId}&key=${accessKey}&order=date&maxResults=5&type=video&relatedToVideoId=${videoId}`);
  }

  nextPageRelatedVideos(nextPageToken, videoId) {
    return this.httpClient.get(`${baseUrl}/search/?part=snippet&channelId=`
                              + `${channelId}&key=${accessKey}&order=date&maxResults=5&type=video&relatedToVideoId=${videoId}`
                              + `&pageToken=${nextPageToken}`);
  }
}
