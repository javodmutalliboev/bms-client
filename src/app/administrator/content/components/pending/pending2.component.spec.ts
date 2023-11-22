import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PendingComponent2 } from './pending2.component';

describe('PendingComponent', () => {
  let component: PendingComponent2;
  let fixture: ComponentFixture<PendingComponent2>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PendingComponent2],
    });
    fixture = TestBed.createComponent(PendingComponent2);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
