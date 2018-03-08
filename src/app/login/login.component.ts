import { LoginService } from './../service/login.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MessageService } from 'primeng/components/common/messageservice';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  username: string;
  password: string;

  constructor(private router: Router, private messageService: MessageService, private loginService: LoginService) { }

  ngOnInit() { }

  login() {
    this.loginService.login(this.username, this.password).subscribe(next => {
      this.messageService.add({ severity: 'success', summary: 'Welcome' + ' ' + this.username, detail: '' });
      this.router.navigate(['/home']);
    });
  }

  validateUsername() {
    if (this.username !== '' && this.username.length > 0) { return true; } else { return false; }
  }
}

