import { AfterViewInit, Component, OnInit } from '@angular/core';
import { Customer } from 'src/app/interfaces/customer';
import { ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css'],
})
export class TableComponent implements OnInit, AfterViewInit {
  customers!: Customer[];
  toggleState: string = 'غير مفعلة';
  isActivated: boolean = false;

  loading: boolean = true;
  searchKey: string = '';
  constructor(
    private cdr: ChangeDetectorRef
  ) {}

  ngOnInit() {
    this.customers = [
      {
        image: 'assets/images/person.jpg',
        name: 'محمد أحمد',
        phone: 123456789,
        ticketNo: 'C-101',
        price: 20,
        cinemaNames: 'سينما مصر , مول العرب , برج الأطنان , سرايا القبة صيدناوي مول, برج العرب',
        PersonsNo: 2,
        buyTimes: 'مرة واحدة',
        ticketType: {
          ticketNo: 'تذكرة رقم 45',
          format: 'pdf',
          fileSize: '9mb',
        },
      },
      {
        image: 'assets/images/person2.jpg',
        name: 'أمير محمد',
        phone: 123456789,
        ticketNo: 'C-102',
        price: 25,
        cinemaNames: 'سينما مصر , مول العرب , برج الأطنان , سرايا القبة صيدناوي مول',
        PersonsNo: 3,
        buyTimes: 'مرتين',
        ticketType: {
          ticketNo: 'تذكرة رقم 45',
          format: 'pdf',
          fileSize: '9mb',
        },
      },
      {
        image: 'assets/images/person3.jpg',
        name: 'فاطمة علي',
        phone: 124656789,
        ticketNo: 'C-103',
        price: 30,
        cinemaNames:'سينما مصر , مول العرب , برج الأطنان , سرايا القبة صيدناوي مول',
        PersonsNo: 1,
        buyTimes: 'ثلاث مرات',
        ticketType: {
          ticketNo: 'تذكرة رقم 45',
          format: 'pdf',
          fileSize: '9mb',
        },
      },
      {
        image: 'assets/images/person.jpg',
        name: 'علي حسن',
        phone: 1276343210,
        ticketNo: 'C-104',
        price: 35,
        cinemaNames: 'سينما مصر , مول العرب , برج الأطنان , سرايا القبة صيدناوي مول',
        PersonsNo: 4,
        buyTimes: 'مرة واحدة',
        ticketType: {
          ticketNo: 'تذكرة رقم 45',
          format: 'pdf',
          fileSize: '9mb',
        },
      },
      {
        image: 'assets/images/person2.jpg',
        name: 'سارة عبد الله',
        phone: 1234567890,
        ticketNo: 'C-105',
        price: 40,
        cinemaNames: 'سينما مصر , مول العرب , برج الأطنان , سرايا القبة, صيدناوي مول',
        PersonsNo: 2,
        buyTimes: 'أربع مرات',
        ticketType: {
          ticketNo: 'تذكرة رقم 45',
          format: 'pdf',
          fileSize: '9mb',
        },
      },
      {
        image: 'assets/images/person3.jpg',
        name: 'يوسف خالد',
        phone: 9876543210,
        ticketNo: 'C-106',
        price: 45,
        cinemaNames: 'سينما مصر , مول العرب , برج الأطنان , سرايا القبة, صيدناوي مول',
        PersonsNo: 3,
        buyTimes: 'مرتين',
        ticketType: {
          ticketNo: 'تذكرة رقم 45',
          format: 'pdf',
          fileSize: '9mb',
        },
      },
      {
        image: 'assets/images/person.jpg',
        name: 'لينا محمد',
        phone: 1234567890,
        ticketNo: 'C-107',
        price: 50,
        cinemaNames: 'سينما مصر , مول العرب , برج الأطنان , سرايا القبة, صيدناوي مول',
        PersonsNo: 1,
        buyTimes: 'مرة واحدة',
        ticketType: {
          ticketNo: 'تذكرة رقم 45',
          format: 'pdf',
          fileSize: '9mb',
        },
      },
      {
        image: 'assets/images/person2.jpg',
        name: 'مصطفى محمد',
        phone: 9876543210,
        ticketNo: 'C-108',
        price: 55,
        cinemaNames: 'سينما مصر , مول العرب , برج الأطنان , سرايا القبة, صيدناوي مول',
        PersonsNo: 2,
        buyTimes: 'مرة واحدة',
        ticketType: {
          ticketNo: 'تذكرة رقم 45',
          format: 'pdf',
          fileSize: '9mb',
        },
      },
      {
        image: 'assets/images/person3.jpg',
        name: 'سميرة أحمد',
        phone: 1234567890,
        ticketNo: 'C-109',
        price: 60,
        cinemaNames: 'سينما مصر , مول العرب , برج الأطنان , سرايا القبة, صيدناوي مول',
        PersonsNo: 3,
        buyTimes: 'مرتين',
        ticketType: {
          ticketNo: 'تذكرة رقم 45',
          format: 'pdf',
          fileSize: '9mb',
        },
      },
      {
        image: 'assets/images/person.jpg',
        name: 'محمود يوسف',
        phone: 9876543210,
        ticketNo: 'C-110',
        price: 65,
        cinemaNames: 'سينما مصر , مول العرب , برج الأطنان , سرايا القبة, صيدناوي مول',
        PersonsNo: 4,
        buyTimes: 'مرة واحدة',
        ticketType: {
          ticketNo: 'تذكرة رقم 45',
          format: 'pdf',
          fileSize: '9mb',
        },
      },
      {
        image: 'assets/images/person2.jpg',
        name: 'أسماء علي',
        phone: 1234567890,
        ticketNo: 'C-111',
        price: 70,
        cinemaNames: 'سينما مصر , مول العرب , برج الأطنان , سرايا القبة, صيدناوي مول',
        PersonsNo: 2,
        buyTimes: 'أربع مرات',
        ticketType: {
          ticketNo: 'تذكرة رقم 45',
          format: 'pdf',
          fileSize: '9mb',
        },
      },
      {
        image: 'assets/images/person3.jpg',
        name: 'خالد محمد',
        phone: 9876543210,
        ticketNo: 'C-112',
        price: 75,
        cinemaNames: 'سينما مصر , مول العرب , برج الأطنان , سرايا القبة, صيدناوي مول',
        PersonsNo: 1,
        buyTimes: 'ثلاث مرات',
        ticketType: {
          ticketNo: 'تذكرة رقم 45',
          format: 'pdf',
          fileSize: '9mb',
        },
      },
    ];

  }

  ngAfterViewInit() {
    this.cdr.detectChanges();
  }

  onSearchKeyChange() {
    this.cdr.detectChanges();
  }

  changeState() {
    this.isActivated = !this.isActivated;
    if (this.isActivated) {
      this.toggleState =  ' مفعلة';
    }else{
      this.toggleState =  'غير مفعلة';
    }
  }



}
