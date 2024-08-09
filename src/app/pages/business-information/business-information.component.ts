import { Component } from '@angular/core';
import { OrderSummaryComponent } from '../../@components/order-summary/order-summary.component';

@Component({
  selector: 'app-business-information',
  standalone: true,
  imports: [OrderSummaryComponent],
  templateUrl: './business-information.component.html',
  styleUrl: './business-information.component.scss'
})
export class BusinessInformationComponent {

}
