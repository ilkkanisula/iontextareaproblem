import { Page2 } from './../page2/page2';
import { Component } from '@angular/core';

import { NavController, ModalController } from 'ionic-angular';

@Component({
  selector: 'page-page1',
  templateUrl: 'page1.html'
})
export class Page1 {
  modal: any;

  constructor(public navCtrl: NavController,
  public modalCtrl: ModalController) {
    
  }

  openModal() {
      this.modal = this.modalCtrl.create(Page2).present();
  }

}
