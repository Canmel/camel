import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BootPageComponent } from './boot-page.component';

describe('BootPageComponent', () => {
  let component: BootPageComponent;
  let fixture: ComponentFixture<BootPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BootPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BootPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
