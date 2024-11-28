import { Injectable } from '@angular/core';
import { dashboardResult } from '../_lib/types/dashboardResult';
import { HttpClient } from '@angular/common/http';
import { BASE_URL } from './constants';
import { ITopicService } from './ItopicServiceInterface';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class TopicServiceService implements ITopicService {
  /**
   *
   */
  constructor(private _httpClient: HttpClient) {}

  search(text: string): Observable<dashboardResult[]> {
    return this._httpClient.get<dashboardResult[]>(
      `${BASE_URL}/search/${text}`
    );
  }
}
