import { Component, Inject, OnInit } from '@angular/core';
import { OrderSummaryComponent } from '../../@components/order-summary/order-summary.component';
import { DatePipe, DOCUMENT } from '@angular/common';
import { NgxSpinnerService } from 'ngx-spinner';
import { Router } from '@angular/router';
import moment from 'moment';

@Component({
  selector: 'app-quotation-page',
  standalone: true,
  imports: [OrderSummaryComponent, DatePipe],
  templateUrl: './quotation-page.component.html',
  styleUrl: './quotation-page.component.scss'
})
export class QuotationPageComponent implements OnInit {
  addons: any;
  client: any;
  domain: any;
  template: any;
  appointment_date: any;
  appointment_notes: any;

  constructor(@Inject(DOCUMENT) private document: Document, private _spinner: NgxSpinnerService, private router: Router) {
    const localStorage = document.defaultView?.localStorage;
    if(localStorage) {
      this.addons = JSON.parse(localStorage.getItem("addons") || '{}');
      this.client = JSON.parse(localStorage.getItem("contact_details") || '{}');
      this.domain = JSON.parse(localStorage.getItem("domain") || '{}');
      this.template = JSON.parse(localStorage.getItem("template") || '{}');
      this.appointment_date = moment(localStorage.getItem("appointment_date"), 'YYYY-MM-DD');
      this.appointment_notes = localStorage.getItem("appointment_notes");
    }
  }

  ngOnInit(): void {
    this._spinner.show();
    setTimeout(() => {
      this._spinner.hide();
    }, 500);
  }

  returnHome() {
    this.router.navigate(['/pages/template/selection'])
  }
}
