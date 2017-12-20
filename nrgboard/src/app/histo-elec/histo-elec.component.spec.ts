import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HistoElecComponent } from './histo-elec.component';

describe('HistoElecComponent', () => {
  let component: HistoElecComponent;
  let fixture: ComponentFixture<HistoElecComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HistoElecComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HistoElecComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
