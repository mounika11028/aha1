import { Component } from '@angular/core';
import { CinematreatsService } from '../services/cinematreats.service';

@Component({
  selector: 'app-cinematreats',
  templateUrl: './cinematreats.component.html',
  styleUrls: ['./cinematreats.component.css']
})
export class CinematreatsComponent {
  images:any;
    constructor(private service:CinematreatsService) {}
    ngOnInit() {
      this.service.onsubmit().subscribe(data=>this.images=data);
    }
}
