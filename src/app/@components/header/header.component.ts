import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent implements OnInit {
  step: any;

  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.getParams();
  }

  getParams() {
    this.route.queryParamMap
      .subscribe((q: any) => {
        this.step = q['params'].step;
        // console.log("***", this.step);
      })
  }

}
