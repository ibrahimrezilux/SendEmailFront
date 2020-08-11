import { Component } from '@angular/core';
import {HttpClient, HttpClientModule} from '@angular/common/http';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'AngSendEmail';

  dataset: SendModel = {
    objet : '',
    message : '',
    email: ''
  };

  registerForm: FormGroup;
  submitted = false;

  constructor(private http: HttpClient) { }

  onSubmit() {
    this.http.post<SendModel>('http://localhost:8089/testapp/employees', this.dataset).subscribe(
      res => {
        this.dataset = res;
        console.log(this.dataset);
        alert('Email Sent successfully');
        this.dataset.objet = '';
        this.dataset.message = '';
        this.dataset.email = '';

      });
  }
}

interface SendModel {
  objet: string;
  message: string;
  email: string;
}
