import { Component } from '@angular/core';
import { ClipboardService } from 'ngx-clipboard';
import { ToastrService } from 'ngx-toastr';
@Component({
  selector: 'app-ticket',
  templateUrl: './ticket.component.html',
  styleUrls: ['./ticket.component.css']
})
export class TicketComponent {
  ticketUrl : string = 'www.tazkty.com/473847';
  constructor(private _clipBoardService: ClipboardService, private toastr: ToastrService) { }
  
  copyToClipBoard() {
    this._clipBoardService.copyFromContent(this.ticketUrl);
    this.toastr.success('Copied to Clipboard', 'Success');
  }
}
