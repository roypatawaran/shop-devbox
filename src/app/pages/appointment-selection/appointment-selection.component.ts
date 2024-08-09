import { Component } from '@angular/core';
import { OrderSummaryComponent } from '../../@components/order-summary/order-summary.component';

@Component({
  selector: 'app-appointment-selection',
  standalone: true,
  imports: [OrderSummaryComponent],
  templateUrl: './appointment-selection.component.html',
  styleUrl: './appointment-selection.component.scss'
})
export class AppointmentSelectionComponent {

}
