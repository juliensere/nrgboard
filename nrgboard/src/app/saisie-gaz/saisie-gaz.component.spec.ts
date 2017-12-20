import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SaisieGazComponent } from './saisie-gaz.component';

describe('SaisieGazComponent', () => {
  let component: SaisieGazComponent;
  let fixture: ComponentFixture<SaisieGazComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SaisieGazComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SaisieGazComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
