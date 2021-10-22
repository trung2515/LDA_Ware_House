import { Component, OnInit } from '@angular/core';
import { AdminService } from 'src/app/core/services/admin.service'
@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
export class TestComponent implements OnInit {

  constructor(private adminService:AdminService) { }

  ngOnInit(): void {
    this.adminService.getListProduct().subscribe((data:any) => {
      console.log('listProduct ',data)
    })
  }

}
