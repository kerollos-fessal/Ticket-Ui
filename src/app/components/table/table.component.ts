import { Component, OnInit } from '@angular/core';
import { Table } from 'primeng/table';
import { Customer } from 'src/app/interfaces/customer';
// import { Customer, Representative } from '../../domain/customer';
// import { CustomerService } from '../../service/customerservice';

@Component({
    selector: 'app-table',
    templateUrl: './table.component.html',
    styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit {
    customers!: Customer[];
    toggleState:string = 'غير مفعلة'
    isActivated: boolean = false



    loading: boolean = true;

    constructor() {}

    ngOnInit() {
      this.customers = [
        {
            image: 'customer1.png',
            name: 'John Doe',
            phone: 1234567890,
            ticketNo: 'A123',
            price: 20,
            cinemaNames: 'Cinema 1',
            PersonsNo: 2,
            buyTimes: '2023-03-01',
            ticketType: {
                ticketNo: 'A123',
                format: 'Standard',
                fileSize: '10 MB'
            }
        },
        {
            image: 'customer2.png',
            name: 'Jane Smith',
            phone: 9876543210,
            ticketNo: 'B456',
            price: 25,
            cinemaNames: 'Cinema 2',
            PersonsNo: 3,
            buyTimes: '2023-03-02',
            ticketType: {
                ticketNo: 'B456',
                format: 'VIP',
                fileSize: '15 MB'
            }
        },
 
    ];
    }

    changeState(){
      this.isActivated = !this.isActivated;
     if(this.isActivated){
      this.toggleState = this.isActivated ? 'مفعلة' : 'غير مفعلة';
    }
  }
    // clear(table: Table) {
    //     table.clear();
    // }

    
}
