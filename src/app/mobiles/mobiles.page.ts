import { Component, OnInit } from '@angular/core';
import { HTTP } from '@ionic-native/http/ngx';
import { ModalController } from '@ionic/angular';
import { MobileModalPage } from '../modal/mobile-modal/mobile-modal.page';
import { environment } from '../../environments/environment';

@Component({
  selector: 'app-mobiles',
  templateUrl: './mobiles.page.html',
  styleUrls: ['./mobiles.page.scss'],
})
export class MobilesPage implements OnInit {
  mobileData: any;
  mobileDataAbs: any;
  searchQuery: any;
  isSearched = false;
  constructor(public modalController: ModalController, private http: HTTP) { }

  ngOnInit() {
    
  }
  getMobileData(mobno){
    this.http.get(environment.serviceApi + 'mobile.php?mobno='+mobno, '' , {}).then(resp  => {
      const respData =  JSON.parse(resp.data);
      this.mobileData = respData.data;
      this.isSearched = true;
    }).catch(error => {
      this.isSearched = true;
      this.mobileData = [];
    });
  }
  searchMobile(){
    const val = this.searchQuery;    
    if (val && val.trim() !== '') {
      this.getMobileData(val);
    }
  }
  // getFilteredMob(ev){
  //   this.isSearched = false;
  //   this.mobileData = this.mobileDataAbs;
  //   const val = ev.target.value;
  //   if (val && val.trim() !== '') {
  //     this.mobileData = this.mobileData.filter((item) => {
  //       return (item.name.toLowerCase().trim().indexOf(val.toLowerCase()) > -1 || item.phone_no.indexOf(val.toLowerCase()) > -1);
  //     });
  //   }
  // }
  resetFilterData(){
    this.getMobileData(0);
  }

  async showMobileDetails(data) {
    const modal = await this.modalController.create({
      component: MobileModalPage,
      swipeToClose: true,
      cssClass: 'my-custom-class',
      componentProps: {
        planType: data.plan_type,
        phoneNo: data.phone_no,
        name: data.name,
        fatherName: data.father_name,
        address: data.address,
        address2: data.address2,
        address3: data.address3,
        city: data.city,
        district: data.district,
        state: data.state,
        pincode: data.pincode,
        altPhone: data.alt_phone,
        actDate: data.actdate
      }
    });
    return await modal.present();
  }
  dismissModal() {
    // using the injected ModalController this page
    // can "dismiss" itself and optionally pass back data
    this.modalController.dismiss({
      dismissed: true
    });
  }
}
