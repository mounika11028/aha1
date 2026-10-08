import { Component } from '@angular/core';
import { MysteryandsupernaturaService } from '../services/mysteryandsupernatura.service';

@Component({
  selector: 'app-mysteryandsupernatural',
  templateUrl: './mysteryandsupernatural.component.html',
  styleUrls: ['./mysteryandsupernatural.component.css']
})
export class MysteryandsupernaturalComponent {
  images:any;
    constructor(private service:MysteryandsupernaturaService) {}
    ngOnInit() {
      this.service.onsubmit().subscribe(data=>this.images=data);
    }
}
