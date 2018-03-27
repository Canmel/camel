import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ZorroValidComponent } from './zorro-valid.component';

describe('ZorroValidComponent', () => {
  let component: ZorroValidComponent;
  let fixture: ComponentFixture<ZorroValidComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ZorroValidComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ZorroValidComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
