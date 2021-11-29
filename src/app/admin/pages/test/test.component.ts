import { Component, OnInit } from '@angular/core'
import { AdminService } from 'src/app/core/services/admin.service'

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css'],
})
export class TestComponent {
  public name: string = 'AAA'
  constructor(private adminService: AdminService) {}

  exportAsPDF(divId: any) {
    // let data = document.getElementById('divId')
    // html2canvas(data!).then((canvas) => {
    //   const contentDataURL = canvas.toDataURL('image/png')
    //   let pdf = new jspdf('l', 'cm', 'a4') //Generates PDF in landscape mode
    //   // let pdf = new jspdf('p', 'cm', 'a4'); Generates PDF in portrait mode
    //   pdf.addImage(contentDataURL, 'PNG', 0, 0, 29.7, 21.0)
    //   pdf.save('Filename.pdf')
    // })
  }
}
