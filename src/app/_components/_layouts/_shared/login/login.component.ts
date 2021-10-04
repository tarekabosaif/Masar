import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;
  submitted = false;

  constructor(
    private formBuilder: FormBuilder,
    private route: ActivatedRoute
  ) {
    this.loginForm = this.formBuilder.group({
      username: ['', [ Validators.required, Validators.maxLength(10) , Validators.minLength(10) , Validators.pattern('[0-9]+')]],
      password: ['', Validators.required]
  });
  }

  ngOnInit() {

}

// convenience getter for easy access to form fields
get f() { return this.loginForm.controls; }

onSubmit() {
  this.submitted = true;

    // stop here if form is invalid
    if (this.loginForm.invalid) {
        return;
    }


}

}
