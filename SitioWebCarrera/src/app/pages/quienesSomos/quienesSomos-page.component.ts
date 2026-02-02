import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  standalone: true,
  imports: [RouterModule],  // 👈 ESTO ES CLAVE
  selector: 'app-quienes-somos',
  templateUrl: './quienesSomos-page.component.html',
  styleUrls: ['./quienesSomos-page.component.css']
})
export class QuienesSomosPageComponent {}
