import { Component } from '@angular/core';
import { ResultComponent } from '../../components/result/result.component';
import { CommonModule } from '@angular/common';
import { TopicServiceService } from '../../services/topic-service.service';
import { dashboardResult } from '../../_lib/types/dashboardResult';

@Component({
  selector: 'app-dashboard',
  imports: [ResultComponent, CommonModule],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss',
})
export class DashboardComponent {
  /**
   *
   */
  constructor(private topicsService: TopicServiceService) {}

  _results: dashboardResult[] = [];

  ngOnInit() {
    this.topicsService
      .getResults()
      .subscribe((results) => (this._results = results));
  }
}
