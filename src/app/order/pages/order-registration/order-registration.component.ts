import { OrderInfo } from './../../../core/models/model.pb'
import { ToastrService } from 'ngx-toastr'
import { OrderService } from './../../../core/services/order.service'
import { ShippingUnitService } from '../../../shipping-unit/services/shipping-unit-service.service'
import { Location } from '@angular/common'
import { Component, OnInit } from '@angular/core'
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms'
import { OrderModel } from '../../../shipping-unit/models/shipping-model'
import { ResponseState } from 'src/app/core/models/model.pb'
import { AdminService } from 'src/app/core/services/admin.service'
import { OptionModel } from './model'

@Component({
  selector: 'app-order-registration',
  templateUrl: './order-registration.component.html',
  styleUrls: ['./order-registration.component.css'],
})
export class OrderRegistrationComponent implements OnInit {
  isSuccessLoading: boolean = false
  title: string = 'Đăng ký phiếu đơn hàng'
  registerForm!: FormGroup
  isAddingSuccessful: boolean = false
  order_Code: string = ''
  product_options: OptionModel[]
  bagging_type_options: OptionModel[]
  transport_unit_options: OptionModel[]
  warehouse_options: OptionModel[]
  partner_options: OptionModel[]
  partner_type_options: OptionModel[]

  orderFields: any = {}
  driverFields: any = {}
  orderList: OrderModel[] = []
  constructor(
    private _location: Location,
    private orderService: ShippingUnitService,
    private formBuilder: FormBuilder,
    private order: OrderService,
    private toastr: ToastrService,
    private adminService: AdminService,
  ) {}

  async initFilterForm() {
    this.adminService.getListProduct().subscribe((d) => {
      this.product_options = d.map((d) => new OptionModel(d))
      console.log(this.product_options)
    })
    this.adminService.getListTypePacket().subscribe((d) => {
      this.bagging_type_options = d.map((d) => new OptionModel(d))
      console.log(this.bagging_type_options)
    })

    this.adminService.getListTransportUnit().subscribe((d) => {
      this.transport_unit_options = d.map((d) => new OptionModel(d))
      console.log(this.transport_unit_options)
    })

    this.adminService.getListWareHouse().subscribe((d) => {
      this.warehouse_options = d.map((d) => new OptionModel(d))
      console.log(this.warehouse_options)
    })

    this.adminService.getListPartner().subscribe((d) => {
      this.partner_options = d.map((d) => new OptionModel(d))
    })

    this.adminService.getMasterData('partner').subscribe((d) => {
      this.partner_type_options = d.map((d) => new OptionModel(d))
    })
  }

  ngOnInit(): void {
    this.initFilterForm()
    setTimeout(() => this.initializeForm(), 1000)
  }
  initializeForm() {
    this.orderFields = {
      title: 'Thông tin đơn hàng',
      fields: [
        {
          caption: 'Sản phẩm',
          label: 'sản phẩm',
          controlName: 'code_product',
          type: 'select',
          options: this.product_options,
        },
        {
          caption: 'Loại bao',
          label: 'loại bao',
          controlName: 'bagging_type',
          type: 'select',
          options: this.bagging_type_options,
        },
        {
          caption: 'Số lượng',
          label: 'Số lượng',
          controlName: 'qty',
          type: 'input',
        },
        {
          caption: 'Tên đơn vị vận chuyển',
          label: 'tên đơn vị vận chuyển ',
          controlName: 'shipping_unit_code',
          type: 'select',
          options: this.transport_unit_options,
        },
        {
          caption: 'Kho',
          label: 'tên kho',
          controlName: 'warehouse_code',
          type: 'select',
          options: this.warehouse_options,
        },
        {
          caption: 'Khách hàng',
          label: 'khách hàng',
          controlName: 'partner_code',
          type: 'select',
          options: this.partner_options,
        },
        {
          caption: 'Loại Khách hàng',
          label: 'loại khách hàng',
          controlName: 'partner_type',
          type: 'select',
          options: this.partner_type_options,
        },
        {
          caption: 'Lớp 1',
          label: 'Lớp 1',
          controlName: 'grade_1',
          type: 'input',
        },
        {
          caption: 'Lớp 2',
          label: 'Lớp 2',
          controlName: 'grade_2',
          type: 'input',
        },
      ],
    }
    this.driverFields = {
      title: 'Thông tin tài xế',
      fields: [
        {
          caption: 'CCCD/CMND',
          label: 'Số CCCD/CMND',
          controlName: 'identity_card_num',
        },
        {
          caption: 'Tên tài xế',
          label: 'Tên tài xế: ',
          controlName: 'driver_name',
        },
        {
          caption: 'Số Rơ mooc',
          label: 'Số Rơ mooc: ',
          controlName: 'ro_mooc_number',
        },
        {
          caption: 'Biển số xe',
          label: 'Biển số xe: ',
          controlName: 'number_plate',
        },
        {
          caption: 'KL đăng kiểm',
          label: 'KL đăng kiểm',
          controlName: 'weight_registry',
        },
        {
          caption: 'KL cho phép chở',
          label: 'KL cho phép chở',
          controlName: 'net_weight',
        },
      ],
    }
    this.registerForm = this.formBuilder.group({
      identity_card_num: [
        '241605781',
        [
          Validators.required,
          Validators.minLength(9),
          Validators.maxLength(12),
        ],
      ],
      weight_registry: [
        '111',
        [Validators.required, Validators.pattern('^[0-9]*$')],
      ],
      driver_name: ['Nguyễn Đình Trung', [Validators.required]],
      net_weight: [
        '123',
        [Validators.required, Validators.pattern('^[0-9]*$')],
      ],
      ro_mooc_number: ['28C3965', [Validators.required]],
      number_plate: [
        '49C5-90653',
        [Validators.required, Validators.minLength(7)],
      ],
      code_product: ['', [Validators.required]],
      qty: ['1234', [Validators.required, Validators.pattern('^[0-9]*$')]],
      grade_1: ['123', [Validators.required, Validators.pattern('^[0-9]*$')]],
      grade_2: ['456', [Validators.required, Validators.pattern('^[0-9]*$')]],
      bagging_type: ['', Validators.required],
      shipping_unit_code: ['', [Validators.required]],
      warehouse_code: ['', [Validators.required]],
      partner_type: ['', [Validators.required]],
      partner_code: ['', [Validators.required]],
    })
    this.isSuccessLoading = true
  }
  onSubmit(e: any): void {
    if (!this.registerForm.valid) {
      console.log('fail', this.registerForm.value)

      for (const key in this.registerForm.controls) {
        if (this.registerForm.controls.hasOwnProperty(key)) {
          const control: FormControl = <FormControl>(
            this.registerForm.controls[key]
          )
          control.markAsTouched()
        }
      }
    } else {
      this.order_Code = this.orderService.generateId()
      const newOrder = {
        id: this.orderService.generateId(),
        driverInfo: {
          name: this.registerForm.value.driver_name,
          identity_card_num: this.registerForm.value.identity_card_num,
          ro_mooc_number: this.registerForm.value.ro_mooc_number,
          weight_registry: this.registerForm.value.weight_registry,
          net_weight: this.registerForm.value.net_weight,
          number_plate: this.registerForm.value.number_plate,
        },
        orderInfo: {
          code_product: this.registerForm.value.code_product,
          code_product_type: this.registerForm.value.code_product,
          name: this.registerForm.value.order_name,
          qty: this.registerForm.value.qty,
          grade_1: this.registerForm.value.grade_1,
          grade_2: this.registerForm.value.grade_2,
          bagging_type: this.registerForm.value.bagging_type,
          shipping_unit_code: this.registerForm.value.shipping_unit_code,
          warehouse_code: this.registerForm.value.warehouse_code,
          partner_code: this.registerForm.value.partner_code,
          partner_type: this.registerForm.value.partner_type,
        },
      }

      const order = new OrderInfo()

      //  order.codeOrder = newOrder.orderInfo.
      order.identityDriver = newOrder.driverInfo.identity_card_num
      order.nameDriver = newOrder.driverInfo.name
      order.vehicleNumber = newOrder.driverInfo.number_plate
      order.weightAllow = newOrder.driverInfo.net_weight
      order.weightRegistration = newOrder.driverInfo.weight_registry
      order.roMooc = newOrder.driverInfo.ro_mooc_number
      order.class1 = newOrder.orderInfo.grade_1
      order.class2 = newOrder.orderInfo.grade_2
      order.quantity = newOrder.orderInfo.qty
      order.idTransportationUnit = newOrder.orderInfo.shipping_unit_code
      order.codeTypePacket = newOrder.orderInfo.bagging_type
      order.codeProduct = newOrder.orderInfo.code_product
      order.wareHouse = newOrder.orderInfo.warehouse_code
      order.typeCustomer = newOrder.orderInfo.partner_type
      order.customer = newOrder.orderInfo.partner_code

      console.log(order)

      

      this.order.insertOrder(order).subscribe((reply) => {
        if (reply.response.state == ResponseState.SUCCESS) {
          this.toastr.success(reply.response.message)
          this.order_Code = reply.order.codeOrder
          this.isAddingSuccessful = true
        } else {
          this.toastr.error(reply.response.message)
        }
      })

      // this.orderList.push(newOrder);
    }
  }
  onBackClicked(e: any) {
    this._location.back()
  }
}
