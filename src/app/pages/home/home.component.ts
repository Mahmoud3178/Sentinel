import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { FooterComponent } from '../../components/footer/footer.component';
import { ScanService } from '../../core/scan.service';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [FormsModule, FooterComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {
  domain = '';

  constructor(private router: Router, private scanService: ScanService) {}

  startScan() {
    this.scanService.setDomain(this.domain);
    this.router.navigate(['/scan']);
  }
}
