import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SaisieEauComponent } from './saisie-eau.component';

describe('SaisieEauComponent', () => {
  let component: SaisieEauComponent;
  let fixture: ComponentFixture<SaisieEauComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SaisieEauComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SaisieEauComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
