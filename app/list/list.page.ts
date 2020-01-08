import { Component, OnInit } from '@angular/core';
import { NavController, MenuController } from '@ionic/angular';


@Component({
  selector: 'app-list',
  templateUrl: 'list.page.html',
  styleUrls: ['list.page.scss']
})
export class ListPage implements OnInit {
  public lottieConfig: Object;
  private anim: any;
  private animationSpeed: number = 1;

  constructor(public navCtrl: NavController, public menuCtrl: MenuController) {
    this.lottieConfig = {
      path: 'assets/Lotties/941-submit-smile.json',
      renderer: 'canvas',
      autoplay: true,
      loop: true
    };
  }

  ionViewWillEnter() {
    this.menuCtrl.enable(true);
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
  // add back when alpha.4 is out
  // navigate(item) {
  //   this.router.navigate(['/list', JSON.stringify(item)]);
  // }

  
}
