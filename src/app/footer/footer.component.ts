import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';  // Solo FormsModule es necesario

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [CommonModule, FormsModule],  // Asegúrate de agregar FormsModule aquí
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.sass']
})
export class FooterComponent {
  // Creamos un objeto con las propiedades del formulario
  formularioContacto = {
    nombre: '',
    apellido: '',
    email: '',
    edad: null
  };

  // Creamos un objeto para almacenar los mensajes de error
  errores = {
    nombre: '',
    apellido: '',
    email: '',
    edad: ''
  };

  // Método para validar el formulario
  validarFormulario() {
    let esValido = true;

    // Validación para el campo "nombre"
    if (!this.formularioContacto.nombre || this.formularioContacto.nombre.length < 2) {
      this.errores.nombre = 'El nombre es obligatorio y debe tener al menos 2 caracteres.';
      esValido = false;
    } else {
      this.errores.nombre = '';
    }

    // Validación para el campo "apellido"
    if (!this.formularioContacto.apellido || this.formularioContacto.apellido.length < 2) {
      this.errores.apellido = 'El apellido es obligatorio y debe tener al menos 2 caracteres.';
      esValido = false;
    } else {
      this.errores.apellido = '';
    }

    // Validación para el campo "email"
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    if (!this.formularioContacto.email || !emailRegex.test(this.formularioContacto.email)) {
      this.errores.email = 'El email es obligatorio y debe ser válido.';
      esValido = false;
    } else {
      this.errores.email = '';
    }

    // Validación para el campo "edad"
    if (!this.formularioContacto.edad || this.formularioContacto.edad < 18) {
      this.errores.edad = 'La edad es obligatoria y debe ser al menos 18.';
      esValido = false;
    } else {
      this.errores.edad = '';
    }

    return esValido;
  }

  // Método para enviar el formulario
  enviarFormulario() {
    const formularioValido = this.validarFormulario();
  
    if (formularioValido) {
      console.log('Formulario enviado', this.formularioContacto);
      alert('Formulario enviado');
  
      // Limpiar las casillas del formulario
      this.formularioContacto = {
        nombre: '',
        apellido: '',
        email: '',
        edad: null
      };
  
      // Limpiar los errores
      this.errores = {
        nombre: '',
        apellido: '',
        email: '',
        edad: ''
      };
    } else {
      console.log('Formulario con errores', this.errores);
    }
  }
  
}
