import { Component, output } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-other-products',
  imports: [FormsModule],
  templateUrl: './other-products.component.html',
  styleUrl: './other-products.component.css'
})
export class OtherProductsComponent {

  productsData = {
    itemName: '',
    description: '',
    price: ''
  }

  isFormValid() {
    return (
      this.productsData.itemName !== '' && this.productsData.description !== '' && this.productsData.price !== ''
    )
  }

  productFormData = output<any>()

  onSubmit() {
    this.productFormData.emit(this.productsData)

    this.productsData = {
      itemName: '',
      description: '',
      price: ''
    }
    
  }
}
