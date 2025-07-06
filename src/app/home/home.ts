import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  imports: [CommonModule],
  templateUrl: './home.html',
  styleUrl: './home.css'
})
export class Home {
    stats = [
    { title: 'Total Users', value: '5,200+', delta: '+3.1%' },
    { title: 'Resumes Built', value: '20,000+', delta: '+12.6%' },
    { title: 'Downloads', value: '12,500+', delta: '+5.3%' },
    { title: 'Avg Rating', value: '4.8 ★', delta: 'from 1,420 users' }
  ];
start(){
  console.log('start')
}
}
