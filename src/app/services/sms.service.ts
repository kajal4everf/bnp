import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse, HttpRequest, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';
import { map } from 'rxjs/operators';
import { HTTP } from '@ionic-native/http/ngx';
import { resolve } from 'url';

@Injectable({
  providedIn: 'root'
})
export class SmsService {

  constructor(private http: HTTP) { }
  getOtp(mobileNo: string) {
    // return this.http.get(environment.serviceApi + 'getotp/' + mobileNo).pipe(map((data: any) => data));
    this.http.get(environment.serviceApi + 'getotp/' + mobileNo, {}, {}).then(data => {
      console.log( data );
    });
  }
  validateOtp(mobileNo: string, otp: string) {
    // return this.http.get(environment.serviceApi + 'verifyOtp/' + mobileNo + '/' + otp).pipe(map((data: any) => data));
  }
  getResult(mobileNo: string) {
    // return this.http.get(environment.serviceApi + 'getresult/' + mobileNo).pipe(map((data: any) => data));
  }
}
