import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  form: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private router: Router
  ) {}

  ngOnInit() {
    this.form = this.formBuilder.group({
      name: [''],
      email: [''],
      phone: [''],
      cpf: [''],
      gender: [''],
      cep: [''],
      password: ['']
    });
  }

  submit() {
    console.log(this.form.value);
    this.router.navigate(['/']);
  }

  goToLogin() {
    this.router.navigate(['/']);
  }

}
