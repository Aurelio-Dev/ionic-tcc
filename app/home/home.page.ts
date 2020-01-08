import { Component } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { NavController, MenuController, IonSlides } from '@ionic/angular';
@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  public lottieConfig: Object;
  public lottieConfig2: Object;
  public lottieConfig3: Object;
  private anim: any;
  private animationSpeed: number = 1;
  constructor(private rota: Router, public navCtrl: NavController, public menuCtrl: MenuController) {
    this.lottieConfig = {
      path: 'assets/Lotties/941-submit-smile.json',
      renderer: 'canvas',
      autoplay: true,
      loop: true
    };

    this.lottieConfig2 = {
      path: 'assets/Lotties/676-done.json',
      renderer: 'canvas',
      autoplay: true,
      loop: true
    };
    this.lottieConfig3 = {
      path: 'assets/Lotties/data.json',
      renderer: 'canvas',
      autoplay: true,
      loop: true
    };
  }

  slideOpts = {
  speed: 400,
  autoplay: true,
  centeredSlides: true,
  };


  logout() {

    this.rota.navigate(['login']);
  }

  acessarDados() {
  this.rota.navigate(['list']);
  }

  acessarBoletim() {
    this.rota.navigate(['boletim']);
  }
  acessarHistorico() {
    this.rota.navigate(['historico']);
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

  ionViewWillEnter() {
    this.menuCtrl.enable(true);
  }

  
}
