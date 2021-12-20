import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core'
import {
  AbstractControl,
  FormBuilder,
  FormGroup,
  ValidatorFn,
  Validators,
} from '@angular/forms'
import { Router } from '@angular/router'
import { LocalStorageService } from 'ngx-localstorage'
import { ToastrService } from 'ngx-toastr'
import {
  ResponseState,
  UserInfo,
  UserReply,
} from 'src/app/core/models/model.pb'
import { AccountService } from 'src/app/core/services/account.service'
import { AuthService } from 'src/app/core/services/auth.service'

@Component({
  selector: 'app-login',
  styleUrls: ['./login.component.less'],
  templateUrl: './login.component.html',
})
export class LoginComponent implements OnInit {
  @Input() usersFromHomeComponent: any
  @Output() cancelRegister = new EventEmitter()
  registerForm!: FormGroup
  maxDate!: Date

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private toastr: ToastrService,
    private localStorage: LocalStorageService,
    private authService: AuthService,
    private accountService: AccountService,
  ) { }

  ngOnInit(): void {
    this.initializeForm()
    this.maxDate = new Date()
    this.maxDate.setFullYear(this.maxDate.getFullYear() - 18)
  }

  initializeForm() {
    this.registerForm = this.fb.group({
      username: ['', Validators.required],
      gender: ['male', Validators.required],
      dateOfBirth: ['', Validators.required],
      password: [
        '',
        [
          Validators.required,
          Validators.minLength(4),
          Validators.maxLength(10),
        ],
      ],
      confirmPassword: [
        '',
        [Validators.required, this.matchValues('password')],
      ],
    })
  }
  login() {
    let user: UserInfo = new UserInfo()
    user.user = this.registerForm.value.username
    user.password = this.registerForm.value.password
    console.log('user: ', this.registerForm.value)
    this.accountService
      .signIn(user.user, user.password)
      .subscribe((user: UserInfo) => {
        this.localStorage.set('roleId', user?.role)
        console.log(user)
        if (user) {
          this.authService.authenticate(user, () => {
            if (user.role == 8) {
              this.router.navigateByUrl('/admin').catch(e =>
                this.toastr.warning('Ban khong co quyen truy cap he thong'))
            } else if (user.role == 22) {
              this.router.navigateByUrl('/order').catch(e =>
                this.toastr.warning('Ban khong co quyen truy cap he thong'))
            }

          })
        } else {
          this.toastr.warning('Bạn không có quyền đăng nhập hệ thống!')
        }
      })
  }

  matchValues(matchTo: string): ValidatorFn {
    return (control: AbstractControl | any) =>
      control?.value === control?.parent?.controls[matchTo].value
        ? null
        : { isMatching: true }
  }
}
