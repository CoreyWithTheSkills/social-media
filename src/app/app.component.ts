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
    
    // Toggle light-mode on the body
    document.body.classList.toggle('light-mode', isChecked);
  
    // Select all elements with the class 'grid-container-*'
    const gridContainers = document.querySelectorAll(
      '.grid-container-1, .grid-container-2, .grid-container-3, .grid-container-4, .grid-2-container-1'
    );
  
    const gridText = document.querySelectorAll('.biggest-h1,.h2,.first-h1');
    // Loop through and apply the background color logic
    gridContainers.forEach((container) => {
      if (isChecked) {
        (container as HTMLElement).style.backgroundColor = 'hsl(230, 22%, 74%)'; // Light mode color
      } else {
        (container as HTMLElement).style.backgroundColor = 'hsl(228, 28%, 20%)'; // Default dark mode color
      }
    });

    // Loop Through H1s
    gridText.forEach((biggestH1) => {
      if (isChecked) {
        (biggestH1 as HTMLElement).style.color = 'black'; // Light mode color
      } else {
        (biggestH1 as HTMLElement).style.color = 'white'; // Default dark mode color
      }
    });
  }
}
