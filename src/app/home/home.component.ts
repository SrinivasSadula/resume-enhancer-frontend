import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule],
  template: `<h1>Welcome to Resume Enhancer!</h1><p>Use the Enhancer tool to improve your resume.</p>`,
})
export class HomeComponent {}
