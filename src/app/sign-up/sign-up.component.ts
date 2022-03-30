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

  username = new FormControl('', [Validators.required]);
  email = new FormControl('', [Validators.required, Validators.email]);
  password = new FormControl('', [Validators.required]);

  getErrorMessage(message:any) {
    if (this.username.hasError('required')) {
      return 'You must enter a valid username';
    }
    if (this.email.hasError('required')) {
      return 'You must enter a valid username';
    }
    if (this.password.hasError('required')) {
      return 'You must enter a valid username';
    }

    return this.username.hasError('input') ? 'Not a valid username' : '';
  }
}
