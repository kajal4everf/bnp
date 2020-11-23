import { Component, OnInit, Input } from '@angular/core';
import { ModalController } from '@ionic/angular';
@Component({
  selector: 'app-vehicle-modal',
  templateUrl: './vehicle-modal.page.html',
  styleUrls: ['./vehicle-modal.page.scss'],
})
export class VehicleModalPage implements OnInit {
  @Input() regnNo: string;
  @Input() regnDt: string;
  @Input() offCd: string;
  @Input() engNo: string;
  @Input() chasiNo: string;
  @Input() ownerName: string;
  @Input() fName: string;
  @Input() cAdd1: string;
  @Input() cAdd2: string;
  @Input() cAdd3: string;
  @Input() cPincode: string;
  @Input() pAdd1: string;
  @Input() pAdd2: string;
  @Input() pAdd3: string;
  @Input() pPincode: string;
  @Input() color: string;
  @Input() makerModel: string;
  @Input() descr: string;
  @Input() opDt: string;
  @Input() mobileNo: string;
  @Input() emailId: string;


  shareInfo: string;
  constructor(public modalController: ModalController) { }

  ngOnInit() {
  }
  dismissModal() {
    this.modalController.dismiss({
      dismissed: true
    });
  }
  shareThis(){
    this.shareInfo = '';
    if(this.regnNo){
      this.shareInfo += 'Reg. No: '+ this.regnNo +' \n';
    }
    if(this.regnDt){
      this.shareInfo += 'Reg. Date: '+ this.regnDt +' \n';
    }
    if(this.offCd){
      this.shareInfo += 'Off CD: '+ this.offCd +' \n';
    }
    if(this.engNo){
      this.shareInfo += 'Engine No: '+ this.engNo +' \n';
    }
    if(this.chasiNo){
      this.shareInfo += 'Chasis No: '+ this.chasiNo +' \n';
    }
    if(this.ownerName){
      this.shareInfo += 'Owner Name: '+ this.ownerName +' \n';
    }
    if(this.fName){
      this.shareInfo += 'Fname: '+ this.fName +' \n';
    }
    if(this.cAdd1){
      this.shareInfo += 'Customer Addr1: '+ this.cAdd1 +' \n';
    }
    if(this.cAdd2){
      this.shareInfo += 'Customer Addr2: '+ this.cAdd2 +' \n';
    }
    if(this.cAdd3){
      this.shareInfo += 'Customer Addr3: '+ this.cAdd3 +' \n';
    }
    if(this.cPincode){
      this.shareInfo += 'Pin Code: '+ this.cPincode +' \n';
    }
    if(this.pAdd1){
      this.shareInfo += 'PAdd1 : '+ this.pAdd1 +' \n';
    }
    if(this.pAdd2){
      this.shareInfo += 'PAdd2 : '+ this.pAdd2 +' \n';
    }
    if(this.pPincode){
      this.shareInfo += 'Pin Code : '+ this.pPincode +' \n';
    }
    if(this.color){
      this.shareInfo += 'Color : '+ this.color +' \n';
    }
    if(this.makerModel){
      this.shareInfo += 'Maker Model : '+ this.makerModel +' \n';
    }
    if(this.descr){
      this.shareInfo += 'Description : '+ this.descr +' \n';
    }
    if(this.opDt){
      this.shareInfo += 'OP Date : '+ this.opDt +' \n';
    }
    if(this.mobileNo){
      this.shareInfo += 'Mobile No : '+ this.mobileNo +' \n';
    }
    if(this.emailId){
      this.shareInfo += 'Email Id : '+ this.emailId +' \n';
    }
    window['plugins'].socialsharing.share(this.shareInfo);
  }
}
