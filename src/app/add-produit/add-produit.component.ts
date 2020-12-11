import { Component, OnInit } from '@angular/core';
import { Produit } from '../model/produit.model';
import { ProduitService } from '../service/produit.service';

@Component({
  selector: 'app-add-produit',
  templateUrl: './add-produit.component.html',
  styleUrls: ['./add-produit.component.css'],
})
export class AddProduitComponent implements OnInit {
  newProduit = new Produit();
  constructor(private produitService: ProduitService) {}
  addProduit() {
    this.produitService.ajouterProduit(this.newProduit);
  }
  ngOnInit(): void {}
}
