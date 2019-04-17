import { Component, OnInit } from '@angular/core';

import { ToastController} from '@ionic/angular';
import { async } from '@angular/core/testing';

import { NavController} from '@ionic/angular'

import { ActivatedRoute} from '@angular/router'

import { DecimalPipe } from '@angular/common';

@Component({
  selector: 'app-c32r',
  templateUrl: './c32r.page.html',
  styleUrls: ['./c32r.page.scss'],
})
export class C32rPage implements OnInit {
  
    constructor(public toastctrl : ToastController, public navCntrl : NavController, public ActivatedRoute: ActivatedRoute, private decimalPipe: DecimalPipe) {}
  
   
  
    epe1 : any;
    epe2: any;
    epe3 : any;
  
    eva1: any;
    eva2: any;
    examen: any;
  
    resultado: any;
  
    prom7: any;
    
    cleann: any;
    daexamen: any; //true = examen // false = SI examen
    
  
    verhome(){
          
      this.navCntrl.navigateForward('home');
  
       
     }
  
  
     popView(){
      this.navCntrl.navigateRoot('c32');
    }
  
    ngOnInit() {
  
      
  
      this.epe1 = this.ActivatedRoute.snapshot.paramMap.get('epe1');
      this.epe2 = this.ActivatedRoute.snapshot.paramMap.get('epe2');
      this.epe3 = this.ActivatedRoute.snapshot.paramMap.get('epe3');
  
  
      
      this.eva1 = this.ActivatedRoute.snapshot.paramMap.get('eva1');
      this.eva2 = this.ActivatedRoute.snapshot.paramMap.get('eva2');
  
      this.examen = this.ActivatedRoute.snapshot.paramMap.get('examen');
  
      this.resultado = this.ActivatedRoute.snapshot.paramMap.get('resultado');
  
      this.daexamen = this.ActivatedRoute.snapshot.paramMap.get('daexamen');
  
      this.cleann = this.decimalPipe.transform(this.resultado, '1.2-3');
  
      if(this.daexamen == "false"){
  
        document.getElementById("daexamen").innerHTML = "";
      }
  
      //en caso de que sea SIN examen
      if (this.cleann > 6.9 && this.daexamen =="false") {
  
      this.prom7 = 'assets/img/b.gif'
  
      console.log(this.daexamen);
      console.log(this.cleann);
  
      }else{
        if (this.cleann >= 5.5 && this.daexamen =="false") {
  
          this.prom7 = 'assets/img/a.jpg'
      
          console.log(this.cleann);
          console.log(this.daexamen);
          
      
          }else{
            if (this.cleann < 5.5 && this.daexamen =="false") {
  
              this.prom7 = 'assets/img/d.jpg'
              document.getElementById("fail").innerHTML = "<strong><ion-label color='danger'>Debes Dar Examen</ion-label></strong>";
            }
          }
  
      }
  
      //imagenes en caso de que sea con examen
      if (this.cleann > 6.9 && this.daexamen =="true") {
  
        this.prom7 = 'assets/img/b.gif'
    
        console.log(this.cleann);
        console.log(this.daexamen);
    
        }else{
          if (this.cleann >= 4 && this.daexamen =="true") {
    
            this.prom7 = 'assets/img/a.jpg'
        
          
            console.log(this.cleann);
            console.log(this.daexamen);
            }else{
              if (this.cleann <= 4 && this.daexamen =="true") {
  
                this.prom7 = 'assets/img/d.jpg'
              }
    
              
            }
    
        }
  
  
    }
  
  
  }
