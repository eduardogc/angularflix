import { waitForAsync, ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchHeaderComponent } from './search-header.component';

describe('SearchHeaderComponent', () => {
  let component: SearchHeaderComponent;
  let fixture: ComponentFixture<SearchHeaderComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [SearchHeaderComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
