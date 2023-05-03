import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-automovil',
  templateUrl: './automovil.component.html',
  styleUrls: ['./automovil.component.css']
})
export class AutomovilComponent {
  year: number= 0;
  modelo: string = '';
  placa: string = '';
  color: string = '';
  kilometraje: number = 0;

  form: FormGroup;//Reactive Form
  

  constructor(private formBuilder: FormBuilder) {
    this.form = formBuilder.group({
      year: ['', [Validators.required]],
      modelo: ['', [Validators.required ]],
      placa: ['', [Validators.required ]],
      color: ['', [Validators.required]],
      kilometraje: ['', [Validators.required]],
    })
  }

  onSubmit() {
    console.log(this.form);
    if (this.form.valid) {
      alert('Guardado');
    } else {
      alert('Formulario No Valido');
    }
  }

  validateForm() {
    if (this.modelo === '' && this.modelo.length <= 3) {

    }
  }
}
