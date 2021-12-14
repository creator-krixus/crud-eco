import { Component, OnInit } from '@angular/core';
import {FormGroup, FormControl, Validators} from '@angular/forms'
import { ApiService } from '../../servicios/api/api.service'

@Component({
  selector: 'app-nuevo',
  templateUrl: './nuevo.component.html',
  styleUrls: ['./nuevo.component.css']
})
export class NuevoComponent implements OnInit {

  productForm = new FormGroup({
    nombre: new FormControl('', Validators.required),
    categoria: new FormControl('', Validators.required),
    sabor: new FormControl('', Validators.required),
    precio: new FormControl('', Validators.required)
  })

  constructor(private api:ApiService) { }

  ngOnInit(): void {
  }

  onSave(){
    this.api.createNewProduct(this.productForm.value).subscribe(data => {
      if(data){
        console.log(data)
      }
      if(data.message.code === 11000){
        alert('Este nombre de producto ya existe')
      }
    })
  }
}
