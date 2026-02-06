import { Injectable , signal , inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable ({
providedIn : 'root'
})
 export class TranslationService {
 public http = inject ( HttpClient );

 // Signal del idioma actual
 currentLang = signal < string >( 'es ');

 // Signal con la data cruda del JSON
 public translationsData = signal <any >({}) ;

 constructor () {
 this . loadTranslations ('es ');

 }

 changeLanguage ( lang : string ) {
 this . currentLang .set( lang );
 this . loadTranslations ( lang );
 }

 public loadTranslations ( lang : string ) {
 this . http .get(' assets / i18n /${ lang }. json '). subscribe ({
 next : ( data ) => this . translationsData .set( data ),
 error : () => console . error (' Error cargando idioma : ${ lang }')
 });
 }

 // FUNCIÓN CLAVE : Traduce buscando la ruta " HOME . TITLE " dentro del JSON
 translate (key: string ): string {
 const data = this . translationsData ();
 // Reduce recorre el objeto : data [’ HOME ’] -> data [’ TITLE ’]
 return key. split ('.'). reduce ((o, i) => o ? o[i] : null , data ) || key;
 }
 }
