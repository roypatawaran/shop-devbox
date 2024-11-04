import { AfterViewInit, Component, EventEmitter, OnDestroy, OnInit, Output } from '@angular/core';
import { Subject, takeUntil } from 'rxjs';
import { OrderSummaryComponent } from '../../@components/order-summary/order-summary.component';
import { CurrencyPipe, Location } from '@angular/common';
import { Router, RouterLink } from '@angular/router';
import { AddonService } from '../../@core/services/addon.service';
import { NgxSpinnerService } from 'ngx-spinner';

@Component({
  selector: 'app-add-on-selection',
  standalone: true,
  imports: [OrderSummaryComponent, CurrencyPipe, RouterLink],
  templateUrl: './add-on-selection.component.html',
  styleUrl: './add-on-selection.component.scss'
})
export class AddOnSelectionComponent implements OnInit, OnDestroy, AfterViewInit{
  private unsubscribe$ = new Subject<void>();

  addons: any;
  selected_addon: any;

  selection: any = [];

  constructor(private location: Location,
              private addonService: AddonService,
              private _spinner: NgxSpinnerService,
              private router: Router
  ) {}

  ngOnInit(): void {
    this._spinner.show()
    this.getAddons();
  }

  ngAfterViewInit(): void {
    // window.scroll({
    //   top: 0,
    //   left: 0,
    //   behavior: 'smooth'
    // })
  }

  back() {
    this.location.back();
  }

  getAddons() {
    this.addonService.getAll()
		.pipe(takeUntil(this.unsubscribe$))
		.subscribe({
			next: (res) => {
        this.addons = res;
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

  ngOnDestroy(): void {
		this.unsubscribe$.next();
		this.unsubscribe$.complete();
	}

  showDetails(id: any) {
    this.selected_addon = this.addons.find((elem: any) => {
      return elem._id == id;
    })
  }

  addToSelection(id: any) {
    this.selection.push(id);
    localStorage.setItem('addons', JSON.stringify(this.selection));
  }

  removeFromSelection(id: any) {
    this.selection = this.selection.filter((element: any) => {
      return element !== id;
    })
    localStorage.setItem('addons', JSON.stringify(this.selection));
  }

  // chooseAddons(ext: any){
  //   localStorage.setItem('addons', JSON.stringify(this.selection));
  //   this.router.navigate(['/pages/info/business'], { queryParams: { step: 4 }})
  // }
}
