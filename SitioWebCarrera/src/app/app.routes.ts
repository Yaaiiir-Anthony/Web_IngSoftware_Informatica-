import { Routes } from '@angular/router';
<<<<<<< Updated upstream
// Importamos SOLO el inicio para que cargue rápido al entrar
import { InicioPageComponent } from './pages/inicio/inicio-pages.component';

export const routes: Routes = [
=======
<<<<<<< HEAD
import { InicioPageComponent } from './pages/inicio/inicio-pages.component';
import { QuienesSomosPageComponent } from './pages/quienesSomos/quienesSomos-page.component';
import { PlanEstudiosPageComponent } from './pages/planEstudio/PlanEstudio-page.component';
import { ProyectoPageComponent } from './pages/proyectos/proyectos-page.component';
import { DocentesPageComponent } from './pages/docentes/docentes-pages.component';
import { AspirantesPageComponent } from './pages/aspirantes/aspirantes-pages.component';

// Importamos los componentes nuevos
import { ExcelenciaComponent } from './pages/inicio/excelencia/excelencia.component';
import { TecnologiaComponent } from './pages/inicio/tecnologia/tecnologia.component';
import { VinculacionComponent } from './pages/inicio/vinculacion/vinculacion.component'; // 👈 NUEVO

export const routes: Routes = [
  { path: '', component: InicioPageComponent },
  { path: 'quienesSomos', component: QuienesSomosPageComponent },
  { path: 'planEstudios', component: PlanEstudiosPageComponent },
  { path: 'proyectos', component: ProyectoPageComponent },
  { path: 'docentes', component: DocentesPageComponent },
  { path: 'aspirantes', component: AspirantesPageComponent },

  // Rutas de las tarjetas del inicio
  { path: 'excelencia-academica', component: ExcelenciaComponent },
  { path: 'tecnologia-avanzada', component: TecnologiaComponent },
  { path: 'vinculacion-regional', component: VinculacionComponent }, // 👈 NUEVA RUTA

  { path: '**', redirectTo: '' }
=======
// Importamos SOLO el inicio para que cargue rápido al entrar
import { InicioPageComponent } from './pages/inicio/inicio-pages.component';

export const routes: Routes = [
>>>>>>> Stashed changes
  {
    path: '',
    component: InicioPageComponent
  },
  {
    path: 'quienesSomos',
    // Aquí empieza la magia del Lazy Loading
    loadComponent: () => import('./pages/quienesSomos/quienesSomos-page.component')
      .then(m => m.QuienesSomosPageComponent)
  },
  {
    path: 'planEstudios',
    loadComponent: () => import('./pages/planEstudio/PlanEstudio-page.component')
      .then(m => m.PlanEstudiosPageComponent)
  },
  {
    path: 'proyectos',
    loadComponent: () => import('./pages/proyectos/proyectos-page.component')
      .then(m => m.ProyectoPageComponent)
  },
  {
    path: 'docentes',
    loadComponent: () => import('./pages/docentes/docentes-pages.component')
      .then(m => m.DocentesPageComponent)
  },
  {
    path: 'aspirantes',
    loadComponent: () => import('./pages/aspirantes/aspirantes-pages.component')
      .then(m => m.AspirantesPageComponent)
  },
  {
    path: '**',
    redirectTo: ''
  }
<<<<<<< Updated upstream
=======
>>>>>>> aa27c8fbcd9c8e07324b2f1a819034c201f31d01
>>>>>>> Stashed changes
];
