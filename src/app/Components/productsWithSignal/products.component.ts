import { Component, signal, output } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';

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
    price: null as string | null
  })

  userFormData = output<any>()

  isFormValid() {
    return (
      this.productsData().itemName !== '' && this.productsData().description !== '' && this.productsData().price !== null
    )
  }

  onPriceInput(value: any) {
    this.productsData.update(data => ({
      ...data,
      price: value.replace(/[^0-9]/g, '')
    }))
  }

  onSubmit(form: NgForm) {
    if (form.invalid) return

    this.userFormData.emit(this.productsData())

    this.productsData.set({
      itemName: '',
      description: '',
      price: null
    })
    form.reset()
  }

  updateField(field: any, value: any) {
    this.productsData.update(prev => ({ ...prev, [field]: value }))
  }
}
