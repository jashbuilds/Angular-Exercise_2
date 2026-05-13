import { Component, signal, output } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-products',
  imports: [FormsModule],
  templateUrl: './products.component.html',
  styleUrl: './products.component.css'
})
export class ProductsComponent {
  productsData = signal({
    itemName: '',
    description: '',
    price: null
  })

  userFormData = output<any>()

  isFormValid() {
    return (
      this.productsData().itemName !== '' && this.productsData().description !== '' && this.productsData().price !== null
    )
  }

  onSubmit() {
    this.userFormData.emit(this.productsData())

    this.productsData.set({
      itemName: '',
      description: '',
      price: null
    })
  }

  updateField(field: any, value: any) {
    this.productsData.update(prev => ({ ...prev, [field]: value }))
  }
}
