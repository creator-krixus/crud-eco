import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute} from '@angular/router'
import { productI } from '../../modelos/product.interface'
import { ApiService } from 'src/app/servicios/api/api.service';

@Component({
  selector: 'app-editar',
  templateUrl: './editar.component.html',
  styleUrls: ['./editar.component.css']
})
export class EditarComponent implements OnInit {
  datosProducto:productI = {}

  editarProducto = new FormGroup({
    nombre: new FormControl('', Validators.required),
    categoria: new FormControl('', Validators.required),
    sabor: new FormControl('', Validators.required),
    precio: new FormControl('', Validators.required),
    estado: new FormControl('', Validators.required),
    _id: new FormControl('', Validators.required),
  })
  constructor(private activerouter:ActivatedRoute, private router:Router, private api:ApiService) { }

  ngOnInit(): void {
    let product = this.activerouter.snapshot.paramMap.get('id')
    this.api.getSingleProduct(product).subscribe(data => {
      this.datosProducto = data
      this.editarProducto.setValue({
        nombre: this.datosProducto.nombre,
        categoria: this.datosProducto.categoria,
        sabor: this.datosProducto.sabor,
        precio: this.datosProducto.precio,
        estado: this.datosProducto.estado,
        _id: this.datosProducto._id
      })
    })
  }

  onSave(form:productI){
    let id = this.datosProducto._id
    this.api.putSingleProduct(id,form).subscribe(data => {
    window.location.href = '/dashboard'
    })
  }

}
