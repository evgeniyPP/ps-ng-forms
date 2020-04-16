import { Component, OnInit } from '@angular/core';
import { NgForm, NgModel } from '@angular/forms';

import { IUserSettings } from '../data/user-settings';
import { DataService } from './../data/data.service';

@Component({
  selector: 'app-user-settings-form',
  templateUrl: './user-settings-form.component.html',
  styleUrls: ['./user-settings-form.component.css'],
})
export class UserSettingsFormComponent implements OnInit {
  initialUserSettings: IUserSettings = {
    name: '',
    emailOffers: false,
    interfaceStyle: 'light',
    subscriptionType: 'monthly',
    notes: '',
  };

  userSettings: IUserSettings = { ...this.initialUserSettings };

  constructor() {}

  ngOnInit(): void {}

  onSubmit(form: NgForm) {
    console.log(`Form validation: ${form.valid}`);
  }

  onBlur(field: NgModel) {
    console.log(`Field '${field.name}' validation: ${field.valid}`);
  }
}
