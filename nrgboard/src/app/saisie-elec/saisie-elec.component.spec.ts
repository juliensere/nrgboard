import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SaisieElecComponent } from './saisie-elec.component';

describe('SaisieElecComponent', () => {
  let component: SaisieElecComponent;
  let fixture: ComponentFixture<SaisieElecComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SaisieElecComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SaisieElecComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
