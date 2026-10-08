import { Component } from '@angular/core';
import { LatestreleaseService } from '../services/latestrelease.service';

@Component({
  selector: 'app-latestrelease',
  templateUrl: './latestrelease.component.html',
  styleUrls: ['./latestrelease.component.css']
})
export class LatestreleaseComponent {
  images:any;
  constructor(private service:LatestreleaseService) {}
  ngOnInit() {
    this.service.onsubmit().subscribe(data=>this.images=data);
  }
}
