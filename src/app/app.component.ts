import { Component } from '@angular/core';
import { AboutComponent } from './components/about/about.component';
import { ContactCtaComponent } from './components/contact-cta/contact-cta.component';
import { FooterComponent } from './components/footer/footer.component';
import { HeaderComponent } from './components/header/header.component';
import { HeroComponent } from './components/hero/hero.component';
import { ServicesComponent } from './components/services/services.component';
import { StatsComponent } from './components/stats/stats.component';
import { TeamComponent } from './components/team/team.component';

@Component({
  selector: 'app-root',
  imports: [HeaderComponent, HeroComponent, AboutComponent, ServicesComponent, StatsComponent, TeamComponent, ContactCtaComponent, FooterComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {}
