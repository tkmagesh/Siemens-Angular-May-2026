import { Component, OnInit } from '@angular/core';


import {
  FormBuilder,
  FormGroup,
  Validators,
  FormArray,
  AbstractControl,
  ReactiveFormsModule
} from '@angular/forms';

@Component({
  selector: 'app-user-form',
  templateUrl: './user.component.html',
  imports :[ ReactiveFormsModule]
})
export class UserFormComponent implements OnInit {

  userForm!: FormGroup;

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    this.userForm = this.fb.group({
      name: ['', [Validators.required, Validators.minLength(3)]],
      email: ['', [Validators.required, Validators.email]],

      password: ['', [Validators.required, Validators.minLength(6)]],
      confirmPassword: ['', Validators.required],

      employed: [false],
      company: [''],

      phones: this.fb.array([this.createPhoneControl()]),

      address: this.fb.group({
        city: ['', Validators.required],
        zip: ['', [Validators.required, Validators.pattern(/^[0-9]{6}$/)]]
      })
    }, {
      validators: this.passwordMatchValidator
    });

    this.setupConditionalValidation();
    this.setupReactiveLogic();
  }

  // --- FormArray helper ---
  get phones(): FormArray {
    return this.userForm.get('phones') as FormArray;
  }

  createPhoneControl(): FormGroup {
    return this.fb.group({
      number: ['', [Validators.required, Validators.pattern(/^[0-9]{10}$/)]]
    });
  }

  addPhone() {
    this.phones.push(this.createPhoneControl());
  }

  removePhone(index: number) {
    this.phones.removeAt(index);
  }

  // --- Custom Validator ---
  passwordMatchValidator(group: AbstractControl) {
    const password = group.get('password')?.value;
    const confirm = group.get('confirmPassword')?.value;
    return password === confirm ? null : { mismatch: true };
  }

  // --- Conditional Validation ---
  setupConditionalValidation() {
    this.userForm.get('employed')?.valueChanges.subscribe(val => {
      const company = this.userForm.get('company');

      if (val) {
        company?.setValidators([Validators.required]);
      } else {
        company?.clearValidators();
      }

      company?.updateValueAndValidity();
    });
  }

  // --- Reactive Logic ---
  setupReactiveLogic() {
    this.userForm.get('name')?.valueChanges.subscribe(val => {
      if (val && val.length > 5) {
        console.log('Long name detected:', val);
      }
    });
  }

  // --- Patch vs Set ---
  loadSampleData() {
    this.userForm.patchValue({
      name: 'John Doe',
      email: 'john@example.com',
      address: {
        city: 'Chennai'
      }
    });
  }

  // --- Submit ---
  onSubmit() {
    
    console.log('Form Value:', this.userForm.value);
    
    console.dir(this.getAllErrors())
    
    if (this.userForm.invalid) {
      this.userForm.markAllAsTouched();
      return;
    }
    console.log('form is being submitted')
  }

  getAllErrors() {
    
    Object.keys(this.userForm.controls).forEach(key => {
      const controlErrors = this.userForm.get(key)?.errors;
      if (controlErrors != null) {
        console.log('Key:', key, 'Errors:', controlErrors);
      }
    });
  }
}