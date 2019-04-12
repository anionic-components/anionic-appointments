import { Component } from '@stencil/core';

@Component({
  tag: 'app-home',
  styleUrl: 'app-home.css'
})
export class AppHome {

  private anionChipBarElem: HTMLAnionChipBarElement;
  private ionLabelsInputElem: HTMLIonInputElement;

  componentDidLoad() {

    this.anionChipBarElem = document.querySelector('anion-chip-bar');
    this.ionLabelsInputElem = document.querySelector('#labels-input');
  }

  async handleAddLabelClick() {

    let labelsInputElem = await this.ionLabelsInputElem.getInputElement();
    let chipText = labelsInputElem.value;

    if (labelsInputElem && chipText) {

      this.anionChipBarElem.addChip(chipText);
      console.log("Chip added: ", chipText);  
      this.ionLabelsInputElem.value = null;
      this.ionLabelsInputElem.setFocus();
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
          <ion-label>Appointment labels:</ion-label>
          <ion-input id='labels-input'></ion-input>
          <ion-button onClick={()=>this.handleAddLabelClick()}>
            Add Label
          </ion-button>
        </ion-item>

        <anion-chip-bar />

      </ion-content>
    ];
  }
}
