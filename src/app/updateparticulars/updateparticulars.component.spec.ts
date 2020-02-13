import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { UpdateparticularsComponent } from './updateparticulars.component';

describe('UpdateparticularsComponent', () => {
  let component: UpdateparticularsComponent;
  let fixture: ComponentFixture<UpdateparticularsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UpdateparticularsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateparticularsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
