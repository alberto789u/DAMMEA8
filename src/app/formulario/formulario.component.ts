import { Component, EventEmitter, Input, Output } from '@angular/core';
@Component({
selector: 'app-formulario',
templateUrl: './formulario.component.html',
styleUrls: ['./formulario.component.css'],
})
export class FormularioComponent {
// Datos recibidos desde el componente padre
@Input() userData = {
nombre: '',
email: '',
aceptaTerminos: false,
};
// Evento para enviar datos al componente padre
@Output() onRegister = new EventEmitter<any>();
// Función para enviar el formulario
enviarFormulario() {
}
}