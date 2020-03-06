import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  template: `
    <h1>Login</h1>
    <button>click</button>
  `,
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
