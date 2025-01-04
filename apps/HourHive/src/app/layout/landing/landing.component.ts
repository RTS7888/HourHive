import { Component, HostListener, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Route, Router } from '@angular/router';

@Component({
  selector: 'app-landing',
  standalone: true,
  imports: [CommonModule ],
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.css'], // Fixed typo
})
export class LandingComponent implements OnInit {
  curX = 0;
  curY = 0;
  tgX = 0;
  tgY = 0;
  isScrolled: boolean = false;
  constructor(
    private router : Router
  ){}

  ngOnInit(): void {
    this.moveInteractiveBubble();
   
  }

  moveInteractiveBubble() {
    const interactiveBubble = document.querySelector<HTMLDivElement>('.interactive');
    if (!interactiveBubble) return;

    const move = () => {
      this.curX += (this.tgX - this.curX) / 20;
      this.curY += (this.tgY - this.curY) / 20;

      interactiveBubble.style.transform = `translate(${Math.round(this.curX)}px, ${Math.round(this.curY)}px)`;
      requestAnimationFrame(move);
    };

    move();
  }

  @HostListener('window:mousemove', ['$event'])
  onMouseMove(event: MouseEvent) {
    this.tgX = event.clientX;
    this.tgY = event.clientY;
  }

  @HostListener('window:scroll', ['$event'])
  onWindowScroll(): void {
    this.isScrolled = window.scrollY > 50;
  }


  navigateToLogin(){
    this.router.navigateByUrl('login')
  }

 
}
