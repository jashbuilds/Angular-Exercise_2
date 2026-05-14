import { Component, output } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';

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
      this.productsData.itemName !== '' && this.productsData.description !== '' && this.productsData.price !== null
    )
  }

  onPriceInput(event: any) {
    const input = event.target as HTMLInputElement;
    input.value = input.value.replace(/[^0-9]/g, '');
  }

  productFormData = output<any>()

  onSubmit(form: NgForm) {
    if(form.invalid) return

    this.productFormData.emit(this.productsData)

    this.productsData = {
      itemName: '',
      description: '',
      price: ''
    }
    
    form.reset()
  }
}
