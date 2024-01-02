import { Component } from '@angular/core';
import {
  ReactiveFormsModule,
  FormBuilder,
  Validators,
} from '@angular/forms';

@Component({
  selector: 'ns-auth',
  standalone: true,
  templateUrl: './auth.component.html',
  providers: [ReactiveFormsModule],
})
export class AuthComponent {
  constructor(private formBuilder: FormBuilder) {}

  loginForm = this.formBuilder.group({
    email: this.formBuilder.control('', {
      validators: [Validators.email],
    }),
    password: this.formBuilder.control(''),
  });
}
