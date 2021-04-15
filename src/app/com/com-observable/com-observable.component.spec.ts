import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComObservableComponent } from './com-observable.component';

describe('ComObservableComponent', () => {
  let component: ComObservableComponent;
  let fixture: ComponentFixture<ComObservableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ComObservableComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ComObservableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
