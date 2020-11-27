import { waitForAsync, ComponentFixture, TestBed } from '@angular/core/testing';

import { GhostListComponent } from './ghost-list.component';

describe('GhostListComponent', () => {
  let component: GhostListComponent;
  let fixture: ComponentFixture<GhostListComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [GhostListComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GhostListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
