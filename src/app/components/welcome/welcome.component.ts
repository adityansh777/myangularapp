import { Component } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { WelcomeDataService } from '../../services/data/welcomedata/welcome-data.service';
import { NgIf } from '@angular/common';

@Component({
  selector: 'app-welcome',
  standalone: true,
  imports: [RouterLink, NgIf],
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css'], // Fixed typo
})
export class WelcomeComponent {
  name = '';
  message = 'some welcome mesg';
  welcomeMessageFromService: string | undefined;

  constructor(
    private route: ActivatedRoute,
    private service: WelcomeDataService
  ) {}

  ngOnInit() {
    this.route.paramMap.subscribe((params) => {
      this.name = params.get('name') || 'defaultUser';
    });
  }

  // ✅ Fixed method: Call the correct service
  getWelcomeMessage() {
    console.log('Calling executeHelloWorldBeanService');
    this.service.executeHelloWorldBeanService().subscribe(
      (response) => this.handleSuccessfulResponse(response),
      (error) => this.handleErrorResponse(error)
    );
    console.log('Completed getWelcomeMessage');
  }

  // ✅ Fixed method: Call the correct service with path variable
  getWelcomeMessageWithParameter() {
    console.log('Calling executeHelloWorldServiceWithPathVariable');
    this.service.executeHelloWorldServiceWithPathVariable(this.name).subscribe(
      (response) => this.handleSuccessfulResponse(response),
      (error) => this.handleErrorResponse(error)
    );
    console.log('Completed getWelcomeMessageWithParameter');
  }

  // ✅ Error handling (without throwing exceptions prematurely)
  handleErrorResponse(error: any): void {
    console.error('Error occurred:', error);
    this.welcomeMessageFromService = 'Error: Unable to fetch the message';
  }

  // ✅ Success response handler
  handleSuccessfulResponse(response: any) {
    console.log('Response received:', response);
    this.welcomeMessageFromService = response.message;
  }
}
