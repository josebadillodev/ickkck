import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { NgIf } from '@angular/common';
import { Producto } from '../../models/producto';

@Component({
  selector: 'app-crear-producto',
  standalone: true,
  imports: [RouterLink,ReactiveFormsModule,NgIf],
  templateUrl: './crear-producto.component.html',
  styleUrl: './crear-producto.component.css'
})
export class CrearProductoComponent implements OnInit {
  productoFroms: FormGroup;
  constructor(private fb :  FormBuilder , private routes : Router){
    this.productoFroms = this.fb.group({
      producto:['',Validators.required],
      categoria:['',Validators.required],
      ubicacion:['',Validators.required],
      precio:['',Validators.required]
    })
  }

  agegarProductos(){
    // console.log(this.productoFroms)


    const PRODUCTO: Producto = {
      nombre: this.productoFroms.get('producto')?.value,
      categoria: this.productoFroms.get('categoria')?.value,
      ubicacion: this.productoFroms.get('ubicacion')?.value,
      precio: this.productoFroms.get('precio')?.value,
    }
    console.log(PRODUCTO)
    this.routes.navigate(['/']);
  }


ngOnInit(): void {

}
}
