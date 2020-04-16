import { Component, OnInit } from '@angular/core';
import { IUserSettings } from '../data/user-settings';

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
}
