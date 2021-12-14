
import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../servicios/api/api.service'
import {  Router } from '@angular/router';


import { listaproductosI } from '../../modelos/listaproductos.interface';

import { faEdit, faTrashAlt } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  faEdit = faEdit;
  faTrashAlt = faTrashAlt;
  productos:listaproductosI[] = []


  constructor(private api:ApiService, private router:Router ) { }

  ngOnInit(): void {
    this.api.getAllProducts().subscribe(data => this.productos = data)
  }

  nuevo(){
    window.location.href = '/nuevo'
  }

  editar(product_id:any){
    this.router.navigate(['editar', product_id]);
  }

  borrar(product_id:any){
    this.api.deletePatch(product_id).subscribe(data => {
      console.log(data)
    })
  }
}
