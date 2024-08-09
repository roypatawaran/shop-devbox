import { Component } from '@angular/core';
import { OrderSummaryComponent } from '../../@components/order-summary/order-summary.component';
import { CurrencyPipe } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-domain-selection',
  standalone: true,
  imports: [OrderSummaryComponent, CurrencyPipe, RouterLink],
  templateUrl: './domain-selection.component.html',
  styleUrl: './domain-selection.component.scss'
})
export class DomainSelectionComponent {

}
