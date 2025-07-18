import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FunctionFormComponent } from './function-form.component';

describe('FunctionFormComponent', () => {
  let component: FunctionFormComponent;
  let fixture: ComponentFixture<FunctionFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FunctionFormComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FunctionFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
