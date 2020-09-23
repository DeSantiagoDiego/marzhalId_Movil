import { Component, OnInit } from '@angular/core';
import { AlertController, NavController } from '@ionic/angular';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  usuario: string;
  contrasena: string;
  constructor(private alertCtrl: AlertController, private navCtrl: NavController) { }

  ngOnInit() {
  }
  async Onsubcribe() {
    const alert = await this.alertCtrl.create({
      cssClass: 'my-custom-class',
      message: 'Para hacer uso de este servicio debes adquirir una de nuestras cajas de seguridad en <strong>marzhalhackers.com</strong>',
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

  onGenerator() {
    this.navCtrl.navigateForward('/generator');
  }
}
