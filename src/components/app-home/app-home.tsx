import { Component } from '@stencil/core';

@Component({
  tag: 'app-home',
  styleUrl: 'app-home.css'
})
export class AppHome {

  private anionChipBarElem: HTMLAnionChipBarElement;
  private ionInputElem: HTMLIonInputElement;

  componentDidLoad() {

    this.anionChipBarElem = document.querySelector('anion-chip-bar');
    this.ionInputElem = document.querySelector('ion-input');
  }

  async handleAddLabelClick() {

    let inputElem = await this.ionInputElem.getInputElement();
    let chipText = inputElem.value;

    if (inputElem && chipText) {

      this.anionChipBarElem.addChip(inputElem.value);
      console.log("Chip added: ", chipText);  
    }
  }

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

        <ion-item>
          <ion-label>Enter appointment labels:</ion-label>
          <ion-input></ion-input>
          <ion-button onClick={()=>this.handleAddLabelClick()}>
            Add Label
          </ion-button>
        </ion-item>

        <anion-chip-bar default-chips="one,two"/>

        <p>There should be a chip bar above this line. Inspect element, and you'll see anionic-chip-bar in the DOM; it's just not displayed.</p>
      </ion-content>
    ];
  }
}
