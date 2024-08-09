import { Component, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-templates',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './templates.component.html',
  styleUrl: './templates.component.scss'
})
export class TemplatesComponent implements OnInit {
  templates: any = [];

  ngOnInit(): void {
    this.templates = [
      { template_id: '1', template_name: 'Tecnologia', details: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Explicabo sequi facere consequatur, provident vel, libero quas saepe ea repudiandae beatae odit voluptas atque reprehenderit accusantium necessitatibus et distinctio blanditiis vero.', img_url: 'https://elements-cover-images-0.imgix.net/25df89f4-55d8-47bf-93e2-1f1879e1166c?auto=compress%2Cformat&w=710&fit=max&s=87e87a2b9e23e1d3c579d467c458f799' },
      { template_id: '2', template_name: 'Dentissimo', details: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Explicabo sequi facere consequatur, provident vel, libero quas saepe ea repudiandae beatae odit voluptas atque reprehenderit accusantium necessitatibus et distinctio blanditiis vero.', img_url: 'https://elements-cover-images-0.imgix.net/f7d5b78f-616a-4faa-8367-cfe1d98a86b6?auto=compress%2Cformat&w=710&fit=max&s=54f7215457fdf87c8a9fea79202a83e8' },
      { template_id: '3', template_name: 'Weblogger', details: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Explicabo sequi facere consequatur, provident vel, libero quas saepe ea repudiandae beatae odit voluptas atque reprehenderit accusantium necessitatibus et distinctio blanditiis vero.', img_url: 'https://elements-cover-images-0.imgix.net/c9f82ed0-922a-46e4-ae7a-eef22890e1d8?auto=compress%2Cformat&w=710&fit=max&s=dd9549039c28a73585b83fdb33e69312' },
      { template_id: '4', template_name: 'Visard', details: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Explicabo sequi facere consequatur, provident vel, libero quas saepe ea repudiandae beatae odit voluptas atque reprehenderit accusantium necessitatibus et distinctio blanditiis vero.', img_url: 'https://elements-cover-images-0.imgix.net/0edb19ee-2fc5-44dd-b809-67d680548d70?auto=compress%2Cformat&w=710&fit=max&s=86bbe2be6a38e06a6263dba8c85d61d1' },
      { template_id: '5', template_name: 'Translo', details: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Explicabo sequi facere consequatur, provident vel, libero quas saepe ea repudiandae beatae odit voluptas atque reprehenderit accusantium necessitatibus et distinctio blanditiis vero.', img_url: 'https://elements-cover-images-0.imgix.net/25fe7338-19c2-431e-a588-f4c236af8736?auto=compress%2Cformat&w=710&fit=max&s=7c1ca6b31151c125fabed992aba78c10' },
      { template_id: '6', template_name: 'Real Estate', details: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Explicabo sequi facere consequatur, provident vel, libero quas saepe ea repudiandae beatae odit voluptas atque reprehenderit accusantium necessitatibus et distinctio blanditiis vero.', img_url: 'https://elements-cover-images-0.imgix.net/673c169d-db2d-44a9-bb9e-f0ede60c8027?auto=compress%2Cformat&w=710&fit=max&s=b980632a5a8cb0aef86ec94d312545b5' }

    ]
  }
}
