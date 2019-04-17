import { ToastController} from '@ionic/angular';
import { async } from '@angular/core/testing';
import { NavController} from '@ionic/angular'
import { ActivatedRoute} from '@angular/router'
import { ReactiveFormsModule } from '@angular/forms';
import { AlertController } from '@ionic/angular';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor(public navCntrl : NavController, public alertCtrl: AlertController, public toastCtrl: ToastController ){}

  Verc32(){
    this.navCntrl.navigateForward('c32');
  }
  Verc64(){
    this.navCntrl.navigateForward('c64');
  }
  Verc96(){
    this.navCntrl.navigateForward('c96');
  }
  Verc128(){
    this.navCntrl.navigateForward('c128');
  }
  
  async ngOnInit() {
   

    const alert = await this.alertCtrl.create({
      header : 'Bienvenido a Calcular notas',
      subHeader : '',
      message : '',
      buttons : ['Ok']
      
    });
    const toast = await this.toastCtrl.create({
      message: 'Design by Bossman',
      duration: 2000
    })

toast.present();
 await alert.present();
  }
}


