import { Component, OnInit } from '@angular/core';
import data from './mock-data/data';
import { Observable, of } from 'rxjs';
import { MockDataService } from './mock-data.service';
import {
  faCloudArrowDown,
  faCloudArrowUp,
  faChevronRight,
  faArrowUp,
  faArrowDown,
} from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass'],
})
export class AppComponent implements OnInit {
  tarrifs$: Observable<any[]> = of([]);
  selectedFilter = 'download descending';
  sortedTarrifs: any[] = [];
  attributes: string[] = [];

  constructor(private mockDataService: MockDataService) {}

  ngOnInit() {
    this.tarrifs$ = this.mockDataService.getTarrifs();
    this.tarrifs$.subscribe((tarrifs) => {
      // Get all attributes from the tariffs
      this.attributes = Object.keys(tarrifs[0]).filter(
        (attr) => attr !== 'benefits'
      );
  
      // Sort the tariffs based on the initial selected filter
      this.sortTarrifs();
    });
  }

  sortTarrifs() {
    // Subscribe to the observable to get the tariffs array
    this.tarrifs$.subscribe((tarrifs) => {
      // Copy the tariffs to a new array
      this.sortedTarrifs = [...tarrifs];

      // Sort the tariffs based on the selected filter
      if (this.selectedFilter === 'download descending') {
        this.sortedTarrifs.sort((a, b) => b.download - a.download);
      } else if (this.selectedFilter === 'download ascending') {
        this.sortedTarrifs.sort((a, b) => a.download - b.download);
      } else if (this.selectedFilter === 'upload descending') {
        this.sortedTarrifs.sort((a, b) => b.upload - a.upload);
      } else if (this.selectedFilter === 'price ascending') {
        this.sortedTarrifs.sort(
          (a, b) => parseFloat(a.price) - parseFloat(b.price)
        );
      } else if (this.selectedFilter === 'upload ascending') {
        this.sortedTarrifs.sort((a, b) => a.upload - b.upload);
      } else if (this.selectedFilter === 'price descending') {
        this.sortedTarrifs.sort(
          (a, b) => parseFloat(b.price) - parseFloat(a.price)
        );
      } else {
        this.sortedTarrifs.sort((a, b) =>
          a[this.selectedFilter].localeCompare(b[this.selectedFilter])
        );
      }
    });
  }

  faCloudArrowDown = faCloudArrowDown;
  faCloudArrowUp = faCloudArrowUp;
  faChevronRight = faChevronRight;
  faArrowDown = faArrowDown;
  faArrowUp = faArrowUp;
}
