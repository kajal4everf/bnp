import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AlertController, NavController } from '@ionic/angular';
import { Storage } from '@ionic/storage';
import { HTTP } from '@ionic-native/http/ngx';
import { Platform } from '@ionic/angular';
import { Uid } from '@ionic-native/uid/ngx';
import { AndroidPermissions } from '@ionic-native/android-permissions/ngx';
import { environment } from '../../environments/environment';
import { AuthenticationService } from '../services/Authentication.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  deviceId: any;
  platformType: any;
  subscription;
  constructor(private  router: Router,
              private platform: Platform,
              private uid: Uid,
              private androidPermissions: AndroidPermissions,
              public alertController: AlertController,
              private storage: Storage,
              private http: HTTP,
              private authService: AuthenticationService,
              public navCtrl: NavController) { 
                this.getPermission();
              }

  ngOnInit() {  
    this.storage.get('loginInfo').then((val) => {
      if (typeof val !== 'undefined' && val !== null) {
        this.authService.login();
      }
    });
  }

  login(form){
    const userName = form.form.controls.username.value;
    const password = form.form.controls.password.value;
    this.deviceId = this.getID_UID('UUID');
    let postData = {};
    if (this.deviceId){
      postData = {username: userName, password: password, deviceid: this.deviceId, platform: this.platformType};
    } else {
      postData = {username: userName, password: password};
    }

    this.http.post(environment.serviceApi + 'login.php', postData, {}).then(otpResp => {
      const jsonResponse = JSON.parse(otpResp.data);
      if (jsonResponse.status === 'Success') {
        this.storage.set('token', jsonResponse.token);
        const userInfo = {
          id: jsonResponse.id,
          firstname: jsonResponse.firstname,
          lastname: jsonResponse.lastname,
          email: jsonResponse.email,
          permission: jsonResponse.permission
        };
        this.storage.set('loginInfo', userInfo);
        form.reset();
        this.authService.login();
      } else {
        this.presentAlert('Error', '', 'Please enter correct information.');
      }
    }).catch(error => {
      const errResp = JSON.parse(error.error);
      console.log(errResp);
      this.presentAlert('Error', '', errResp.message);
    });
  }

  /* Get device details */
  getID_UID(type){
    if(type == "IMEI"){
      return this.uid.IMEI;
    }else if(type == "ICCID"){
      return this.uid.ICCID;
    }else if(type == "IMSI"){
      return this.uid.IMSI;
    }else if(type == "MAC"){
      return this.uid.MAC;
    }else if(type == "UUID"){
      return this.uid.UUID;
    }
  }

  /* Check permission */
  getPermission(){
    this.androidPermissions.checkPermission(
      this.androidPermissions.PERMISSION.READ_PHONE_STATE
    ).then(res => {
        if(res.hasPermission){
          
        }else{
          this.androidPermissions.requestPermission(this.androidPermissions.PERMISSION.READ_PHONE_STATE)
          // .then(res => {
          //   // this.presentAlert('Alert','','Please restart the app.');
          // }).catch(error => {
          //   // alert("Error! "+error);
          // });
        }
      }, err=> this.androidPermissions.requestPermission(this.androidPermissions.PERMISSION.READ_PHONE_STATE)
    ).catch(error => {
      // alert("Error! "+error);
    });
  }

  /* Popup alert box */
  async presentAlert(header, subheader, message) {
    const alert = await this.alertController.create({
      header,
      subHeader: subheader,
      message,
      buttons: ['OK']
    });
    await alert.present();
  }

  ionViewDidEnter() {
    this.subscription = this.platform.backButton.subscribeWithPriority(10, () => {
      navigator['app'].exitApp();
    });
  }

  ionViewWillLeave() {
    this.subscription.unsubscribe();
  }

}
