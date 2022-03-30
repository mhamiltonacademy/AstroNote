import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
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

  getErrorMessage(message: any) {
    if (this.username.hasError('required')) {
      return 'You must enter a valid ' + message;
    }
    if (this.email.hasError('required')) {
      return 'You must enter a valid ' + message;
    }
    if (this.password.hasError('required')) {
      return 'Password must contain have 6 characters, at least one uppercase letter, one lowercase letter, one number, and one special character.';
    }

    return '';
  }
}
