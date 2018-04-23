import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { BpaymentPage } from '../bpayment/bpayment';

/**
 * Generated class for the BtcPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-btc',
  templateUrl: 'btc.html',
})
export class BtcPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {

    console.log(navParams.get('val'));
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad BtcPage');
  }

  load() { //loading the page
    this.navCtrl.push(BpaymentPage, {
      val: 'Testing the push'

    })

  }

}
