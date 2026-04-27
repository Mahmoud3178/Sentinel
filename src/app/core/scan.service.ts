import { Injectable, signal } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class ScanService {
  domain = signal<string>('example.com');

  setDomain(d: string) {
    this.domain.set(d || 'example.com');
  }
}
