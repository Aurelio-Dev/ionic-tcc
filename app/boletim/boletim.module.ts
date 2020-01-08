import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { BoletimPage } from './boletim.page';

import { LottieAnimationViewModule } from 'ng-lottie';
const routes: Routes = [
  {
    path: '',
    component: BoletimPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    LottieAnimationViewModule.forRoot(),
    RouterModule.forChild(routes)
  ],
  declarations: [BoletimPage]
})
export class BoletimPageModule {}
