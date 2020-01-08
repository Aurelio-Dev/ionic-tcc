import { Component } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Platform } from '@ionic/angular';
import {AlertController, LoadingController} from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { AuthService } from '../../src/app/services/auth.service';
import { ToastController} from '@ionic/angular';
import { User } from '../../src/interfaces/user';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html'
})
export class AppComponent {
  public appPages = [
    {
      title: 'Home',
      url: '/home',
      icon: 'home'

    },
    {
      title: 'Dados Pessoais',
      url: '/list',
      icon: 'contact'
    },
    {
      title: 'Boletim Escolar',
      url: '/boletim',
      icon: 'clipboard'
    },
    {
      title: 'Historico Escolar',
      url: '/historico',
      icon: 'cloud-download'
    },
    {
      title: 'Sair',
      url: '/login',
      icon: 'log-out'
    }
  ];

  private loading: any;
  public userLogin: User = {};
  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar,
    private rota: Router, public alert: AlertController,
    public toastCtrl: ToastController, private loadingCtrl: LoadingController,
    private authService: AuthService

  ) {
    this.initializeApp();
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }

  async logout() {
    await this.presentLoading();

    try {
      await this.authService.logout();
    } catch (error) {
      this.presentToast(error.message);
    } finally {
      this.loading.dismiss();
    }
  }

  async presentLoading() {
    this.loading = await this.loadingCtrl.create({message: 'Por favor, aguarde...', });
    return this.loading.present();
  }

  async presentToast(message: string) {
    const toast = await this.toastCtrl.create({ message, duration: 2000 });
    toast.present();
  }
}
