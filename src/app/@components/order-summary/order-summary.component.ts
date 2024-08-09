import { CurrencyPipe, NgClass, NgIf } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';

@Component({
  selector: 'app-order-summary',
  standalone: true,
  imports: [CurrencyPipe, RouterLink, NgIf, NgClass],
  templateUrl: './order-summary.component.html',
  styleUrl: './order-summary.component.scss'
})
export class OrderSummaryComponent implements OnInit {
  step: any;
  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.getParams();
  }

  getParams() {
    this.route.queryParamMap
      .subscribe((q: any) => {
        this.step = q['params'].step;
        console.log("***", this.step);
      })
  }
}
