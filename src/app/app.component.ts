import { Component, signal } from '@angular/core';
import { productsData } from './Models/proucts.model';
import { ProductsComponent } from "./Components/productsWithSignal/products.component";
import { OtherProductsComponent } from "./Components/productsWithoutSignal/other-products.component";

@Component({
  selector: 'app-root',
  imports: [ProductsComponent, OtherProductsComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  receivedProductData = signal<productsData[]>([])

  receivedOtherProductData: any[] = []

  getFormData(productData: any) {
    this.receivedProductData.update(prev => [...prev, productData])
  }

  getProductData(otherProductData: any) {
    this.receivedOtherProductData.push(otherProductData)
  }
}
