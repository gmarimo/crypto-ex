import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { BpaymentPage } from './bpayment';

@NgModule({
  declarations: [
    BpaymentPage,
  ],
  imports: [
    IonicPageModule.forChild(BpaymentPage),
  ],
})
export class BpaymentPageModule {}
