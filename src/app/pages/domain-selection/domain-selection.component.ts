import { AfterViewInit, Component, OnDestroy, OnInit } from '@angular/core';
import { Subject, takeUntil } from 'rxjs';
import { OrderSummaryComponent } from '../../@components/order-summary/order-summary.component';
import { CurrencyPipe } from '@angular/common';
import { ActivatedRoute, Route, Router, RouterLink } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { NgxSpinnerService } from 'ngx-spinner';
import { UtilityService } from '../../@core/services/utility.service';

@Component({
  selector: 'app-domain-selection',
  standalone: true,
  imports: [OrderSummaryComponent, CurrencyPipe, RouterLink, FormsModule],
  templateUrl: './domain-selection.component.html',
  styleUrl: './domain-selection.component.scss'
})
export class DomainSelectionComponent implements OnInit, AfterViewInit {
  private unsubscribe$ = new Subject<void>();
  selectDomain: boolean = true;
  domain_name: any;
  domain_suggestions: any;
  domain_results: any ='';

  constructor(private route: ActivatedRoute,
              private _spinner: NgxSpinnerService,
              private router: Router,
              private utilityService: UtilityService
  ) {}

  ngOnInit(): void {
    this._spinner.show();
    this.getParams();
  }

  ngAfterViewInit(): void {
    // window.scroll({
    //   top: 0,
    //   left: 0,
    //   behavior: 'smooth'
    // })
  }

  toggleDomain() {
    // this.selectDomain = !this.selectDomain;
    this.domain_suggestions = [];
    // var search = this.domain_name.split('.')
    // console.log(search);
    // if(search.length == 1 ) {
    //   search = search + '.com'
    // } 
    this._spinner.show();
    this.searchDomain(this.domain_name);
  }

  getParams() {
    this.route.queryParamMap
      .subscribe((q: any) => {
        this.domain_name = q['params'].domain;
        this.searchDomain(this.domain_name);
        // console.log("***", this.domain_name);
      })
  }

  searchDomain(domain: any) {
    this.utilityService.searchDomain(domain)
		.pipe(takeUntil(this.unsubscribe$))
		.subscribe({
			next: (res) => {
        this.domain_results = res;
        // console.log(this.domain_results[0]);
			},
			error: (err: any) => {
        console.error(err);
      },
			complete: () => {
        this.searchSuggestions(this.domain_name);
      }
		})
  }

  searchSuggestions(domain: any) {
    this.utilityService.suggestDomain(domain)
		.pipe(takeUntil(this.unsubscribe$))
		.subscribe({
			next: (res) => {
        this.domain_suggestions = res;
        // console.log(this.domain_suggestions);
			},
			error: (err: any) => {
        console.error(err);
      },
			complete: () => {
        setTimeout(() => {
          this._spinner.hide();
        }, 500);
      }
		})
  }

  chooseDomain(domain: any){
    localStorage.setItem('domain', JSON.stringify(domain));
    this.router.navigate(['/pages/addon/selection'], { queryParams: { step: 3 }})
  }

  ngOnDestroy(): void {
		this.unsubscribe$.next();
		this.unsubscribe$.complete();
	}
}
