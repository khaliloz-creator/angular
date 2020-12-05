import { Component, OnInit } from '@angular/core';
import{Produit} from '../model/produit.model';
import { ProduitService } from '../service/produit.service';


export class ProduitsComponent implements OnInit {

  produits :Produit[]; 
  
  constructor( private produitService: ProduitService ) { 
    this.produits = produitService.listeProduits();

        
  }

  ngOnInit(): void {
  }

}
