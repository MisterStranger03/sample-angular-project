import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-attributes-form',
  templateUrl: './add-attributes-form.component.html',
  styleUrls: ['./add-attributes-form.component.css'],
  standalone: false 
})
export class AddAttributesFormComponent implements OnInit {

  attributesForm!: FormGroup;

  constructor(private fb: FormBuilder, private router: Router) { }

  ngOnInit(): void {
    this.attributesForm = this.fb.group({
      selectEntity: ['Function'], 
      attribute1: [''],
      attribute2: [''],
      attribute3: [''],
      attribute4: [''],
      attribute5: [''],
      attribute6: [''],
      attribute7: ['']
    });
  }

  addNewAttributeField(): void {
    console.log('Adding a new attribute field...');
  }

  onAdd(): void {
    if (this.attributesForm.valid) {
      console.log('Form Submitted!', this.attributesForm.value);
    } else {
      console.error('Form is invalid.');
    }
  }

  onCancel(): void {
    console.log('Cancelled.');
    this.router.navigate(['/dashboard/function']);
  }
}