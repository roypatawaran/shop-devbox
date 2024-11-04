import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AddonService {

  constructor(private _http: HttpClient) { }

  getAll() {
    var headers = new HttpHeaders({'Content-Type': 'application/json'});
    return this._http.get(environment.apiUrl + "api/v1/addons", {headers});
  }

}
