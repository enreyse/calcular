import { Component, OnInit } from '@angular/core';

import { ToastController} from '@ionic/angular';
import { async } from '@angular/core/testing';

import { NavController} from '@ionic/angular'

import { ActivatedRoute} from '@angular/router'
import { ReactiveFormsModule } from '@angular/forms';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-c96',
  templateUrl: './c96.page.html',
  styleUrls: ['./c96.page.scss'],
})



export class C96Page implements OnInit {

  constructor(public toastctrl : ToastController, public navCntrl : NavController, public ActivatedRoute: ActivatedRoute, public alertCtrl: AlertController) {}

  epe1 : number; //nota 
  epe2: number; //nota 
  epe3 : number; //nota 

  eva1: number; //nota 
  eva2: number; //nota 
  eva3: number; //nota 
  examen : number; //nota 

  promevas : number; // comprobacion del promedio de evas
 

  resultado : number; // resultado 

  daexamen : boolean; // comprobacion si da examen o no
  
  
  ionViewDidEnter(){
    console.log(document.getElementById('examen'))
}


  verhome(){
        
    this.navCntrl.navigateRoot('home');

     
   }

   async ngOnInit() {

    const alert = await this.alertCtrl.create({
      header: 'Calculo de notas',
      subHeader: '96 horas',
      message: ' <p>Seleccione si desea calcular las notas con o sin <strong>Examen</strong>.</p>'+
      '<p>Tenga en cuenta que para <strong>no</strong> rendir examen nesecita:</p>'+
      '<ul>'+
      '<li align="left">Minimo <strong>70%</strong>  de asistencia.</li>'+
      '<li align="left">Ninguna <strong>EPE</strong> menor a 4.</li>'+
      '<li align="left">Promedio de <strong>EVA(s)</strong> mayor a 4.</li>'+
      '<li align="left">Para no rendir examen tu promedio debe ser mayor a <strong>5.5</strong>.</li>'+
      '</ul>'+'<p>Para ingresar las notas debes hacerlo con puntos <strong>EJ: 5.5</strong>.</p>',
      buttons: [ {
        text: 'Calcular con examen',
        handler: () => {
          console.log('da');
          this.daexamen = true;
          document.getElementById("titulo").innerHTML = "<ion-title id='titulo'>96 Hrs CON Examen</ion-title>";
        }
      },,  {
        text: 'Calcular sin examen',
        handler: () => {
          console.log('no');
          this.daexamen = false;
          this.examen =1;
          document.getElementById("divex").innerHTML = "";
        
          document.getElementById("titulo").innerHTML = "<ion-title id='titulo'>96 Hrs SIN Examen</ion-title>";
        }
      }]
    });
  
    await alert.present();


      
  }

   async calcular(){

    if (this.epe1 == undefined || this.epe2 == undefined || this.epe3 == undefined || this.eva1 == undefined || this.eva2 == undefined || this.eva3 == undefined || this.examen == undefined) {

      const alert = await this.alertCtrl.create({
        header: 'ERROR AL INGRESAR',
        subHeader: 'dejaste campos en blanco',
        message: 'Todos los campos son requeridos',
        buttons: ['OK']
      });
      this.epe1 = null;
      this.epe2 = null;
      this.epe3 = null; 
      this.eva1 = null;
      this.eva2 = null;
      this.eva3 = null;
      if(this.daexamen == false){
        this.examen = 1;
      }else{
        this.examen = null;
      }
      
      console.log(this.examen);
      console.log(this.daexamen);
      await alert.present();}
      else {
        if (this.epe1 > 7 || this.epe2 > 7 || this.epe3 > 7 || this.eva1 > 7 || this.eva2 > 7 || this.eva3 > 7 || this.examen > 7) {

          const alert = await this.alertCtrl.create({
            header: 'ERROR AL INGRESAR',
            subHeader: 'Nadie puede tener mas que un 7',
            message: '<p>ingresaste un numero mayor a 7</p><p>debes tener en cuenta que al ingresar  tus notas respetando el formato EJ: 5.5</p>',
            buttons: ['OK']
          });
          console.log(this.examen);
          console.log(this.daexamen);
          await alert.present();
          this.epe1 = null;
      this.epe2 = null;
      this.epe3 = null; 
      this.eva1 = null;
      this.eva2 = null;
      this.eva3 = null;
      if(this.daexamen == false){
        this.examen = 1;
      }else{
        this.examen = null;
      }
        }
          else { 
            if (this.epe1 < 1 || this.epe2 < 1 || this.epe3 < 1 || this.eva1 < 1 || this.eva2 < 1 || this.eva3 < 1 || this.examen < 1) {

              const alert = await this.alertCtrl.create({
                header: 'ERROR AL INGRESAR',
                subHeader: 'Nadie puede tener menos que un 1',
                message: '<p>ingresaste un numero menor a 1</p><p>debes tener en cuenta que al ingresar  tus notas respetando el formato EJ: 5.5</p>',
                buttons: ['OK']
              });
              console.log(this.daexamen);
              console.log(this.examen);
              await alert.present();
              this.epe1 = null;
              this.epe2 = null;
              this.epe3 = null; 
              this.eva1 = null;
              this.eva2 = null;
              this.eva3 = null;
              if(this.daexamen == false){
                this.examen = 1;
              }else{
                this.examen = null;
              }

             
              
            }
              else { 
               
                if (this.daexamen == false && this.epe1 < 4 || this.epe2 < 4 || this.epe3 < 4 ) {

                  const alert = await this.alertCtrl.create({
                    header: 'Sus notas son inválidas para el calculo sin examen',
                    subHeader: '',
                    message: '<strong><p><font color="red">1 o mas de sus EPE(s) es menor a 4</font></p></strong> <p>Sus notas corresponden al calculo con examen.</p> <p> Será redirigido al menu principal.</p>',
                    buttons: [{
                      text: 'OK',
                      handler: () => {
                       
                        this.navCntrl.navigateRoot('home');
                      }
                  }]});
                  console.log(this.daexamen);
                  console.log(this.examen);
                  await alert.present();
                 
    
                 
                  
                }
                  else { 
                    let cleanevas =(this.eva1 + this.eva2 + this.eva3 /3);
                    this.promevas = cleanevas;
                    if (this.daexamen == false && this.promevas < 4 ) {

                    const alert = await this.alertCtrl.create({
                      header: 'Sus notas son inválidas para el calculo sin examen',
                      subHeader: '',
                      message: '<strong><p><font color="red">el promedio de sus EVA(s) es menor a 4</font></p></strong><p>Sus notas corresponden al calculo con examen.</p> <p> Será redirigido al menu principal.</p>',
                      buttons: [{
                        text: 'OK',
                        handler: () => {
                         
                          this.navCntrl.navigateRoot('home');
                        }
                    }]});
                    console.log(this.daexamen);
                    console.log(this.examen);
                    await alert.present();
                   
      
                    
                  }
                    else { 
                if (this.daexamen ==true) {

                  let cleano =(this.epe1*0.07) + (this.epe2*0.14) + (this.epe3*0.21)+ (this.eva1*0.07)+ (this.eva2*0.07)+ (this.eva3*0.14)+(this.examen*0.30);
                  this.resultado = cleano;
    
                  this.navCntrl.navigateForward(`/c96r/${this.epe1}/${this.epe2}/${this.epe3}/${this.eva1}/${this.eva2}/${this.eva3}/${this.examen}/${this.resultado}/${this.daexamen}`);             
        
                  
                }else{
                let cleano =(this.epe1*0.10) + (this.epe2*0.20) + (this.epe3*0.30)+ (this.eva1*0.10)+ (this.eva2*0.10)+ (this.eva3*0.20);
              this.resultado = cleano;

              this.navCntrl.navigateForward(`/c96r/${this.epe1}/${this.epe2}/${this.epe3}/${this.eva1}/${this.eva2}/${this.eva3}/${this.examen}/${this.resultado}/${this.daexamen}`);             
        
              
              }
             
      } }
    }
  }
  }
    
  }

  


}
