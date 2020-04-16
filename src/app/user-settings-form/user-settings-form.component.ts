import { Component, OnInit } from '@angular/core';
import { NgForm, NgModel } from '@angular/forms';
import { Observable } from 'rxjs';

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
    startDate: new Date(),
    emailOffers: false,
    interfaceStyle: 'light',
    subscriptionType: null,
    notes: '',
  };
  userSettings: IUserSettings = { ...this.initialUserSettings };
  subscriptionTypes: Observable<string[]>;
  postError = false;
  postErrorMessage = null;
  toggleButton = 'On';

  constructor(private dataService: DataService) {}

  ngOnInit(): void {
    this.subscriptionTypes = this.dataService.getSubscriptionTypes();
  }

  onSubmit(form: NgForm): void {
    if (!form.valid) {
      this.postError = true;
      this.postErrorMessage = 'Form is not valid';
      return;
    }

    this.dataService.postUserSettingsForm(this.userSettings).subscribe(
      (data) => console.log('Submit Data: ', data),
      (err) => this.onHttpError(err)
    );
  }

  onBlur(field: NgModel) {
    console.log(`Field '${field.name}' validation: ${field.valid}`);
  }

  onHttpError(error) {
    console.error('Http Error:', error);
    this.postError = true;
    this.postErrorMessage = error.error.message;
  }
}
