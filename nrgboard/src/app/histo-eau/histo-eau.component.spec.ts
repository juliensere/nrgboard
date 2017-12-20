import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HistoEauComponent } from './histo-eau.component';

describe('HistoEauComponent', () => {
  let component: HistoEauComponent;
  let fixture: ComponentFixture<HistoEauComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HistoEauComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HistoEauComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
