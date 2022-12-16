import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: '[app-tablerow]',
  templateUrl: './tablerow.component.html',
  styleUrls: ['./tablerow.component.scss']
})
export class TablerowComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  @Input() character: any;
  @Input() columns: string[]=[];
}
