import { Component } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { WelcomeDataService } from '../../services/data/welcome-data.service';

@Component({
  selector: 'app-welcome',
  imports: [RouterLink],
  templateUrl: './welcome.component.html',
  styleUrl: './welcome.component.css',
})
export class WelcomeComponent {
  name = '';

  constructor(
    private route: ActivatedRoute,
    private service: WelcomeDataService
  ) {}
  ngOnInit() {
    // console.log(this.route.snapshot.params['name']);
    // console.log('WelcomeComponent constructor called!');
    this.name = this.route.snapshot.params['name'];
  }

  getWelcomeMessage() {
    console.log(this.service.executeHelloWorldBeanService());
    // console.log('Welcome message');
    this.service.executeHelloWorldBeanService().subscribe();
  }
}
