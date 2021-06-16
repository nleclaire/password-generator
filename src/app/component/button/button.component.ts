import { Component, OnInit } from '@angular/core';
import { PasswordService } from '../../service/password/password.service';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.css']
})
export class ButtonComponent implements OnInit {
  password = "";

  constructor(private passwordService: PasswordService) { }

  ngOnInit(): void {
  }

  generatePassword(): void {
    this.password = this.passwordService.generatePassword();
  }

}
