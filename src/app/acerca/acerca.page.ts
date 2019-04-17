import { Component, OnInit } from '@angular/core';

import { ToastController} from '@ionic/angular';
import { async } from '@angular/core/testing';

import { NavController} from '@ionic/angular'

import { ActivatedRoute} from '@angular/router'
import { ReactiveFormsModule } from '@angular/forms';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-acerca',
  templateUrl: './acerca.page.html',
  styleUrls: ['./acerca.page.scss'],
})
export class AcercaPage implements OnInit {

  constructor(public navCntrl : NavController) { }

  ngOnInit() {
  }
  verhome(){
    
this.navCntrl.navigateRoot('home');

 
}
}
