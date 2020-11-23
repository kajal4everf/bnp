import { Component, OnInit } from '@angular/core';
import { HTTP } from '@ionic-native/http/ngx';
import { ModalController } from '@ionic/angular';
import { VehicleModalPage } from '../modal/vehicle-modal/vehicle-modal.page';
import { environment } from '../../environments/environment';

@Component({
  selector: 'app-vehicles',
  templateUrl: './vehicles.page.html',
  styleUrls: ['./vehicles.page.scss'],
})
export class VehiclesPage implements OnInit {
  vehicleData: any;
  vehicleDataAbs: any;
  searchQuery: any;
  isSearched = false;
  constructor(public modalController: ModalController, private http: HTTP) { }

  ngOnInit() { }

  getVehicleData(regno){
    this.http.get(environment.serviceApi + 'vehicles.php?regnno='+regno, '' , {}).then(resp  => {
      const respData =  JSON.parse(resp.data);
      this.vehicleData = respData.data;
      this.isSearched = true;
      console.log(JSON.stringify(resp.data));
    }).catch(error => {
      console.log(JSON.stringify(error));
      this.isSearched = true;
      this.vehicleData = [];
    });
  }
  searchVehicle(){
    const val = this.searchQuery;
    if (val && val.trim() !== '') {
      this.getVehicleData(val);
    }
  }
  // getFilteredVehi(ev){
  //   this.vehicleData = this.vehicleDataAbs;
  //   const val = ev.target.value;
  //   if (val && val.trim() !== '') {
  //     this.vehicleData = this.vehicleData.filter((item) => {
  //       return (item.regn_no.toLowerCase().trim().indexOf(val.toLowerCase()) > -1 || item.regn_dt.trim().indexOf(val.toLowerCase()) > -1);
  //     });
  //   }
  // }
  resetFilterData(){
    this.getVehicleData('0');
  }

  async showVehicleDetails(data) {
    const modal = await this.modalController.create({
      component: VehicleModalPage,
      swipeToClose: true,
      cssClass: 'vehicle-details-class',
      componentProps: {
        regnNo: data.regn_no,
        regnDt: data.regn_dt,
        offCd: data.off_cd,
        engNo: data.eng_no,
        chasiNo: data.chasi_no,
        ownerName: data.owner_name,
        fName: data.f_name,
        cAdd1: data.c_add1,
        cAdd2: data.c_add2,
        cAdd3: data.c_add3,
        cPincode: data.c_pincode,
        pAdd1: data.p_add1,
        pAdd2: data.p_add2,
        pAdd3: data.p_add3,
        pPincode: data.p_pincode,
        color: data.color,
        makerModel: data.maker_model,
        descr: data.descr,
        opDt: data.op_dt,
        mobileNo: data.mobile_no,
        emailId: data.email_id,
        mroy: data.mroy
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
