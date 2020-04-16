import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { HttpClient } from '@angular/common/http';

import { IUserSettings } from './user-settings';

@Injectable({
  providedIn: 'root',
})
export class DataService {
  constructor(private http: HttpClient) {}

  postUserSettingsForm(userSettings: IUserSettings): Observable<any> {
    return this.http.post(
      'https://putsreq.com/gyxIVzlcCmNj4GEKvGCL',
      userSettings
    );
  }

  getSubscriptionTypes() {
    return of(['Weekly', 'Monthly', 'Annual', 'Lifetime']);
  }
}
