import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EasyTableComponent } from './easy-table.component';

describe('EasyTableComponent', () => {
  let component: EasyTableComponent;
  let fixture: ComponentFixture<EasyTableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EasyTableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EasyTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
