import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';
import { ScanService } from '../../core/scan.service';

interface TrafficBar { height: number; delay: number; }

@Component({
  selector: 'app-progress',
  standalone: true,
  templateUrl: './progress.component.html',
  styleUrl: './progress.component.scss'
})
export class ProgressComponent implements OnInit, OnDestroy {
  domain = 'example.com';
  trafficBars: TrafficBar[] = [];

  private timer: any;

  phases = [
    { num: '01', name: 'Asset Discovery', sub: '24 assets found', status: 'done' },
    { num: '02', name: 'Port Scanning',   sub: '6 ports identified', status: 'running' },
    { num: '03', name: 'JS Analysis',     sub: 'Queued', status: 'queued' },
    { num: '04', name: 'Fuzzing',         sub: 'Queued', status: 'queued' },
    { num: '05', name: 'Vuln Scanning',   sub: 'Queued', status: 'queued' },
  ];

  constructor(private router: Router, private scanService: ScanService) {}

  ngOnInit() {
    this.domain = this.scanService.domain();
    this.buildTrafficBars();
  }

  buildTrafficBars() {
    const heights = [30,45,20,55,35,60,25,50,40,70,30,55];
    this.trafficBars = heights.map(h => ({ height: h, delay: Math.random() * 2 }));
  }

  goToDashboard() { this.router.navigate(['/dashboard']); }

  ngOnDestroy() { clearTimeout(this.timer); }
}
