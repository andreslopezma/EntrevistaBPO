import { Component, OnInit } from '@angular/core';
import { PersonalService } from '../../servicios/personal.service';
import { NgForm } from '@angular/forms';
import { Personal } from 'src/app/modelos/personal';
import { Fotos } from 'src/app/modelos/fotos';
import { connectableObservableDescriptor } from 'rxjs/internal/observable/ConnectableObservable';

declare var M: any;
@Component({
  selector: 'app-personal',
  templateUrl: './personal.component.html',
  styleUrls: ['./personal.component.css'],
  providers: [PersonalService]
})
export class PersonalComponent implements OnInit {

  constructor( public personalService: PersonalService ) {
   }

  ngOnInit(): void {
    document.addEventListener('DOMContentLoaded', function() {
      var elems = document.querySelectorAll('.datepicker');
      var instances = M.Datepicker.init(elems, Option);
    });
    document.addEventListener('DOMContentLoaded', function() {
      var elems = document.querySelectorAll('.timepicker');
      var instances = M.Timepicker.init(elems, Option);
    });
    this.traerEmpleados();
    this.traerDatos();
  }
  agregarEmpleado( empleado: NgForm ) {
    console.log(empleado.value);
    /*this.personalService.postEmpleoyee(empleado.value)
      .subscribe(res => {
        // sirve para saber que es lo que retorna el servidor
        console.log(res);
        empleado.reset();
        this.traerEmpleados();
        M.toast({html: 'Empleado guardados satisfactoriamente'});
      });*/
  }
  traerEmpleados() {
    this.personalService.getEmpleoyes()
    .subscribe( res => {
      this.personalService.arrayEmpleados = res as Personal[];
    });
  }
  traerDatos() {
    this.personalService.traerDatosApi()
    .subscribe(data => {
      // console.log(data);
      this.personalService.arrayFotos = data as Fotos[];
      console.log(this.personalService.arrayFotos);
    });
  }
}
