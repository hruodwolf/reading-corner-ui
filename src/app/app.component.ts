import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Work, WorkService } from './services/work.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  works$: Observable<Work[]> | undefined;

  displayedColumns: string[] = ['name', 'creator', 'createdAt', 'type'];

  constructor(private readonly workService: WorkService) {}

  ngOnInit(): void {
    this.works$ = this.workService.getWorks();
  }
}
