import { AfterViewInit, Component } from '@angular/core';
import { OrderSummaryComponent } from '../../@components/order-summary/order-summary.component';
import { CommonModule, CurrencyPipe } from '@angular/common';
import { Router, RouterLink } from '@angular/router';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-domain-search',
  standalone: true,
  imports: [OrderSummaryComponent, CurrencyPipe, RouterLink, FormsModule, CommonModule],
  templateUrl: './domain-search.component.html',
  styleUrl: './domain-search.component.scss'
})
export class DomainSearchComponent implements AfterViewInit {
  selectDomain: boolean = false;
  domain_name: any;
  form_touched: any;

  constructor(private router: Router) {}

  ngAfterViewInit(): void {
    // window.scroll({
    //   top: 0,
    //   left: 0,
    //   behavior: 'smooth'
    // })
  }

  toggleDomain() {
    this.form_touched = true;
    // console.log(this.domain_name)
    // this.selectDomain = !this.selectDomain;
    if(this.domain_name) {
      this.router.navigate(['/pages/domain/selection'], { queryParams: {domain: this.domain_name, step: 2}})
    }
    
  }
  chooseDomain(domain: any){
    localStorage.setItem('domain', JSON.stringify(domain));
    this.router.navigate(['/pages/addon/selection'], { queryParams: { step: 3 }})
  }
}
