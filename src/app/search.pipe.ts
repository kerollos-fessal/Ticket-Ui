import { Pipe, PipeTransform } from '@angular/core';
import { Customer } from './interfaces/customer';

@Pipe({
  name: 'search'
})
export class SearchPipe implements PipeTransform {

  transform(customers: Customer[],searchKey: string): Customer[] {
    
    if (!searchKey) return customers; 
    
    searchKey = searchKey.trim().toLowerCase();

    return customers.filter((customer) =>
      customer.name.toLowerCase().includes(searchKey)
    );
  }

}
