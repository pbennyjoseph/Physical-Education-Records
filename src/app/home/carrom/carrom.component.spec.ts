import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CarromComponent } from './carrom.component';

describe('CarromComponent', () => {
  let component: CarromComponent;
  let fixture: ComponentFixture<CarromComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CarromComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CarromComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
