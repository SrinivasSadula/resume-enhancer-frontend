import { Component, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import jsPDF from 'jspdf';

@Component({
  selector: 'app-enhancer',
  standalone: true,
  imports: [
    CommonModule,       // ✅ Needed for *ngIf
    FormsModule,        // ✅ Needed for [(ngModel)]
  ],
  templateUrl: './enhancer.component.html',
  styleUrls: ['./enhancer.component.css'] // Optional, add if you use styles
})
export class EnhancerComponent {
  resumeText = '';
  jobRole = '';
  enhancedText = '';
  private http = inject(HttpClient); // ✅ Proper use inside class context

  enhanceResume() {
    if (!this.resumeText || !this.jobRole) {
      alert('Please enter both resume and job role.');
      return;
    }

    this.http.post<{ result: string }>('https://resume-enhancer-backend-ydor.onrender.com/api/enhance', {
      resume: this.resumeText,
      jobRole: this.jobRole
    }).subscribe({
      next: (res:any) => {
        this.enhancedText = res.result;
      },
      error: (err:any) => {
        console.error('Enhance error:', err);
        alert('Something went wrong while enhancing.');
      }
    });
  }

  downloadPDF() {
    if (!this.enhancedText) {
      alert('Nothing to download. Please enhance first.');
      return;
    }

    const doc = new jsPDF();
    const lines = this.enhancedText.split('\n');
    let y = 10;

    lines.forEach(line => {
      doc.text(line, 10, y);
      y += 10;
    });

    doc.save(`${this.jobRole}-resume.pdf`);
  }
}
