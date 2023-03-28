import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import data from './mock-data/data';

@Injectable({
  providedIn: 'root',
})
export class MockDataService {
  getTarrifs(): Observable<any[]> {
    return of(data);
  }
}
