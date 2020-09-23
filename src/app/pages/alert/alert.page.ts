import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-alert',
  templateUrl: './alert.page.html',
  styleUrls: ['./alert.page.scss'],
})
export class AlertPage implements OnInit {

  constructor(private alertCtrl: AlertController) { }

  ngOnInit() {
  }
  async alertPanic() {
    const alert = await this.alertCtrl.create({
      cssClass: 'my-custom-class',
      header: 'ALERTA ENVIADA',
      message: 'En breve recibirás apoyo por parte de nuestro equipo',
      buttons: [ {
          text: 'ACEPTAR',
          handler: (blah) => {
            console.log('Boton OK');
          }
        }
      ]
    });

    await alert.present();
  }
}
