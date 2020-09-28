import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TabletennisComponent } from './tabletennis.component';

describe('TabletennisComponent', () => {
  let component: TabletennisComponent;
  let fixture: ComponentFixture<TabletennisComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TabletennisComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TabletennisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
