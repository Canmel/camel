import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SvgMapComponent } from './svg-map.component';

describe('SvgMapComponent', () => {
  let component: SvgMapComponent;
  let fixture: ComponentFixture<SvgMapComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SvgMapComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SvgMapComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
