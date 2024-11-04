import { AfterViewInit, Component, OnInit } from '@angular/core';
import { OrderSummaryComponent } from '../../@components/order-summary/order-summary.component';
import { Router, RouterLink } from '@angular/router';
import { NgxSpinnerService } from 'ngx-spinner';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-business-information',
  standalone: true,
  imports: [OrderSummaryComponent, RouterLink, FormsModule, CommonModule],
  templateUrl: './business-information.component.html',
  styleUrl: './business-information.component.scss'
})
export class BusinessInformationComponent implements OnInit, AfterViewInit {
  constructor(private _spinner: NgxSpinnerService,
              private router: Router
  ) {}

  form_details: any;
  form_status: any = false;
  form_touched: any;
  industries: any;
  
  name: any = '';
  email: any = '';
  mobile: any = '';
  industry: any = '';
  role: any = '';
  company_name: any = '';
  background: any = '';
  facebook: any = '';
  instagram: any = '';
  linkedin: any = '';
  other_socials: any = '';
  other_info: any = '';

  ngOnInit(): void {
    this._spinner.show()
    this.industries = ['Apparel', 'Art', 'Beauty', 'Construction & Maintenance', 'Consulting', 'Design', 'Events', 'Food & Beverage', 'Health', 'Marketing', 'Merchandising', 'Real Estate & Properties', 'Travel']
    setTimeout(() => {
      this._spinner.hide();
    }, 500);
  }

  ngAfterViewInit(): void {
    // window.scroll({
    //   top: 0,
    //   left: 0,
    //   behavior: 'smooth'
    // })
  }

  next() {
    var payload = {
      name: this.name,
      email: this.email,
      mobile: this.mobile,
      industry: this.industry,
      role: this.role,
      company_name: this.company_name,
      background: this.background,
      facebook: this.facebook,
      instagram: this.instagram,
      linkedin: this.linkedin,
      other_socials: this.other_socials,
      other_info: this.other_info
    }

    this.form_details = payload;
  }

  check_form($event: any) {
    /**
     * Required Fields: name, email, mobile, industry, role, company_name
     */
    this.form_touched = true;
    this.form_status = $event;
    // console.log('FROM CHILD', this.form_status)
    // console.log('form touched', this.form_status)
  }

  submit() {
    // console.log('FROM CHILD', this.form_status)
    // console.log('form touched', this.form_status)
    this.form_touched = true;
    if(this.name == '' || this.email == '' || this.mobile == '' || this.industry == '' || this.role == '' || this.company_name == '') {
      this.form_status = false;
    }
    else {
      this.form_status = true;
      localStorage.setItem('contact_details', JSON.stringify(this.form_details));
      this.router.navigate(['/pages/info/appointment'], { queryParams: { step: 5 }})
    }
    
  }
}
