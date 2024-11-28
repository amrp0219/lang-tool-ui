import { Observable } from 'rxjs';
import { dashboardResult } from '../_lib/types/dashboardResult';

export interface ITopicService {
  search(text: string): Observable<dashboardResult[]>;
}
