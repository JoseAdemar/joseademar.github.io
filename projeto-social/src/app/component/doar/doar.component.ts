import { Component } from '@angular/core';

@Component({
  selector: 'app-doar',
  templateUrl: './doar.component.html',
  styleUrls: ['./doar.component.css'],
})
export class DoarComponent {
  mostrar: boolean = false;
  nomeVazio: boolean = true;

  mostrarDivAlert() {
    let estado = document.getElementById('inputState') as HTMLInputElement;
    let escolha = document.getElementById('gridCheck') as HTMLInputElement;
    let data = document.getElementById('date') as HTMLInputElement;
    let id1 = document.getElementById('inputNomeCompleto') as HTMLInputElement;
    let id2 = document.getElementById('inputEmail') as HTMLInputElement;
    let id3 = document.getElementById('inputNumero') as HTMLInputElement;
    let id4 = document.getElementById('inputAddress') as HTMLInputElement;
    let id5 = document.getElementById('cidade') as HTMLInputElement;
    let id6 = document.getElementById('inputZip') as HTMLInputElement;
    if (
      id1.value.trim() === '' ||
      id2.value.trim() === '' ||
      id3.value.trim() === '' ||
      id4.value.trim() === '' ||
      id5.value.trim() === '' ||
      id6.value.trim() === ''
    ) {
      this.mostrar = false;
    } else {
      this.mostrar = true;
      id1.value = '';
      id2.value = '';
      id3.value = '';
      id4.value = '';
      id5.value = '';
      id6.value = '';
      estado.value = '';
      escolha.value = '';
      data.value = '';
      estado.select();
    }
  }
}
