import { Component, OnInit } from '@angular/core';
import { Persona } from '../../model/persona';

@Component({
  selector: 'app-persona',
  templateUrl: './persona.component.html',
  styleUrls: ['./persona.component.css']
})
export class PersonaComponent implements OnInit {
  persona:Persona[];
  
  constructor() {
    this.persona = [{
      edad: 25,
      sexo: 'Masculino',
      nombre: 'Marcos',
      apellido: 'Rodriguez'
    }]}
    
  ngOnInit(): void {
      }

}
