import { Component, OnInit, ViewChild } from '@angular/core';
import { IonList, IonItemSliding, AlertController } from '@ionic/angular';

@Component({
  selector: 'app-generator',
  templateUrl: './generator.page.html',
  styleUrls: ['./generator.page.scss'],
})
export class GeneratorPage implements OnInit {
  @ViewChild('list') listaa: IonList;
  message: any;
  constructor(private alertCtrl: AlertController) { }

  ngOnInit() {
  }
  OnNewPassword(){
    document.getElementById('newPassword').style.display = 'block';
    document.getElementById('newPassword2').style.display = 'block';
  }
  deleteF(slidingItem: IonItemSliding) {
    console.log('Facebook');
    this.message = '¿Estás seguro de eliminar el registro de contraseña <strong>FACEBOOK</strong>?';
    this.alertPanic(this.message);
    slidingItem.closeOpened();
      }
      deleteB(slidingItem: IonItemSliding) {
        console.log('Banco');
        this.message = '¿Estás seguro de eliminar el registro de contraseña <strong>BANCO</strong>?';
        this.alertPanic(this.message);
        slidingItem.closeOpened();
          }
          deleteC(slidingItem: IonItemSliding) {
            console.log('Correo');
            this.message = '¿Estás seguro de eliminar el registro de contraseña <strong>CORREO</strong>?';
            this.alertPanic(this.message);
            slidingItem.closeOpened();
              }
              async alertPanic(message) {
                const alert = await this.alertCtrl.create({
                  cssClass: 'my-custom-class',
                  message: this.message,
                  buttons: [
                    {
                      text: 'CANCELAR',
                      handler: (blah) => {
                        console.log('Boton Cancel');
                      }
                    },
                    {
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

