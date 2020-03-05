import { Component, OnInit , Input } from '@angular/core';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit {
  nums = [1 , 2 , 3, 4, 5, 6, 7, 8, 9, 10];
  @Input() val: any;
  constructor() {
  }
  ngOnInit(): void {
  }
}
