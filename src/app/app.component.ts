import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: []
})
export class AppComponent implements OnInit {
  ngOnInit(): void {
    // Set the default mode to dark mode on app initialization
    document.body.classList.add('dark-mode');
  }

  toggleLightMode(event: Event): void {
    const isChecked = (event.target as HTMLInputElement).checked;
    console.log('Checkbox checked:', isChecked); // Debugging log

    // Toggle class for the body
    if (isChecked) {
      document.body.classList.add('light-mode');
      document.body.classList.remove('dark-mode');
    } else {
      document.body.classList.add('dark-mode');
      document.body.classList.remove('light-mode');
    }

    // Select all elements with the class 'grid-container-*'
    const gridContainers = document.querySelectorAll(
      '.grid-container-1, .grid-container-2, .grid-container-3, .grid-container-4, .grid-2-container-1'
    );
    const gridText = document.querySelectorAll('.biggest-h1, .h2, .first-h1, .h1-middle');
    const darkModeContainer = document.querySelectorAll('.dark-mode-container, .top-container');

    // Loop through and apply the background color logic
    gridContainers.forEach((container) => {
      (container as HTMLElement).style.backgroundColor = isChecked
        ? 'hsl(225, 100%, 98%)' // Light mode color
        : 'hsl(228, 28%, 20%)'; // Default dark mode color
    });

    // Loop through H1 elements and apply color logic
    gridText.forEach((biggestH1) => {
      (biggestH1 as HTMLElement).style.color = isChecked
        ? 'black' // Light mode text color
        : 'white'; // Default dark mode text color
    });

    // Loop through dark mode containers and apply background color logic
    darkModeContainer.forEach((darkContainer) => {
      (darkContainer as HTMLElement).style.backgroundColor = isChecked
        ? 'white' // Light mode background color
        : 'hsl(230, 17%, 14%)'; // Default dark mode background color
    });
  }
}
