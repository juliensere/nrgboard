import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SelectionEnergieComponent } from './selection-energie.component';

describe('SelectionEnergieComponent', () => {
  let component: SelectionEnergieComponent;
  let fixture: ComponentFixture<SelectionEnergieComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SelectionEnergieComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SelectionEnergieComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
