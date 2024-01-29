import { Component, OnInit } from '@angular/core';
import {
  ReactiveFormsModule,
  FormBuilder,
  FormsModule,
  Validators,
} from '@angular/forms';
import { AdminIconComponent } from '~/icons/admin-icon/admin-icon.component';
import { ButtonDirective } from '~/ui-kit/button.directive';
import { GhostInputComponent } from '~/ui-kit/ghost-input';

@Component({
  selector: 'ns-auth',
  standalone: true,
  imports: [
    ReactiveFormsModule,
    FormsModule,
    GhostInputComponent,
    ButtonDirective,
    AdminIconComponent,
  ],
  templateUrl: './auth.component.html',
})
export class AuthComponent implements OnInit {
  color = 'text-red';
  constructor(private formBuilder: FormBuilder) {}

  loginForm = this.formBuilder.group({
    email: this.formBuilder.control('', {
      validators: [Validators.required, Validators.email],
    }),
    password: this.formBuilder.control('', {
      validators: [Validators.required],
    }),
  });

  ngOnInit(): void {
    this.loginForm.statusChanges.pipe();
  }

  get emailError() {
    return this.loginForm.get('email')?.touched ? 'touched' : '';
  }

  changeColor() {
    if (this.color === 'text-red') {
      this.color = 'text-green';
    } else {
      this.color = 'text-red';
    }
  }

  onSubmit() {
    console.log(this.loginForm.value);
  }
}
