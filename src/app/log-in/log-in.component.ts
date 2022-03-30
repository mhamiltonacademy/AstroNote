import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-log-in',
  templateUrl: './log-in.component.html',
  styleUrls: ['./log-in.component.css'],
})
export class LogInComponent implements OnInit {
  hide = true;
  value = 'Clear me';

  constructor() {}

  ngOnInit(): void {}

  username = new FormControl('', [Validators.required]);
  email = new FormControl('', [
    Validators.required,
    Validators.email,
    Validators.pattern('[a-zA-Z0-9.-_]{1,}@[a-zA-Z.-]{2,}[.]{1}[a-zA-Z]{2,}'),
  ]);
  password = new FormControl('', [Validators.required]);

  getErrorMessage(message: any) {
    if (this.username.hasError('required')) {
      return 'You must your ' + message;
    }
    if (this.password.hasError('required')) {
      return 'You must your ' + message;
    }

    return this.username.hasError('input') ? 'Not a valid ' + message : '';
  }
}
