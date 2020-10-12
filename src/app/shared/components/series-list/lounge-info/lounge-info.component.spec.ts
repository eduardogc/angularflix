import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LoungeInfoComponent } from './lounge-info.component';

describe('LoungeInfoComponent', () => {
  let component: LoungeInfoComponent;
  let fixture: ComponentFixture<LoungeInfoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LoungeInfoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LoungeInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
