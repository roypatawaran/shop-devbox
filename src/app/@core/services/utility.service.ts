import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class UtilityService {

  constructor(private _http: HttpClient) { }

  searchDomain(query:any) {
    var headers = new HttpHeaders({'Content-Type': 'application/json'});
    return this._http.get(environment.apiUrl + "api/v1/utility/checkdomain?domain="+query, {headers});
  }

  suggestDomain(query:any) {
    var headers = new HttpHeaders({'Content-Type': 'application/json'});
    return this._http.get(environment.apiUrl + "api/v1/utility/suggestdomain?domain="+query, {headers});
  }

  sendEmail(data:any) {
    var headers = new HttpHeaders({'Content-Type': 'application/json'});
    return this._http.post(environment.apiUrl + "api/v1/utility/email", data, {headers});
  }
}
