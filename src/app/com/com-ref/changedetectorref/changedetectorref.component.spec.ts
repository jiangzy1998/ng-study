import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChangedetectorrefComponent } from './changedetectorref.component';

describe('ChangedetectorrefComponent', () => {
  let component: ChangedetectorrefComponent;
  let fixture: ComponentFixture<ChangedetectorrefComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChangedetectorrefComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ChangedetectorrefComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
