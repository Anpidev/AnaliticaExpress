import { Injectable } from '@angular/core';
import { MessageService } from 'primeng/api';

@Injectable({
  providedIn: 'root',
})
export class ToastService {
  constructor(private readonly messageService: MessageService) {}

  showToast(severity: string, summary: string, detail: string) {
    this.messageService.add({
      severity,
      summary,
      detail,
    });
  }
}
