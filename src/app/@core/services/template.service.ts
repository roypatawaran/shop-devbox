import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class TemplateService {

  constructor(private _http: HttpClient) { }

  getAll() {
    var headers = new HttpHeaders({'Content-Type': 'application/json'});
    return this._http.get(environment.apiUrl + "api/v1/templates", {headers});
  }

  // addRecord(data:any) {
  //   var headers = new HttpHeaders({'Content-Type': 'application/json'});
  //   return this._http.post(environment.apiUrl + "api/v1/client/", data, {headers});
  // }
}
