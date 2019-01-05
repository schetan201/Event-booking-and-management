import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { first } from 'rxjs/operators';
import { UserService } from '../shared/user.service';
@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.scss']
})
export class SignInComponent implements OnInit {
  loginForm: FormGroup;
  loading = false;
  submitted = false;
  returnUrl: string;

  constructor(
      private formBuilder: FormBuilder,
      private route: ActivatedRoute,
      private router: Router,
      private userService: UserService) {}

  ngOnInit() {
    this.loginForm = this.formBuilder.group({
      username: ['', Validators.required],
      password: ['', Validators.required]
  });
  if (this.userService.isLoggedIn()) {
  this.router.navigateByUrl('/home');
  }
}
// convenience getter for easy access to form fields
get f() { return this.loginForm.controls; }
  onSubmit() {
    this.submitted = true;

    // stop here if form is invalid
    if (this.loginForm.invalid) {
        return;
    }

    this.loading = true;
    this.userService.login(this.f.username.value, this.f.password.value)
        .pipe(first())
        .subscribe(
            data => {
                this.userService.getUserProfile().subscribe(
                    res => {
                    },
                    err => {
                      console.log(err);
                    }
                  );
                  alert('Signed In Successfully');
                localStorage.setItem('username', data['username']);
                this.userService.setUserId(data['userId']);
                this.userService.setToken(data['token']);
                this.router.navigate(['/home']);
            },
            error => {
                this.loading = false;
            });
}

  }


