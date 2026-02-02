import { Component, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-quienes-somos',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './quienesSomos-page.component.html',
  styleUrls: ['./quienesSomos-page.component.css']
})
export class QuienesSomosPageComponent implements OnInit {

  ngOnInit(): void {
    window.scrollTo(0, 0);
  }

}
