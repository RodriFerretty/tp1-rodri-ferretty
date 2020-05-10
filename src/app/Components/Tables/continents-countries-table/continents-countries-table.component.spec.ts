import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ContinentsCountriesTableComponent } from './continents-countries-table.component';

describe('ContinentsCountriesTableComponent', () => {
  let component: ContinentsCountriesTableComponent;
  let fixture: ComponentFixture<ContinentsCountriesTableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ContinentsCountriesTableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ContinentsCountriesTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
