import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HistoGazComponent } from './histo-gaz.component';

describe('HistoGazComponent', () => {
  let component: HistoGazComponent;
  let fixture: ComponentFixture<HistoGazComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HistoGazComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HistoGazComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
