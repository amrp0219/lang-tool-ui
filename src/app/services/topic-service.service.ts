import { Injectable } from '@angular/core';
import { dashboardResult } from '../_lib/types/dashboardResult';
import { HttpClient } from '@angular/common/http';
import { BASE_URL } from './constants';
import { ITopicService } from './ItopicServiceInterface';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class TopicServiceService implements ITopicService {
  public _searchResults: Subject<dashboardResult[]> = new Subject<
    dashboardResult[]
  >();

  constructor(private _httpClient: HttpClient) {}

  public search(text: string): void {
    this._httpClient
      .get<dashboardResult[]>(`${BASE_URL}/search/${text}`)
      .subscribe((_response) => this._searchResults.next(_response));
  }

  getResults(): Observable<dashboardResult[]> {
    return this._searchResults;
  }
}
