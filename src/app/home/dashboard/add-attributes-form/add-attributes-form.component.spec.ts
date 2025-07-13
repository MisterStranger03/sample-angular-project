import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddAttributesFormComponent } from './add-attributes-form.component';

describe('AddAttributesFormComponent', () => {
  let component: AddAttributesFormComponent;
  let fixture: ComponentFixture<AddAttributesFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AddAttributesFormComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddAttributesFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
