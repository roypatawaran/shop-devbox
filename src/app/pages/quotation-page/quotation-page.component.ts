import { Component } from '@angular/core';
import { OrderSummaryComponent } from '../../@components/order-summary/order-summary.component';

@Component({
  selector: 'app-quotation-page',
  standalone: true,
  imports: [OrderSummaryComponent],
  templateUrl: './quotation-page.component.html',
  styleUrl: './quotation-page.component.scss'
})
export class QuotationPageComponent {

}
