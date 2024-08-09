import { Component, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-view-template',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './view-template.component.html',
  styleUrl: './view-template.component.scss'
})
export class ViewTemplateComponent implements OnInit {
  templates: any = [];

  ngOnInit(): void {
    this.templates = [
      { template_id: '4', template_name: 'Visard', details: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Explicabo sequi facere consequatur, provident vel, libero quas saepe ea repudiandae beatae odit voluptas atque reprehenderit accusantium necessitatibus et distinctio blanditiis vero.', img_url: 'https://elements-cover-images-0.imgix.net/0edb19ee-2fc5-44dd-b809-67d680548d70?auto=compress%2Cformat&w=710&fit=max&s=86bbe2be6a38e06a6263dba8c85d61d1' },
      { template_id: '5', template_name: 'Translo', details: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Explicabo sequi facere consequatur, provident vel, libero quas saepe ea repudiandae beatae odit voluptas atque reprehenderit accusantium necessitatibus et distinctio blanditiis vero.', img_url: 'https://elements-cover-images-0.imgix.net/25fe7338-19c2-431e-a588-f4c236af8736?auto=compress%2Cformat&w=710&fit=max&s=7c1ca6b31151c125fabed992aba78c10' },
      { template_id: '6', template_name: 'Real Estate', details: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Explicabo sequi facere consequatur, provident vel, libero quas saepe ea repudiandae beatae odit voluptas atque reprehenderit accusantium necessitatibus et distinctio blanditiis vero.', img_url: 'https://elements-cover-images-0.imgix.net/673c169d-db2d-44a9-bb9e-f0ede60c8027?auto=compress%2Cformat&w=710&fit=max&s=b980632a5a8cb0aef86ec94d312545b5' }

    ]
  }
}
