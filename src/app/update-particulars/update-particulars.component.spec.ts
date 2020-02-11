import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateParticularsComponent } from './update-particulars.component';

describe('UpdateParticularsComponent', () => {
  let component: UpdateParticularsComponent;
  let fixture: ComponentFixture<UpdateParticularsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UpdateParticularsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateParticularsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
