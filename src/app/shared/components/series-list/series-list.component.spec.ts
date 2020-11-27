import { waitForAsync, ComponentFixture, TestBed } from '@angular/core/testing';

import { SeriesListComponent } from './series-list.component';

describe('SeriesListComponent', () => {
  let component: SeriesListComponent;
  let fixture: ComponentFixture<SeriesListComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [SeriesListComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SeriesListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
