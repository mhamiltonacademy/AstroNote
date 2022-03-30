import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { getMatIconNameNotFoundError } from '@angular/material/icon';
@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css'],
})
export class SignUpComponent implements OnInit {
  hide = true;
  value = 'Clear me';
  constructor() {}

  ngOnInit(): void {}

  username = new FormControl('', [
    Validators.required,
    Validators.minLength(6),
    Validators.maxLength(20),
    Validators.pattern('^[a-zA-Z0-9]+$'),
  ]);
  email = new FormControl('', [
    Validators.required,
    Validators.email,
    Validators.pattern('[a-zA-Z0-9.-_]{1,}@[a-zA-Z.-]{2,}[.]{1}[a-zA-Z]{2,}'),
  ]);
  password = new FormControl('', [
    Validators.required,
    Validators.minLength(6),
    Validators.maxLength(20),
    Validators.pattern(
      '(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[$@$!%*?&])[A-Za-zd$@$!%*?&].{5,}'
    ),
  ]);

  getErrorMessageUsername(message: any) {
    return this.username.hasError('required')
      ? 'You must enter a valid ' + message
      : ' ';
  }
  getErrorMessageEmail(message: any) {
    return this.email.hasError('required')
      ? 'You must enter a valid ' + message
      : ' ';
  }
  getErrorMessagePassword() {
    return this.password.hasError('required')
      ? 'Password must at least have 6 characters, at least one uppercase letter, one lowercase letter, one number, and one special character.'
      : ' ';
  }
}
