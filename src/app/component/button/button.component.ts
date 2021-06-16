import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.css']
})
export class ButtonComponent implements OnInit {
  // password must contain AT LEAST one OF EACH of the following \\
  _uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  _lowercase = "abcdefghijklmnopqrstuvwxyz";
  _numbers = "1234567890";
  _symbols = "!@#$%^&*()";

  password = ""; // init to empty string \\

  constructor() { }

  ngOnInit(): void {
  }

  generatePassword(): void {
    if (this.password.length < 8) { // variable length is 8 by default \\
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
          } // NOTE FOR FUTURE ME
        } // code can be reduced using Array.fill - https://stackoverflow.com/questions/9719570/generate-random-password-string-with-requirements-in-javascript/9719815
        // console.log(this.password);
        } else {
          this.password = "";
      }
    }

//     create a custom class or service Password and inject in constructor
//     this.Password.generate
}
