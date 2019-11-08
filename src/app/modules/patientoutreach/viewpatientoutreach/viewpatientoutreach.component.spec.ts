import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewpatientoutreachComponent } from './viewpatientoutreach.component';

describe('ViewpatientoutreachComponent', () => {
  let component: ViewpatientoutreachComponent;
  let fixture: ComponentFixture<ViewpatientoutreachComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewpatientoutreachComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewpatientoutreachComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
