import { Component } from '@stencil/core';

@Component({
  tag: 'app-home',
  styleUrl: 'app-home.css'
})
export class AppHome {

  render() {
    return [
      <ion-header>
        <ion-toolbar color="primary">
          <ion-title>Anionic Appointments</ion-title>
        </ion-toolbar>
      </ion-header>,

      <ion-content padding>
        <p>
          This is a sample application, showing possible usage of Ionic and Anionic components. 
        </p>

        <anionic-chip-bar default-chips="one,two"/>

        <p>There should be a chip bar above this line.</p>
      </ion-content>
    ];
  }
}
