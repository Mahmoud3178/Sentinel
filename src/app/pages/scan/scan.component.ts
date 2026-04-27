import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { ScanService } from '../../core/scan.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-scan',
  standalone: true,
  imports: [FormsModule,CommonModule],
  templateUrl: './scan.component.html',
  styleUrl: './scan.component.scss'
})
export class ScanComponent {
  domain = '';
  advancedOpen = false;

  recentScans = [
    { domain: 'internal.corp.com', status: 'running',   risk: 'pending', time: '' },
    { domain: 'staging-env.io',    status: 'completed', risk: 'high',    time: '2 hours ago' },
    { domain: 'api-gateway.net',   status: 'completed', risk: 'low',     time: 'Yesterday' },
  ];

  constructor(private router: Router, private scanService: ScanService) {}

  startScan() {
    this.scanService.setDomain(this.domain);
    this.router.navigate(['/progress']);
  }

  toggleAdvanced() { this.advancedOpen = !this.advancedOpen; }
}
