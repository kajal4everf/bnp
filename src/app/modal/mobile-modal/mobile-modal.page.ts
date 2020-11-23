import { Component, OnInit, Input } from '@angular/core';
import { ModalController } from '@ionic/angular';


@Component({
  selector: 'app-mobile-modal',
  templateUrl: './mobile-modal.page.html',
  styleUrls: ['./mobile-modal.page.scss'],
})
export class MobileModalPage implements OnInit {
  @Input() planType: string;
  @Input() phoneNo: string;
  @Input() name: string;
  @Input() fatherName: string;
  @Input() address: string;
  @Input() address2: string;
  @Input() address3: string;
  @Input() city: string;
  @Input() district: string;
  @Input() state: string;
  @Input() pincode: string;
  @Input() altPhone: string;
  @Input() actDate: string;

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
    if(this.planType){
      this.shareInfo += 'Plan Type: '+ this.planType +' \n';
    }
    if(this.phoneNo){
      this.shareInfo += 'Phone Number: '+ this.phoneNo +' \n';
    }
    if(this.name){
      this.shareInfo += 'Name: '+ this.name +' \n';
    }
    if(this.fatherName){
      this.shareInfo += 'Father Name: '+ this.fatherName +' \n';
    }
    if(this.address){
      this.shareInfo += 'Address: '+ this.address +' \n';
    }
    if(this.address2){
      this.shareInfo += 'Address2: '+ this.address2 +' \n';
    }
    if(this.address3){
      this.shareInfo += 'Address3: '+ this.address3 +' \n';
    }
    if(this.city){
      this.shareInfo += 'City: '+ this.city +' \n';
    }
    if(this.district){
      this.shareInfo += 'District: '+ this.district +' \n';
    }
    if(this.state){
      this.shareInfo += 'State: '+ this.state +' \n';
    }
    if(this.pincode){
      this.shareInfo += 'Pin Code: '+ this.pincode +' \n';
    }
    if(this.altPhone){
      this.shareInfo += 'Alt. Phone : '+ this.altPhone +' \n';
    }

    window['plugins'].socialsharing.share(this.shareInfo);
  }

}
