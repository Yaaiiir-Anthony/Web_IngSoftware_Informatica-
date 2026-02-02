import { Component, HostListener } from '@angular/core';
import { Router, NavigationEnd, RouterModule } from '@angular/router';
import { filter } from 'rxjs/operators';

@Component({
  selector: 'app-navbar-shared',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './navbar-shared.component.html',
  styleUrls: ['./navbar-shared.component.css']
})
export class NavbarSharedComponent {

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

  isActive(path: string): boolean {
    return this.router.url === path;
  }

  @HostListener('window:scroll', [])
  onWindowScroll() {
    this.isScrolled = window.scrollY > 20;
  }
}
