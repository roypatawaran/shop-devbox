import { Component } from '@angular/core';
import { OrderSummaryComponent } from '../../@components/order-summary/order-summary.component';
import { CurrencyPipe } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-add-on-selection',
  standalone: true,
  imports: [OrderSummaryComponent, CurrencyPipe, RouterLink],
  templateUrl: './add-on-selection.component.html',
  styleUrl: './add-on-selection.component.scss'
})
export class AddOnSelectionComponent {

}
