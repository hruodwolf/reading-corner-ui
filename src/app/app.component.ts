import { Component } from '@angular/core';
import { WorkService } from './services/work.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  displayedColumns: string[] = ['name', 'creator', 'createdAt', 'type'];
  dataSource = this.workService.getWorks();
  constructor(private readonly workService: WorkService) {}
}
