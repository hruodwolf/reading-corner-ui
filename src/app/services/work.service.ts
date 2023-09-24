import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Observable } from 'rxjs/internal/Observable';

enum WorkType {
  ROMAN = 'Roman',
  FILM = 'Film',
  SCULPTURE = 'Sculpture',
}

export interface Work {
  name: string;
  createdAt: Date;
  creator: string;
  type: WorkType;
}

@Injectable({
  providedIn: 'root',
})
export class WorkService {
  works: Work[] = [
    {
      name: 'Der große Gatsby',
      createdAt: new Date(1925, 1, 1),
      creator: ' F. Scott Fitzgerald',
      type: WorkType.ROMAN,
    },
    {
      name: 'Silbermond und Kupfermünze',
      createdAt: new Date(1927, 1, 1),
      creator: 'W. Somerset Maugham',
      type: WorkType.ROMAN,
    },
    {
      name: 'Fiesta',
      createdAt: new Date(1926, 1, 1),
      creator: 'Ernest Hemingway',
      type: WorkType.ROMAN,
    },
    {
      name: 'Forrest Gump',
      createdAt: new Date(1994, 1, 1),
      creator: 'Robert Zemeckis',
      type: WorkType.FILM,
    },
    {
      name: 'Der Denker',
      createdAt: new Date(1880, 1, 1),
      creator: 'Auguste Rodin',
      type: WorkType.SCULPTURE,
    },
  ];

  workSubject: BehaviorSubject<Work[]> = new BehaviorSubject<Work[]>(
    this.works
  );

  public getWorks(): Observable<Work[]> {
    return this.workSubject.asObservable();
  }
}
