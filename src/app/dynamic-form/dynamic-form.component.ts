import { Component } from '@angular/core';
import { FormBuilder, FormGroup, FormArray, Validators } from '@angular/forms';
import { CommonModule } from '@angular/common'; 
import { ReactiveFormsModule } from '@angular/forms'; 

@Component({
  selector: 'app-dynamic-form',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule], 
  templateUrl: './dynamic-form.component.html',
  styleUrls: ['./dynamic-form.component.css']
})
export class DynamicFormComponent {
  form: FormGroup;

  constructor(private fb: FormBuilder) {
    this.form = this.fb.group({
      name: ['', Validators.required],
      age: ['', [Validators.required, Validators.min(18)]],
      gender: ['', Validators.required],
      addresses: this.fb.array([this.createAddress()])
    });
  }


  get addresses() {
    return this.form.get('addresses') as FormArray;
  }

 
  createAddress(): FormGroup {
    return this.fb.group({
      street: ['', Validators.required],
      city: ['', Validators.required]
    });
  }

  
  addAddress(): void {
    this.addresses.push(this.createAddress());
  }


  onSubmit(): void {
    console.log(this.form.value);
  }
}
