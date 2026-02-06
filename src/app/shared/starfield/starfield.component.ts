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

  // Responsive configuration based on device
  STAR_COUNT = 200;
  SHOOTING_INTERVAL = 3000; // every 3 seconds
  isMobile = false;
  isTablet = false;

  ngAfterViewInit() {
    // Ensure canvas is rendered before accessing it
    setTimeout(() => {
      try {
        this.detectDeviceType();
        this.initCanvas();
        this.createStars();
        this.animate();
        this.startShootingStars();
      } catch (error) {
        console.error('Starfield initialization error:', error);
      }
    }, 0);
  }

  /**
   * Detect device type and adjust animation settings
   * Mobile devices get reduced animation intensity for better performance
   */
  detectDeviceType() {
    const width = window.innerWidth;
    this.isMobile = width < 768;
    this.isTablet = width >= 768 && width < 1024;
    
    // Reduce star count and shooting star frequency on mobile for performance
    if (this.isMobile) {
      this.STAR_COUNT = 80; // Reduced from 200
      this.SHOOTING_INTERVAL = 5000; // Increased interval (less frequent)
    } else if (this.isTablet) {
      this.STAR_COUNT = 120; // Medium count
      this.SHOOTING_INTERVAL = 4000;
    }
  }

  initCanvas() {
    try {
      const canvas = this.canvasRef?.nativeElement;
      if (!canvas) {
        console.warn('Canvas element not found');
        return;
      }
      
      const context = canvas.getContext('2d', { willReadFrequently: false });
      if (!context) {
        console.error('Could not get canvas 2D context');
        return;
      }
      
      this.ctx = context;
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    } catch (error) {
      console.error('Canvas initialization error:', error);
    }
  }

  createStars() {
    this.stars = [];
    for (let i = 0; i < this.STAR_COUNT; i++) {
      this.stars.push({
        x: Math.random() * window.innerWidth,
        y: Math.random() * window.innerHeight,
        radius: Math.random() * 1.5 + 0.5,
        speed: Math.random() * 0.3 + 0.1,
        color: this.getStarColor(),
        // Reduced twinkle amplitude on mobile devices
        twinkleSpeed: this.isMobile ? 0.01 : 0.02,
        baseOpacity: 0.5 + Math.random() * 0.5,
        opacity: 0.5 + Math.random() * 0.5
      });
    }
  }

  getStarColor() {
    const colors = ['#ffffff', '#c6ff40', '#f56e38'];
    return colors[Math.floor(Math.random() * colors.length)];
  }

  animate = () => {
    try {
      const canvas = this.canvasRef?.nativeElement;
      if (!canvas || !this.ctx) {
        requestAnimationFrame(this.animate);
        return;
      }

      this.ctx.clearRect(0, 0, canvas.width, canvas.height);

      this.drawStars();
      this.drawShootingStars();

      requestAnimationFrame(this.animate);
    } catch (error) {
      console.error('Animation error:', error);
      requestAnimationFrame(this.animate);
    }
  };

  drawStars() {
    this.stars.forEach(star => {
      // Reduced parallax effect on mobile for performance
      const parallaxFactor = this.isMobile ? 0.0002 : 0.0005;
      const dx = (this.mouseX - window.innerWidth / 2) * parallaxFactor;
      const dy = (this.mouseY - window.innerHeight / 2) * parallaxFactor;

      star.y += star.speed;
      if (star.y > window.innerHeight) star.y = 0;

      // Subtle twinkling effect (reduced on mobile)
      star.opacity += (Math.random() - 0.5) * star.twinkleSpeed;
      star.opacity = Math.max(star.baseOpacity * 0.5, Math.min(star.baseOpacity, star.opacity));

      this.ctx.beginPath();
      this.ctx.arc(star.x + dx * 50, star.y + dy * 50, star.radius, 0, Math.PI * 2);
      this.ctx.fillStyle = star.color;
      this.ctx.globalAlpha = star.opacity;
      this.ctx.fill();
      this.ctx.globalAlpha = 1;
    });
  }

  startShootingStars() {
    setInterval(() => {
      this.shootingStars.push({
        x: Math.random() * window.innerWidth,
        y: 0,
        vx: -6,
        vy: 6,
        length: 60,
        life: 80,
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
    // Disable parallax on mobile for performance
    if (!this.isMobile) {
      this.mouseX = e.clientX;
      this.mouseY = e.clientY;
    }
  }

  @HostListener('window:resize')
  onResize() {
    this.detectDeviceType();
    this.initCanvas();
    this.createStars();
    this.shootingStars = []; // Clear shooting stars on resize
  }
}
