import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.css']
})
export class ButtonComponent implements OnInit {
  // password must contain AT LEAST one OF EACH of the following
  _uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  _lowercase = "abcdefghijklmnopqrstuvwxyz";
  _numbers = "1234567890";
  _symbols = "!@#$%^&*()";

  password = ""; // init password variable to empty string

  constructor() { }

  ngOnInit(): void {
  }

  generatePassword(): void {
    if (this.password.length < 8) {
      for(let i = 0; i < 8; i++){
          if(i == 0) {
            this.password += this._uppercase[Math.floor(Math.random() * this._uppercase.length)];
          } else if (i <= 4) {
            this.password += this._lowercase[Math.floor(Math.random() * this._lowercase.length)];
          } else if (i == 5) {
            this.password += this._numbers[Math.floor(Math.random() * this._numbers.length)];
          } else if (i == 6) {
            this.password += this._numbers[Math.floor(Math.random() * this._numbers.length)];
          } else if (i == 7) {
            this.password += this._symbols[Math.floor(Math.random() * this._symbols.length)];
          }
        }
        console.log(this.password);
        } else {
          this.password = "";
      }
    }

//     maybe create a custom class Password and inject in constructor
//     this.Password.generate
}
