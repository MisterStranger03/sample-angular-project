import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FunctionApprovalComponent } from './function-approval.component';

describe('FunctionApprovalComponent', () => {
  let component: FunctionApprovalComponent;
  let fixture: ComponentFixture<FunctionApprovalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FunctionApprovalComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FunctionApprovalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
