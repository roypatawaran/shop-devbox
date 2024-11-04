import { CurrencyPipe, NgClass, NgIf } from '@angular/common';
import { Component, EventEmitter, Input, input, OnInit, Output } from '@angular/core';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-order-summary',
  standalone: true,
  imports: [CurrencyPipe, RouterLink, NgIf, NgClass],
  templateUrl: './order-summary.component.html',
  styleUrl: './order-summary.component.scss'
})
export class OrderSummaryComponent implements OnInit {
  step: any;
  
  @Input() business_details: any = []
  @Output() check_form = new EventEmitter<boolean>();

  constructor(private route: ActivatedRoute,
              private router: Router
  ) {}


  ngOnInit(): void {
    this.getParams();
    this.business_details = {
      name: '',
      email: '',
      mobile: '',
      industry: '',
      role: '',
      company_name: '',
    }
  }

  getParams() {
    this.route.queryParamMap
    .subscribe((q: any) => {
      this.step = q['params'].step;
    })
  }

  submitBusinessDetails(){
    /**
     * Required Fields: name, email, mobile, industry, role, company_name
     */
    if(this.business_details.name == '' || this.business_details.email == '' || this.business_details.mobile == '' || this.business_details.industry == '' || this.business_details.role == '' || this.business_details.company_name == '') {
      this.check_form.emit(false);
    } else {
      this.check_form.emit(true);
      localStorage.setItem('contact_details', JSON.stringify(this.business_details));
      this.router.navigate(['/pages/info/appointment'], { queryParams: { step: 5 }})
    }
    
  }
}
