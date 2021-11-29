import { Component, OnInit } from '@angular/core'
import { FormsService } from '../../services/forms-service.service'
import { ItemModel } from '../model'
import jspdf from 'jspdf'
import html2canvas from 'html2canvas'
@Component({
  selector: 'tool-page',
  templateUrl: './tool-page.component.html',
  styleUrls: ['./tool-page.component.css'],
})
export class ToolPageComponent implements OnInit {
  cards: ItemModel[] = []
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
