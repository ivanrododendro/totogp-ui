import { MessageService } from 'primeng/components/common/messageservice';
import { Injectable, ErrorHandler } from '@angular/core';

@Injectable()
export class TotogpErrorHandler implements ErrorHandler {

  handleError(error: any): void {
  /*   this.messageService.add({
      severity: 'error',
      summary: 'An error occurred' + ' ',
      detail: error.message
    }); */

    window.alert('An error occurred : ' + error.message);

    console.error('an error occurred : ' + error.message);
  }

  constructor(private messageService: MessageService) { }
}
