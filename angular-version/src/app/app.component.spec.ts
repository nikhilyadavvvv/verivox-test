import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { MockDataService } from './mock-data.service';
import { of } from 'rxjs';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

describe('AppComponent', () => {
  let component: AppComponent;
  let fixture: ComponentFixture<AppComponent>;
  let mockDataService: MockDataService;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AppComponent],
      providers: [MockDataService],
      schemas: [CUSTOM_ELEMENTS_SCHEMA]
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AppComponent);
    component = fixture.componentInstance;
    mockDataService = TestBed.inject(MockDataService);
  });

  it('should initialize the tarrifs$ observable with an empty array', () => {
    component.ngOnInit();
    expect(component.tarrifs$).toEqual(of([]));
  });

  it('should set the selectedFilter value to "download descending" by default', () => {
    expect(component.selectedFilter).toEqual('download descending');
  });

  it('should call the getTarrifs() method of the MockDataService service during initialization', () => {
    const getTarrifsSpy = spyOn(mockDataService, 'getTarrifs').and.returnValue(of([]));
    component.ngOnInit();
    expect(getTarrifsSpy).toHaveBeenCalled();
  });

  it('should populate the attributes array with the correct values based on the received tariffs', () => {
    const tariffs = [{
      name: 'Tariff 1',
      download: 100,
      upload: 50,
      benefits: ['Benefit 1', 'Benefit 2'],
      price: '20'
    }];
    spyOn(mockDataService, 'getTarrifs').and.returnValue(of(tariffs));
    component.ngOnInit();
    expect(component.attributes).toEqual(['name', 'download', 'upload', 'price']);
  });

  it('should sort the tariffs correctly by download speed, upload speed, and price', () => {
    const tariffs = [
      { name: 'Tariff 1', download: 50, upload: 25, benefits: [], price: '10' },
      { name: 'Tariff 2', download: 100, upload: 50, benefits: [], price: '20' },
      { name: 'Tariff 3', download: 75, upload: 40, benefits: [], price: '15' }
    ];
    spyOn(mockDataService, 'getTarrifs').and.returnValue(of(tariffs));
    component.ngOnInit();
    component.selectedFilter = 'download descending';
    component.sortTarrifs();
    expect(component.sortedTarrifs).toEqual([tariffs[1], tariffs[2], tariffs[0]]);
    component.selectedFilter = 'upload ascending';
    component.sortTarrifs();
    expect(component.sortedTarrifs).toEqual([tariffs[0], tariffs[2], tariffs[1]]);
    component.selectedFilter = 'price ascending';
    component.sortTarrifs();
    expect(component.sortedTarrifs).toEqual([tariffs[0], tariffs[2], tariffs[1]]);
  });

});
