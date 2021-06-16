import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PasswordService {
  // password must contain AT LEAST one OF EACH of the following \\
  _uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  _lowercase = "abcdefghijklmnopqrstuvwxyz";
  _numbers = "1234567890";
  _symbols = "!@#$%^&*()";

  length = 8;

  allChars = this._uppercase + this._lowercase + this._numbers + this._symbols;

  constructor() { }

  generatePassword(): string {
      let password = ""; // init to empty string \\

      // a more cryptographically secure implementation
      // see https://stackoverflow.com/questions/9719570/generate-random-password-string-with-requirements-in-javascript/9719815
      // password = Array(this.length)
      //   .fill(this.allChars)
      //   .map(x => x[Math.floor(crypto.getRandomValues(new Uint32Array(1))[0] / (0xffffffff + 1) * this.allChars.length)])
      //   .join('');

      // variable length is 8 by default \\
      for(let i = 0; i < this.length; i++){
          if(i == 0) {
            password += this._uppercase[Math.floor(Math.random() * this._uppercase.length)];
          } else if (i <= 4) {
            password += this._lowercase[Math.floor(Math.random() * this._lowercase.length)];
          } else if (i == 5) {
            password += this._numbers[Math.floor(Math.random() * this._numbers.length)];
          } else if (i == 6) {
            password += this._numbers[Math.floor(Math.random() * this._numbers.length)];
          } else if (i == 7) {
            password += this._symbols[Math.floor(Math.random() * this._symbols.length)];
          } // NOTE FOR FUTURE ME
        } // code can be reduced using Array.fill

      return password;

    }

}
