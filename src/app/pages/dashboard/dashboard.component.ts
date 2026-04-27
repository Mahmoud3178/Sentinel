import { Component, OnInit } from '@angular/core';
import { ScanService } from '../../core/scan.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-dashboard',
  standalone: true,
   imports: [CommonModule],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss'
})
export class DashboardComponent implements OnInit {
  domain = 'example.com';

  findings = [
    { name: 'Stored Cross-Site Scripting (XSS)', severity: 'high',   endpoint: '/api/v1/user/settings',   status: 'open',      dot: 'high' },
    { name: 'Broken Access Control',              severity: 'high',   endpoint: '/admin/dashboard/config', status: 'open',      dot: 'high' },
    { name: 'SQL Injection Attempt',              severity: 'medium', endpoint: '/search?query=id',        status: 'reviewing', dot: 'medium' },
    { name: 'Information Disclosure',             severity: 'low',    endpoint: '/etc/version',            status: 'archived',  dot: 'info' },
  ];

  assets = [
    { name: 'api.example.com',  ip: '192.168.1.104', seen: 'Just Now',  fresh: true },
    { name: 'dev.example.com',  ip: '192.168.1.102', seen: '3 mins ago',fresh: false },
    { name: 'mail.example.com', ip: '192.168.1.115', seen: '5 mins ago',fresh: false },
  ];

  constructor(private scanService: ScanService) {}
  ngOnInit() { this.domain = this.scanService.domain(); }
}
