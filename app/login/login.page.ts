import { Component, OnInit } from '@angular/core';
import { Router, /*ActivatedRoute*/ } from '@angular/router';
import {AlertController, LoadingController, MenuController} from '@ionic/angular';
import {ActionSheetController} from '@ionic/angular';
//import { from } from 'rxjs';
//import { async } from 'q';
import { ToastController} from '@ionic/angular';
import { NavController } from '@ionic/angular';
import { AuthService } from '../services/auth.service';
import { User } from '../../interfaces/user';
//import { error } from '@angular/compiler/src/util';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

 public userLogin: User = {};

  private loading: any;


  constructor(
    private rota: Router, public alert: AlertController ,
    public navCtrl: NavController, public toastCtrl: ToastController, private loadingCtrl: LoadingController,
    private authService: AuthService,   public menuCtrl: MenuController

  ) {

   }

   ionViewWillEnter() {
    this.menuCtrl.enable(false);
  }
  ngOnInit() {

  }

  async login() {
    await this.presentLoading();

    try {
      await this.authService.login(this.userLogin);
      this.presentToast('Bem-Vindo ' + this.userLogin.email + '😄');
      this.rota.navigate(['home']);
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

  esqueceu() {
    this.toastctrl('Função Indisponivel');
  }

  async toastctrl(message: string) {
    const toast = await this.toastCtrl.create({
      message,
      duration: 2000,
      });
      toast.present();
  }
  async presentToast(message: string) {
    const toast = await this.toastCtrl.create({ message, duration: 2000 });
    toast.present();
  }

}
