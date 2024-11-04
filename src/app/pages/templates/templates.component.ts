import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subject, takeUntil } from 'rxjs';
import { RouterLink } from '@angular/router';
import { TemplateService } from '../../@core/services/template.service';
import { NgxSpinnerService } from 'ngx-spinner';

@Component({
  selector: 'app-templates',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './templates.component.html',
  styleUrl: './templates.component.scss'
})
export class TemplatesComponent implements OnInit {
  private unsubscribe$ = new Subject<void>();
  templates: any = [];

  constructor(private templateService: TemplateService,
              private _spinner: NgxSpinnerService
  ) {}

  ngOnInit(): void {
    this._spinner.show();
    this.getTemplates();
    if (typeof localStorage !== 'undefined') {
      this.clearStorage();
    }
    
  }
  
  getTemplates() {
    this.templateService.getAll()
		.pipe(takeUntil(this.unsubscribe$))
		.subscribe({
			next: (res) => {
        this.templates = res;
        // console.log(this.templates);
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

  scroll(el: HTMLElement) {
    el.scrollIntoView();
  }

  clearStorage() {
    
    localStorage.removeItem('addons');
    localStorage.removeItem('appointment_date');
    localStorage.removeItem('appointment_notes');
    localStorage.removeItem('contact_details');
    localStorage.removeItem('domain');
    localStorage.removeItem('template');
    
    
  }


  ngOnDestroy(): void {
		this.unsubscribe$.next();
		this.unsubscribe$.complete();
	}
}
