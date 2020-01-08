import { Component, OnInit } from '@angular/core';
import { NavController, MenuController } from '@ionic/angular';
@Component({
  selector: 'app-boletim',
  templateUrl: './boletim.page.html',
  styleUrls: ['./boletim.page.scss'],
})
export class BoletimPage implements OnInit {
  public lottieConfig: Object;
  private anim: any;
  private animationSpeed: number = 1;
  constructor(public navCtrl: NavController, public menuCtrl: MenuController) {
    this.lottieConfig = {
      path: 'assets/Lotties/676-done.json',
      renderer: 'canvas',
      autoplay: true,
      loop: true
    };
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
