import { waitForAsync, ComponentFixture, TestBed } from '@angular/core/testing';

import { LoungeItemComponent } from './lounge-item.component';

describe('CategoriesLoungeComponent', () => {
  let component: LoungeItemComponent;
  let fixture: ComponentFixture<LoungeItemComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [LoungeItemComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LoungeItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
