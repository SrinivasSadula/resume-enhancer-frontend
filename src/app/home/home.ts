import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  imports: [CommonModule],
  templateUrl: './home.html',
  styleUrl: './home.css'
})
export class Home {
   // Declare each animated variable
  animatedUsers: number = 0;
  animatedResumes: number = 0;
  animatedDownloads: number = 0;

  ngOnInit(): void {
    this.animateValue('animatedUsers', 0, 5200, 1000);
    this.animateValue('animatedResumes', 0, 20000, 1000);
    this.animateValue('animatedDownloads', 0, 12500, 1000);
  }

  // Strongly type property to avoid conflict
  animateValue(
    property: 'animatedUsers' | 'animatedResumes' | 'animatedDownloads',
    start: number,
    end: number,
    duration: number
  ): void {
    let startTimestamp: number | null = null;

    const step = (timestamp: number) => {
      if (!startTimestamp) startTimestamp = timestamp;
      const progress = Math.min((timestamp - startTimestamp) / duration, 1);
      this[property] = Math.floor(progress * (end - start) + start);

      if (progress < 1) {
        requestAnimationFrame(step);
      }
    };

    requestAnimationFrame(step);
  }
}