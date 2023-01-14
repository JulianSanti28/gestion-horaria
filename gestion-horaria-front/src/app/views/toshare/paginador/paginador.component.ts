import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-paginador',
  templateUrl: './paginador.component.html',
  styleUrls: ['./paginador.component.scss']
})
export class PaginadorComponent implements OnInit{

  paginas:number[]=[];
  @Input('totalItems') totalItems!: number;
  @Input('pageSize') pageSize!: number;
  @Output() pageChanged = new EventEmitter<number>();
  currentPage:number=1;

  constructor(){

  }
  ngOnInit(){
    const page = this.totalItems/this.pageSize;
    console.log(page)
    this.paginas=this.fillPaginas(page)
  }
  fillPaginas(size:number){
    const array: number[]=[];
    for (let index = 0; index < size; index++) {
      array[index]=index+1;

    }
    return array;
  }

  onChangePage(page:number){
    this.currentPage=page;
    console.log("Emitiendo ",this.currentPage)
    this.pageChanged.emit(this.currentPage);
  }

  onPreviusPage(){
    if(this.currentPage!=1){
      this.currentPage -=1;
    }
    this.pageChanged.emit(this.currentPage);
  }
  onNextPage(){
    this.currentPage += 1;
    this.pageChanged.emit(this.currentPage);
  }
}
