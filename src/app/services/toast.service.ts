import { Injectable } from '@angular/core';
import { MessageService } from 'primeng/api';

@Injectable({
  providedIn: 'root',
})
export class ToastService {
  constructor(
    private _messageService: MessageService,
  ) {}

  showToast(severity: string, summary: string) {
    this._messageService.add({
      severity: severity,
      summary: summary,
    });
  }
}
