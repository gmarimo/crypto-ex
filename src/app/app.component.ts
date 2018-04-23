import { Component, ViewChild } from '@angular/core';
import { Platform, Nav } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { TabsPage } from '../pages/tabs/tabs';
import { ExchangePage } from '../pages/exchange/exchange';
import { DepositPage } from '../pages/deposit/deposit';
import { PrepaidPage } from '../pages/prepaid/prepaid';
import { WithdrawPage } from '../pages/withdraw/withdraw'
import { SettingsPage } from '../pages/settings/settings';
import { AlertsPage } from '../pages/alerts/alerts';
import { SharePage } from '../pages/share/share';
import { InvitePage } from '../pages/invite/invite';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;

  rootPage: any = TabsPage;

  pages: Array<{title: string, component: any}>;

  constructor(public platform: Platform, public statusBar: StatusBar, public splashScreen: SplashScreen) {
    this.initializeApp();

    // used for an example of ngFor and navigation
    this.pages = [
      { title: 'Exchange', component: ExchangePage },
      { title: 'Deposit', component: DepositPage },
      { title: 'Prepaid', component: PrepaidPage },
      { title: 'Withdraw', component: WithdrawPage },
      { title: 'Settings', component: SettingsPage },
      { title: 'Alerts', component: AlertsPage },
      { title: 'Share', component: SharePage },
      { title: 'Invite', component: InvitePage }
    ];

  }

  initializeApp() {
    this.platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }

  openPage(page) {
    // Reset the content nav to have just this page
    // we wouldn't want the back button to show in this scenario
    this.nav.setRoot(page.component);
  }
}
