import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WorkFlowListComponent } from './work-flow-list.component';

describe('WorkFlowListComponent', () => {
  let component: WorkFlowListComponent;
  let fixture: ComponentFixture<WorkFlowListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WorkFlowListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WorkFlowListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
