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
  password = new FormControl('', [Validators.required]);

  getErrorMessage(message: any) {
    return this.username.hasError('required') ||
      this.password.hasError('required')
      ? 'You must enter a valid ' + message
      : '';
  }
}
