import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-function-form',
  templateUrl: './function-form.component.html',
  styleUrls: ['./function-form.component.css'],
  standalone: false
})
export class FunctionFormComponent implements OnInit {

  functionForm!: FormGroup;

  constructor(private fb: FormBuilder, private router: Router) { }

  ngOnInit(): void {
    this.functionForm = this.fb.group({
      functionCode: ['', Validators.required],
      functionName: ['', Validators.required],
      status: ['Active', Validators.required],
      description: [''],
      effectiveFrom: [null],
      effectiveTill: [null],
      headEmp: [''],
      attributeFirst: [''],
      attributeSecond: ['']
    });
  }

  onSubmit(): void {
    if (this.functionForm.valid) {
      console.log('Form Submitted!', this.functionForm.value);
    } else {
      console.error('Form is invalid.');
      this.functionForm.markAllAsTouched();
    }
  }

  onCancel(): void {
    console.log('Form cancelled.');
    this.router.navigate(['/dashboard/function']);
  }
}