import { AfterViewInit, Component, OnDestroy, OnInit } from '@angular/core';
import { Subject, takeUntil } from 'rxjs';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { TemplateService } from '../../../@core/services/template.service';
import { NgxSpinnerService } from 'ngx-spinner';

@Component({
  selector: 'app-view-template',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './view-template.component.html',
  styleUrl: './view-template.component.scss'
})
export class ViewTemplateComponent implements OnInit, AfterViewInit {
  private unsubscribe$ = new Subject<void>();

  templates: any = [];
  template_id: any;
  selected_template: any;
  other_templates: any;

  constructor(private route: ActivatedRoute, 
              private templateService: TemplateService,
              private _spinner: NgxSpinnerService,
              private router: Router
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
        this.getTemplateDetails(this.template_id);
        setTimeout(() => {
          this._spinner.hide();
        }, 500);
      }
		})
  }
  

  getParams() {
    this.route.paramMap
    .subscribe((params: any) => {
      this.template_id = params.get('id');
      this.getTemplates();
    })
  }

  getTemplateDetails(id: any) {
    this.selected_template = this.templates.find((element: any) => {
      return element._id == this.template_id;
    })

    this.other_templates = this.templates.filter((element: any) => {
      return element._id != this.template_id
    })
    // console.log(this.other_templates)
    // console.log(this.selected_template)
    
  }

  selectTemplate(){
    localStorage.setItem('template', JSON.stringify(this.selected_template));
    this.router.navigate(['/pages/domain/search'])
  }
}
