import { Component, OnInit, OnDestroy, AfterViewInit, ViewChild } from '@angular/core';
import { Storage } from '@ionic/storage';
import { Router } from '@angular/router';
import { AlertController, Platform, IonRouterOutlet} from '@ionic/angular';
import { AuthenticationService } from '../services/Authentication.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {
  subscription;
  public userInfo: any;
  alertShown: any;
  @ViewChild(IonRouterOutlet, { static : true }) routerOutlet: IonRouterOutlet;
  constructor(private storage: Storage,
              public alertController: AlertController,
              private router: Router,
              private alertCtrl: AlertController,
              private authService: AuthenticationService,
              private platform: Platform) {}

  ngOnInit() {
    this.storage.get('loginInfo').then((val) => {
      if ((typeof val !== 'undefined' ) && val !== null) {
        this.userInfo = val;
      } else {
        this.router.navigate(['/login']);
      }
    });
  }

  logout() {
    this.authService.logout();
  }

  getVehiclesData(){
    this.router.navigate(['/vehicles']);
  }

  getMobileData(){
    this.router.navigate(['/mobiles']);
  }

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
      this.presentConfirm();
    });
  }

  ionViewWillLeave() {
    this.subscription.unsubscribe();
  }

  async presentConfirm() {
    this.alertShown = true;
    const alertc = await this.alertCtrl.create({
      header: 'Confirm Exit',
      message: 'Do you want to exit app?',
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
          handler: () => {
            this.alertShown = false;
          }
        },
        {
          text: 'Yes',
          handler: () => {
            navigator['app'].exitApp();
          }
        }
      ]
    });
    await alertc.present();
  }
}
