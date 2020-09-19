// import { Component, OnInit } from '@angular/core';
// import { Router } from '@angular/router';
// import { AuthenticationService } from '../../service/authentication/authentication.service';
// import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';

// declare function myLoginFunction(): any;

// @Component({
//     selector: 'app-login',
//     templateUrl: './login.component.html',
//     styleUrls: ['./login.component.css']
// })
// export class LoginComponent implements OnInit {

//     username: string = '';
//     password: string = '';
//     r_username: string = '';
//     r_password: string = '';
//     r_cpassword: string = '';
//     errorMessage = 'Invalid Credentials';
//     invalidLogin = false;

//     constructor(private router: Router,
//         private authenticationService: AuthenticationService) { }

//     ngOnInit() {
//         myLoginFunction();
//     }

//     handleJWTAuthenticationLogin() {
//         this.authenticationService.authenticate(this.username, this.password).subscribe(
//             data => {
//                 sessionStorage.setItem('username', this.username);
//                 sessionStorage.setItem('token', data.token);
//                 this.router.navigate(['dashboard', this.username]);
//                 this.invalidLogin = false;
//             },
//             error => {
//                 console.log(error);
//                 this.invalidLogin = true;
//             }
//         );
//     }
// }

import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticationService } from '../../service/authentication/authentication.service';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';

declare function myLoginFunction(): any;

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
    form1 = new FormGroup({
        email1: new FormControl('', [
            Validators.required,
            Validators.email
        ]),
        password1: new FormControl('', [
            Validators.required,
            Validators.minLength(6)
        ])
    });

    form2 = new FormGroup({
        email2: new FormControl('', [
            Validators.required,
            Validators.email
        ]),
        password2: new FormControl('', [
            Validators.required,
            Validators.minLength(6)
        ])
    });

    constructor(private router: Router,
        private authenticationService: AuthenticationService) { }

    ngOnInit() {
        myLoginFunction();
    }

    get email1() {
        return this.form1.get('email1');
    }

    get password1() {
        return this.form1.get('password1');
    }

    get email2() {
        return this.form2.get('email2');
    }

    get password2() {
        return this.form2.get('password2');
    }


    onSubmitSignUp() {
        alert(JSON.stringify(this.form1.value));
    }

    onSubmitSignIn() {
        alert(JSON.stringify(this.form2.value));
    }

    username: string;
    password: string;
    errorMessage = 'Invalid Credentials!!';
    invalidLogin = false;

    handleJWTAuthenticationLogin() {
        //  this.username = 'hackathonapi@gmail.com';
        //  this.password = 'hackathonapi@1TC';
        //  this.username = hackathonapi@gmail.com
        //  this.password = hackathonapi@1TC
        this.username = this.email2.value;
        this.password = this.password2.value;
        this.authenticationService.authenticate(this.username, this.password).subscribe(
            data => {
                sessionStorage.setItem('username', this.username);
                sessionStorage.setItem('token', data.token);
                this.router.navigate(['dashboard']);
                this.invalidLogin = false;
            },
            error => {
                console.log(error);
                this.invalidLogin = true;
            }
        );
    }
}