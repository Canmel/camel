import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FunsionchartComponent } from './funsionchart.component';

describe('FunsionchartComponent', () => {
  let component: FunsionchartComponent;
  let fixture: ComponentFixture<FunsionchartComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FunsionchartComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FunsionchartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
