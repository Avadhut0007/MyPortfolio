import {
  Component,
  ElementRef,
  ViewChild,
  AfterViewInit,
  HostListener
} from '@angular/core';

@Component({
  selector: 'app-starfield',
  templateUrl: './starfield.component.html',
  styleUrls: ['./starfield.component.css']
})
export class StarfieldComponent implements AfterViewInit {

  @ViewChild('canvas') canvasRef!: ElementRef<HTMLCanvasElement>;
  ctx!: CanvasRenderingContext2D;
  stars: any[] = [];
  shootingStars: any[] = [];
  mouseX = 0;
  mouseY = 0;

  STAR_COUNT = 200;
  SHOOTING_INTERVAL = 3000; // every 3 seconds

  ngAfterViewInit() {
    this.initCanvas();
    this.createStars();
    this.animate();
    this.startShootingStars();
  }

  initCanvas() {
    const canvas = this.canvasRef.nativeElement;
    this.ctx = canvas.getContext('2d')!;
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
  }

  createStars() {
    this.stars = [];
    for (let i = 0; i < this.STAR_COUNT; i++) {
      this.stars.push({
        x: Math.random() * window.innerWidth,
        y: Math.random() * window.innerHeight,
        radius: Math.random() * 1.5 + 0.5,
        speed: Math.random() * 0.3 + 0.1,
        color: this.getStarColor()
      });
    }
  }

  getStarColor() {
    const colors = ['#ffffff', '#c6ff40', '#f56e38'];
    return colors[Math.floor(Math.random() * colors.length)];
  }

  animate = () => {
    const canvas = this.canvasRef.nativeElement;
    this.ctx.clearRect(0, 0, canvas.width, canvas.height);

    this.drawStars();
    this.drawShootingStars();

    requestAnimationFrame(this.animate);
  };

  drawStars() {
    this.stars.forEach(star => {
      // mouse parallax
      const dx = (this.mouseX - window.innerWidth / 2) * 0.0005;
      const dy = (this.mouseY - window.innerHeight / 2) * 0.0005;

      star.y += star.speed;
      if (star.y > window.innerHeight) star.y = 0;

      this.ctx.beginPath();
      this.ctx.arc(star.x + dx * 50, star.y + dy * 50, star.radius, 0, Math.PI * 2);
      this.ctx.fillStyle = star.color;
      this.ctx.fill();
    });
  }

  startShootingStars() {
    setInterval(() => {
      this.shootingStars.push({
        x: Math.random() * window.innerWidth,
        y: 0,
        vx: -6, // velocity x (moving left)
        vy: 6,  // velocity y (moving down)
        length: 60,
        life: 80, // frames to live
        opacity: 1
      });
    }, this.SHOOTING_INTERVAL);
  }

  drawShootingStars() {
    this.shootingStars.forEach((star, index) => {
      // Draw the shooting star trail
      this.ctx.beginPath();
      this.ctx.moveTo(star.x, star.y);
      this.ctx.lineTo(star.x + star.vx * 2, star.y + star.vy * 2);
      this.ctx.strokeStyle = `rgba(255, 255, 255, ${star.opacity})`;
      this.ctx.lineWidth = 2;
      this.ctx.stroke();

      // Draw the star head
      this.ctx.beginPath();
      this.ctx.arc(star.x, star.y, 2, 0, Math.PI * 2);
      this.ctx.fillStyle = `rgba(255, 255, 255, ${star.opacity})`;
      this.ctx.fill();

      // Update position
      star.x += star.vx;
      star.y += star.vy;

      // Fade out
      star.opacity -= 0.02;
      star.life--;

      // Remove if off screen or faded out
      if (star.y > window.innerHeight + 50 || star.x < -50 || star.opacity <= 0 || star.life <= 0) {
        this.shootingStars.splice(index, 1);
      }
    });
  }

  @HostListener('mousemove', ['$event'])
  onMouseMove(e: MouseEvent) {
    this.mouseX = e.clientX;
    this.mouseY = e.clientY;
  }

  @HostListener('window:resize')
  onResize() {
    this.initCanvas();
    this.createStars();
    this.shootingStars = []; // Clear shooting stars on resize
  }
}
