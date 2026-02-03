import { Injectable, signal, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class TranslationService {
  private http = inject(HttpClient);

  // Signal del idioma actual
  currentLang = signal<string>('es');

  // Signal con los datos del JSON
  private translationsData = signal<any>({});

  constructor() {
    this.loadTranslations('es');
  }

  changeLanguage(lang: string) {
    this.currentLang.set(lang);
    this.loadTranslations(lang);
  }

  private loadTranslations(lang: string) {
    this.http.get(`assets/i18n/${lang}.json`).subscribe({
      next: (data) => this.translationsData.set(data),
      error: () => console.error(`Error cargando idioma: ${lang}`)
    });
  }

  // Traduce una clave anidada como "HOME.HERO.TITLE"
  translate(key: string): string {
    const data = this.translationsData();
    const result = key.split('.').reduce((o, i) => o ? o[i] : null, data);
    return result || key; // Si no encuentra, devuelve la clave
  }
}
