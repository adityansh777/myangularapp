import { Component } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';

@Component({
  selector: 'app-welcome',
  imports: [RouterLink],
  templateUrl: './welcome.component.html',
  styleUrl: './welcome.component.css',
})
export class WelcomeComponent {
  name = '';

  constructor(private route: ActivatedRoute) {}
  ngOnInit() {
    // console.log(this.route.snapshot.params['name']);
    // console.log('WelcomeComponent constructor called!');
    this.name = this.route.snapshot.params['name'];
  }
}
