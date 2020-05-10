import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ContinentsTableComponent } from './continents-table.component';

describe('ContinentsTableComponent', () => {
  let component: ContinentsTableComponent;
  let fixture: ComponentFixture<ContinentsTableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ContinentsTableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ContinentsTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
