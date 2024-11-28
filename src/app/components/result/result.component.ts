import { Component, Input } from '@angular/core';
// import { TagComponent } from '../tag/tag.component';
import { dashboardResult } from '../../_lib/types/dashboardResult';

@Component({
  selector: 'app-result',
  imports: [],
  templateUrl: './result.component.html',
  styleUrl: './result.component.scss',
  standalone: true,
})
export class ResultComponent {
  @Input() result!: dashboardResult;
}
