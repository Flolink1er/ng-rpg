import { Component, ElementRef, inject, signal, ViewChild } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ThemeService } from './services/theme.service';
import { Subscription } from 'rxjs';
import { Random } from './services/random.service';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected readonly title = signal('ng-rpg');
  @ViewChild('canvasBg', { static: true })
  canvasRef!: ElementRef<HTMLCanvasElement>;

  particles: any[] = [];
  mouse = { x: 0, y: 0 };
  currentTheme = 'Default';
  subscription!: Subscription;
  randomService = inject(Random);

  constructor(private themeService: ThemeService){
  }

  ngAfterViewInit() {
    this.subscription = this.themeService.theme$.subscribe(theme => {
      this.currentTheme = theme;
      this.particles.forEach((p, i) => {
        setTimeout(() => {
          p.color = this.getThemeColor();
        }, i * 5);
      });
      this.updateBackground(theme);
    });

    const canvas = document.getElementById('magic-bg') as HTMLCanvasElement;
    const ctx = canvas.getContext('2d')!;

    if (!ctx) return;

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    resize();

    window.addEventListener('mousemove', (e) => {
      this.mouse.x = e.clientX;
      this.mouse.y = e.clientY;
    });

    const themeColors: any = {
      Default: [
        "rgba(0, 229, 255, 0.6)",
        "rgba(124, 58, 237, 0.6)"
      ],
      Mage: [
        "rgba(242, 0, 255, 0.6)",
        "rgba(165, 58, 237, 0.6)"
      ],
      warrior: [
        "rgba(249, 45, 22, 0.6)",
        "rgba(220, 38, 38, 0.6)"
      ],
      Rogue: [
        "rgba(34, 197, 94, 0.6)",
        "rgba(74, 222, 128, 0.6)"
      ]
    };

    const getRandomColor = () => {
      const colors = themeColors[this.currentTheme];
      return colors[Math.floor(Math.random() * colors.length)];
    };

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    for (let i = 0; i < 80; i++) {
      this.particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        radius: Math.random() * 4 + 2,
        speed: Math.random() * 0.4 + 0.1,
        color: getRandomColor()
      });
    }

    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      this.particles.forEach(p => {
        const dx = this.mouse.x - p.x;
        const dy = this.mouse.y - p.y;
        const dist = Math.sqrt(dx * dx + dy * dy);

        if (dist < 120) {
          p.x -= dx * 0.01;
          p.y -= dy * 0.01;
        }

        p.y -= p.speed;
        if (p.y < 0) p.y = canvas.height;

        ctx.globalAlpha = 0.2;
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.radius * 2, 0, Math.PI * 2);
        ctx.fillStyle = p.color;
        ctx.fill();

        ctx.shadowBlur = 20;
        ctx.shadowColor = p.color;

        ctx.beginPath();
        ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);

        ctx.fillStyle = p.color;
        ctx.fill();
      });

      ctx.shadowBlur = 0;
      requestAnimationFrame(draw);
    }

    draw();

    window.addEventListener('resize', () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    });
  }

  public setTheme(classe: string) {
    this.currentTheme = classe;

    // met à jour les couleurs existantes
    this.particles.forEach(p => {
      p.color = this.getThemeColor();
    });
  }

  getThemeColor() {
    const themeColors: any = {
      Default: ["rgba(0,229,255,0.3)", "rgba(124,58,237,0.3)"],
      Mage: ["rgba(242, 0, 255, 0.3)", "rgba(165, 58, 237, 0.3)"],
      Warrior: ["rgba(249,115,22,0.3)", "rgba(220,38,38,0.3)"],
      Rogue: ["rgba(34,197,94,0.3)", "rgba(74,222,128,0.3)"]
    };

    const colors = themeColors[this.currentTheme];
    return colors[Math.floor(Math.random() * colors.length)];
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

  updateBackground(theme: string) {
  const root = document.documentElement;

  const themes: any = {
    Default: {
      main: "#0b0f1a",
      secondary: "#111827",
      accent: "rgba(0, 229, 255, 0.12)"
    },
    Mage: {
      main: "#1a0b1a",
      secondary: "#221127",
      accent: "rgba(255, 0, 251, 0.12)"
    },
    Warrior: {
      main: "#1a0b0b",
      secondary: "#2a0f0f",
      accent: "rgba(249, 22, 22, 0.15)"
    },
    Rogue: {
      main: "#07130a",
      secondary: "#0f1f14",
      accent: "rgba(34, 197, 94, 0.15)"
    }
  };

  const t = themes[theme];

  root.style.setProperty('--bg-main', t.main);
  root.style.setProperty('--bg-secondary', t.secondary);
  root.style.setProperty('--bg-accent', t.accent);
}

}
