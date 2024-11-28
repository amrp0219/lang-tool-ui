import { Component } from '@angular/core';
import { TopicServiceService } from '../../services/topic-service.service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-search-bar',
  imports: [FormsModule],
  templateUrl: './search-bar.component.html',
  styleUrl: './search-bar.component.scss',
})
export class SearchBarComponent {
  searchValue: string = '';

  constructor(private topicsService: TopicServiceService) {}

  search = () => {
    this.topicsService.search(this.searchValue);
  };
}
