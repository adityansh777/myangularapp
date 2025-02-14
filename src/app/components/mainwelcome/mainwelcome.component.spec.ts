import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MainwelcomeComponent } from './mainwelcome.component';

describe('MainwelcomeComponent', () => {
  let component: MainwelcomeComponent;
  let fixture: ComponentFixture<MainwelcomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MainwelcomeComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MainwelcomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
