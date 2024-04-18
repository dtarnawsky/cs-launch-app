import { Component } from '@angular/core';
import { IonHeader, IonToolbar, IonTitle, IonContent, IonButton } from '@ionic/angular/standalone';
import { AppLauncher } from '@capacitor/app-launcher';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  standalone: true,
  imports: [IonButton, IonHeader, IonToolbar, IonTitle, IonContent],
})
export class HomePage {
  constructor() { }

  async query(url: string) {
    const { value } = await AppLauncher.canOpenUrl({ url });
    alert(`canOpenUrl returned ${value} for ${url}`)
  }


  async open(url: string) {
    await AppLauncher.openUrl({ url });
  }
}
