import { Component, OnInit } from '@angular/core';
import { userInterface } from '../userInterface';
import { userfeedback } from '../userImp';

@Component({
  selector: 'app-testimonial-container',
  templateUrl: './testimonial-container.component.html',
  styleUrls: ['./testimonial-container.component.css'],
})
export class TestimonialContainerComponent implements OnInit {
  newuser: userInterface[];
  userfeedback: any = {};
  constructor() {}

  ngOnInit(): void {
    this.newuser = userfeedback;
  }

  adduser(userfeedback): any {
    console.log('Add new user');
    this.newuser.unshift(userfeedback);
  }
}
