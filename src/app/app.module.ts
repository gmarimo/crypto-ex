import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';

import { AboutPage } from '../pages/about/about';
import { ContactPage } from '../pages/contact/contact';
import { HomePage } from '../pages/home/home';
import { TabsPage } from '../pages/tabs/tabs';
import { BtcPage } from '../pages/btc/btc';
import { BpaymentPage } from '../pages/bpayment/bpayment';
import { ExchangePage } from '../pages/exchange/exchange';
import { DepositPage } from '../pages/deposit/deposit';
import { PrepaidPage } from '../pages/prepaid/prepaid';
import { WithdrawPage } from '../pages/withdraw/withdraw'
import { SettingsPage } from '../pages/settings/settings';
import { AlertsPage } from '../pages/alerts/alerts';
import { SharePage } from '../pages/share/share';
import { InvitePage } from '../pages/invite/invite';


import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

@NgModule({
  declarations: [
    MyApp,
    AboutPage,
    ContactPage,
    HomePage,
    TabsPage,
    BtcPage,
    BpaymentPage,
    ExchangePage,
    DepositPage,
    PrepaidPage,
    WithdrawPage,
    SettingsPage,
    AlertsPage,
    SharePage,
    InvitePage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    AboutPage,
    ContactPage,
    HomePage,
    TabsPage,
    BtcPage,
    BpaymentPage,
    ExchangePage,
    DepositPage,
    PrepaidPage,
    WithdrawPage,
    SettingsPage,
    AlertsPage,
    SharePage,
    InvitePage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
