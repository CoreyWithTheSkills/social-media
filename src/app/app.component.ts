import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: []
})


export class AppComponent {


  toggleLightMode(event: Event): void {
    const isChecked = (event.target as HTMLInputElement).checked;
    console.log('Checkbox checked:', isChecked); // Debugging log
    document.body.classList.toggle('light-mode', isChecked); // Add/remove 'light-mode' based on checkbox state
  }
}
