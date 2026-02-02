import { Component, signal } from '@angular/core';
import { RouterModule } from '@angular/router';

interface HeroInfo {
  titulo: string;
  subtitulo: string;
  descripcion: string;
}

interface InfoInstitucional {
  texto: string;
}

interface Stat {
  numero: string;
  texto: string;
}

@Component({
  standalone: true,
  imports: [RouterModule],
  selector: 'quienes-somos-page',
  templateUrl: './quienessomos-page.component.html',
  styleUrls: ['./quienessomos-page.component.css']
})
export class QuienesSomosPageComponent {

  // HERO
  public hero = signal<HeroInfo>({
    titulo: '¿Quiénes Somos?',
    subtitulo: 'Formamos líderes en el área de software y hardware',
    descripcion: `Profesionales capaces de diseñar, desarrollar e implementar soluciones tecnológicas
    innovadoras, gestionando proyectos de sistemas de información y participando en
    equipos multidisciplinarios. Cuentan con habilidades en programación, bases de datos,
    redes, desarrollo de software y aplicación de tecnologías emergentes para resolver
    problemáticas reales en organizaciones y en la sociedad.`
  });

  // MISIÓN Y VISIÓN (los dos párrafos)
  public infoInstitucional = signal<InfoInstitucional[]>([
    {
      texto: 'Formar profesionales líderes en el diseño, desarrollo y aplicación de sistemas inteligentes y de software, para satisfacer las necesidades en los sectores público y privado a nivel nacional e internacional, impulsando el desarrollo social mediante una educación integral y multidisciplinaria.'
    },
    {
      texto: 'Consolidarse como una carrera líder en la formación de profesionistas analíticos, con conocimientos sólidos en informática para el desarrollo de sistemas inteligentes y software, que aporten soluciones tecnológicas e innovadoras con reconocimiento nacional e internacional, que contribuyan a mejorar el entorno global e impacten positivamente en el desarrollo de la sociedad.'
    }
  ]);

  // VALORES
  public valores = signal<string[]>([
    'Disciplina y Respeto',
    'Responsabilidad y Tolerancia',
    'Lealtad y Honradez',
    'Honestidad y Solidaridad Social',
    'Excelencia académica',
    'Compromiso social',
    'Innovación y tecnología',
    'Desarrollo sostenible'
  ]);

  // INDICADORES
  public stats = signal<Stat[]>([
    { numero: '23+', texto: 'Años de experiencia' },
    { numero: '863+', texto: 'Estudiantes activos' },
    { numero: '228+', texto: 'Docentes calificados' },
    { numero: '90%', texto: 'Tasa de empleabilidad' }
  ]);

  // CTA
  public cta = signal({
    titulo: 'Conoce el plan de estudios de nuestra carrera',
    descripcion: `Descubre nuestra oferta educativa en el área de tecnologías de la información, donde podrás
    formarte como profesional en Informática o como Ingeniero/a en Desarrollo de Software y Sistemas Inteligentes.
    Ambas carreras están diseñadas para brindarte competencias sólidas en programación, administración de sistemas,
    bases de datos, desarrollo web y móvil, así como el diseño e implementación de soluciones tecnológicas innovadoras
    que responden a las necesidades actuales de la industria y la sociedad.`
  });
}
