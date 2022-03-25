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



import { MainService } from 'src/app/mainservice.service';

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
    private apiService:MainService
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
  // login() {
  //   let user: UserInfo = new UserInfo()
  //   user.user = this.registerForm.value.username
  //   user.password = this.registerForm.value.password
  //   console.log('user: ', this.registerForm.value)
  //   this.accountService
      // .signIn(user.user, user.password)
  //     .subscribe((user: UserInfo) => {
  //       this.localStorage.set('roleId', user?.role)
  //       console.log(user)
  //       if (user) {
  //         this.authService.authenticate(user, () => {
  //           console.log()
  //           if (user.role == 8 || user.role == 14) {
  //             const routeExist = this.router.config.filter(c => c.path.includes('admin'))
  //             if (routeExist.length > 0) {
  //               this.router.navigateByUrl('/admin')
  //             } else
  //               this.toastr.warning('Ban khong co quyen truy cap he thong')
  //           } else if (user.role == 22) {
  //             const routeExist = this.router.config.filter(c => c.path.includes('order'))
  //             if (routeExist.length > 0) {
  //               this.router.navigateByUrl('/order')
  //             } else
  //               this.toastr.warning('Ban khong co quyen truy cap he thong')
  //           } else if (user.role == 6) {
  //             const routeExist = this.router.config.filter(c => c.path.includes('shipper'))
  //             if (routeExist.length > 0) {
  //               this.router.navigateByUrl('/production-confirm')
  //             } else
  //               this.toastr.warning('Ban khong co quyen truy cap he thong')
  //           }

  //         })
  //       } else {
  //         this.toastr.warning('Bạn không có quyền đăng nhập hệ thống!')
  //       }
  //     })
  // }
  signIn(){
    // let user: UserInfo = new UserInfo()
    let user:any = {}
    user.username = this.registerForm.value.username
    user.password = this.registerForm.value.password
    console.log('user: ', this.registerForm.value)
    this.apiService.post('http://office.stvg.vn:51008/api/User/login',user).subscribe(
      (data:any) => {
        console.log('data',data);
        this.localStorage.set('user',data.user)
        this.localStorage.set('token', data.key)
        console.log('tk',localStorage.getItem('token'));
       
        this.toastr.success('Đăng nhập thành công')
        this.router.navigateByUrl('/admin')
      }
    )
  }
  matchValues(matchTo: string): ValidatorFn {
    return (control: AbstractControl | any) =>
      control?.value === control?.parent?.controls[matchTo].value
        ? null
        : { isMatching: true }
  }
}
