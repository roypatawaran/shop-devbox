import { AfterViewInit, Component } from '@angular/core';
import { HeaderComponent } from "../@components/header/header.component";
import { FooterComponent } from "../@components/footer/footer.component";
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-pages',
  standalone: true,
  imports: [HeaderComponent, FooterComponent, RouterOutlet],
  templateUrl: './pages.component.html',
  styleUrl: './pages.component.scss'
})
export class PagesComponent implements AfterViewInit {
  ngAfterViewInit(): void {
    // window.scroll({
    //   top: 0,
    //   left: 0,
    //   behavior: 'smooth'
    // })
  }
}
