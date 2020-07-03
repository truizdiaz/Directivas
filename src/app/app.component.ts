import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'HolaMundo';
  toogle = true;

  listEstudiantes: any[] = [
    { nombre: 'Lucas Rodriguez', estado: 'No Aprobado' },
    { nombre: 'Maria Funes', estado: 'Aprobado' },
    { nombre: 'Martin Perez', estado: 'No Aprobado' },
    { nombre: 'Carlos Gomez', estado: 'Promocionado' },
    { nombre: 'Juan Garcia', estado: 'No Aprobado' },
  ];

  btnToogle(): void {
    this.toogle = !this.toogle;
  }

}
