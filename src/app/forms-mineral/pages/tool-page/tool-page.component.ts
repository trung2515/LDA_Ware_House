import { Component, OnInit } from '@angular/core'
import { FormsService } from '../../services/forms-service.service'
import { ItemModel } from '../model'
import jspdf from 'jspdf'
import html2canvas from 'html2canvas'
import { Form_Mineral_Item } from '../../models/mineral-model'
@Component({
  selector: 'tool-page',
  templateUrl: './tool-page.component.html',
  styleUrls: ['./tool-page.component.css'],
})
export class ToolPageComponent implements OnInit {
  cards: ItemModel[] = []
  dataBinding: Form_Mineral_Item  = new  Form_Mineral_Item();
  ngOnInit(): void {
    this.cards = [
      {
        name: 'Biên bản nhập kho',
        index: 1,
        action: 'In',
      },
      {
        name: 'Biên bản xuất kho',
        index: 2,
        action: 'In',
      },
      {
        name: 'Biên bản bao lỗi',
        index: 3,
        action: 'In',
      },
      {
        name: 'Biên bản bao hiện trường',
        index: 4,
        action: 'In',
      },
      {
        name: 'Biên bản bao nhập kho (1)',
        index: 4,
        action: 'In',
      },
    ]

    this.dataBinding.title = 'BIÊN BẢN GIAO NHẬN'
    this.dataBinding.subtitle = 'SẢN PHẨM NHẬP KHO HÀNG CA'

    this.dataBinding.department1 = '1. Đại diện bên giao: Phân xưởng  Nung Hydrat'
    this.dataBinding.department2 = '2. Đại diện bên nhận: Phòng Kế Hoạch Tiêu Thụ'
  }


  isShowPopup: boolean = false

  employee: any

  positions: string[]

  states: string[]

  title: string = 'Title'

  constructor(service: FormsService) {
    this.employee = service.getEmployee()
    this.positions = service.getPositions()
    this.states = service.getState()
  }

  actionClick(event: any) {
    this.isShowPopup = true
  }

  public captureScreen() {
    var data = document.getElementById('contentToConvert') //Id of the table
    html2canvas(data!).then((canvas) => {
      // Few necessary setting options
      const canvasWidth = canvas.width
      const canvasHeight = canvas.height
      let imgWidth = 210
      let pageHeight = 297
      let imgHeight = (canvasHeight * imgWidth) / canvasWidth
      let heightLeft = imgHeight

      const contentDataURL = canvas.toDataURL('image/png', 1.0)
      console.log(contentDataURL)
      let pdf = new jspdf('p', 'mm', 'a4') // A4 size page of PDF
      let position = 0
      pdf.addImage(contentDataURL, 'PNG', 0, position, imgWidth, pageHeight)
      pdf.save('test.pdf') // Generated PDF
    })
  }
}
