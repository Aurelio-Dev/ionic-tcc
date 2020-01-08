import { Component, OnInit } from '@angular/core';
import { NavController, MenuController, ToastController } from '@ionic/angular';
import {AlertController} from '@ionic/angular';

@Component({
  selector: 'app-historico',
  templateUrl: './historico.page.html',
  styleUrls: ['./historico.page.scss'],
})
export class HistoricoPage implements OnInit {
  public lottieConfig: Object;
  private anim: any;
  private animationSpeed: number = 1;
  constructor(public navCtrl: NavController, public toastCtrl: ToastController, public menuCtrl: MenuController) {
    this.lottieConfig = {
      path: 'assets/Lotties/data.json',
      renderer: 'canvas',
      autoplay: true,
      loop: true
    };
   }

   solicitar() {
    this.toastctrl('Função Indisponivel');
  }

  async toastctrl(message: string) {
    let toast = await this.toastCtrl.create({
      message,
      duration: 2000,
      });
      toast.present();
  }

   handleAnimation(anim: any) {
    this.anim = anim;
}

stop() {
    this.anim.stop();
}

play() {
    this.anim.play();
}

pause() {
    this.anim.pause();
}

setSpeed(speed: number) {
    this.animationSpeed = speed;
    this.anim.setSpeed(speed);
}

  ngOnInit() {
  }

  ionViewWillEnter() {
    this.menuCtrl.enable(true);
  }
}
