import { Component, OnInit } from '@angular/core';
import { Subject, takeUntil } from 'rxjs';
import { OrderSummaryComponent } from '../../@components/order-summary/order-summary.component';
import { Router, RouterLink } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { LeadService } from '../../@core/services/lead.service';
import { CommonModule, DatePipe } from '@angular/common';
import moment from 'moment'
import { UtilityService } from '../../@core/services/utility.service';

@Component({
  selector: 'app-appointment-selection',
  standalone: true,
  imports: [OrderSummaryComponent, RouterLink, FormsModule, DatePipe, CommonModule],
  templateUrl: './appointment-selection.component.html',
  styleUrl: './appointment-selection.component.scss'
})
export class AppointmentSelectionComponent implements OnInit{
  private unsubscribe$ = new Subject<void>();
  appointment_date: any;
  notes: any;
  form_touched: any = false;
  form_status: any = false;

  constructor(private router: Router,
              private leadService: LeadService,
              private utilityService: UtilityService
  ) {}

  ngOnInit(): void {
    // this.appointment_date = moment().format('YYYY-MM-DD')
  }

  confirmAppointment() {
    localStorage.setItem('appointment_date', JSON.stringify(this.appointment_date));
    localStorage.setItem('appointment_notes', JSON.stringify(this.notes));
    this.processData();
    // var payload = {
    //   background: String,
    //   company_name: String,
    //   email: String,
    //   facebook: String,
    //   industry: String,
    //   instagram: String,
    //   linkedin: String,
    //   mobile: String,
    //   name: String,
    //   other_info: String,
    //   other_socials: String,
    //   role: String,
    //   appointment_notes: String,
    //   appointment_date: Date,
    //   domain: String,
    //   template: {
    //       type: Schema.Types.ObjectId,
    //       ref: 'data_templates'
    //   },
    //   addons: [{
    //       type: Schema.Types.ObjectId,
    //       ref: 'data_addons'
    //   }],
    // }
    // this.router.navigate(['/pages/info/success'], { queryParams: { step: 6 }})
  }

  processData() {
    var addons = JSON.parse(localStorage.getItem('addons') || '{}');
    var template = JSON.parse(localStorage.getItem('template') || '{}');
    var contact_details = JSON.parse(localStorage.getItem('contact_details') || '{}');
    var domain = JSON.parse(localStorage.getItem('domain') || '{}');
    
    addons = addons.map((elem:any) => {
      return elem._id
    })

    var payload = {
      background: contact_details.background,
      company_name: contact_details.company_name,
      email: contact_details.email,
      facebook: contact_details.facebook,
      industry: contact_details.industry,
      instagram: contact_details.instagram,
      linkedin: contact_details.linkedin,
      mobile: contact_details.mobile,
      name: contact_details.name,
      other_info: contact_details.other_info,
      other_socials: contact_details.other_socials,
      role: contact_details.role,
      appointment_notes: this.notes,
      appointment_date: moment(this.appointment_date).format('YYYY-MM-DD'),
      domain: domain,
      template: template._id,
      addons: addons
    }
    // console.log(payload)
    var today = moment().format('YYYY-MM-DD');
    var selected_date = moment(this.appointment_date).format('YYYY-MM-DD')
    
    if(selected_date <= today) {
      this.form_status = false;
      this.form_touched = true;
      // console.log('PAST', this.form_status);
    } else {
      this.form_status = true;
      this.form_touched = true;
      // console.log('FUTURE', this.form_status);
      this.uploadLead(payload);
    }
  }

  uploadLead(data:any) {
    this.leadService.addRecord(data)
    .pipe(takeUntil(this.unsubscribe$))
		.subscribe({
			next: (res) => {
        var temp: any = res;
        // this.router.navigate(['/pages/info/success'], { queryParams: { step: 6 }});
			},
			error: (err: any) => {
        console.error(err);
        
      },
			complete: () => {
        this.sendEmail(data);
      }
		})
  }

  sendEmail(data:any) {
    var date_sched = moment(this.appointment_date).format('MMMM D, YYYY (dddd)')
    var email_details = {
      email_add: data.email,
      ap_sched: date_sched.toString()
    }
    this.utilityService.sendEmail(email_details)
    .pipe(takeUntil(this.unsubscribe$))
		.subscribe({
			next: (res) => {
        var temp: any = res;
        this.router.navigate(['/pages/info/success'], { queryParams: { step: 6 }});
			},
			error: (err: any) => {
        console.error(err);
        
      },
			complete: () => {}
		})
  }

}
