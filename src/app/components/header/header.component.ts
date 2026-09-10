import { Component, HostListener, signal } from '@angular/core';

@Component({
  selector: 'app-header',
  imports: [],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css',
})
export class HeaderComponent {
  protected readonly menuOpen = signal(false);
  protected readonly elevated = signal(false);

  protected toggleMenu(): void { this.menuOpen.update((open) => !open); }
  protected closeMenu(): void { this.menuOpen.set(false); }

  @HostListener('window:scroll')
  protected onScroll(): void { this.elevated.set(window.scrollY > 8); }

  @HostListener('document:keydown.escape')
  protected onEscape(): void { this.closeMenu(); }
}
