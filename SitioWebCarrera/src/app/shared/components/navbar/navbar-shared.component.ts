import { Component, HostListener, inject } from '@angular/core';
import { Router, NavigationEnd, RouterModule } from '@angular/router';
import { filter } from 'rxjs/operators';
import { CommonModule } from '@angular/common';
import { TranslationService } from '../../../services/translation.service'; // Ruta desde navbar

@Component({
  selector: 'app-navbar-shared',
  standalone: true,
  imports: [RouterModule, CommonModule],
  templateUrl: './navbar-shared.component.html',
  styleUrls: ['./navbar-shared.component.css']
})
export class NavbarSharedComponent {

  // 🌎 Servicio de traducción
  translationService = inject(TranslationService);

  isScrolled = false;

  constructor(private router: Router) {
    // Cerrar menú al navegar
    this.router.events
      .pipe(filter(event => event instanceof NavigationEnd))
      .subscribe(() => {
        const navbar = document.getElementById('navbarInstitucional');
        if (navbar?.classList.contains('show')) {
          navbar.classList.remove('show');
        }
      });
  }

  // 🌐 Método para cambiar idioma
  cambiarIdioma(lang: string) {
    this.translationService.changeLanguage(lang);
  }

  isActive(path: string): boolean {
    const currentRoute = this.router.url;

    // Lógica especial para el botón de INICIO
    if (path === '/') {
      return (
        currentRoute === '/' ||
        currentRoute.includes('excelecia-academica') ||
        currentRoute.includes('tecnologia-avanzada') ||
        currentRoute.includes('vinculacion-regional')
      );
    }

    return currentRoute === path;
  }

  @HostListener('window:scroll', [])
  onWindowScroll() {
    this.isScrolled = window.scrollY > 20;
  }
}
