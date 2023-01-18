import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-paginador',
  templateUrl: './paginador.component.html',
  styleUrls: ['./paginador.component.scss']
})
export class PaginadorComponent implements OnInit{

  paginas:number[]=[];
  @Input('totalItems') totalItems!: number;
  pageSize: number=5;
  @Output() pageChanged = new EventEmitter<number[]>();
  currentPage:number=1;
  selectPageSize:number[]=[5,10,15,20,30]

  constructor(){

  }
  ngOnInit(){


    this.paginas=this.fillPaginas()
  }
  fillPaginas(){
    const size = this.totalItems/this.pageSize;
    const array: number[]=[];
    for (let index = 0; index < size; index++) {
      array[index]=index+1;

    }
    return array;
  }

  onChangePage(page:number){
    this.currentPage=page;
    console.log("Emitiendo ",this.currentPage)
    this.pageChanged.emit([this.currentPage,this.pageSize]);
  }

  onPreviusPage(){
    if(this.currentPage!=1){
      this.currentPage -=1;
    }
    this.pageChanged.emit([this.currentPage,this.pageSize]);
  }
  onNextPage(){
    this.currentPage += 1;
    this.pageChanged.emit([this.currentPage,this.pageSize]);
  }
  onSelectingPageSize(size:number){
    this.pageSize=size
    this.pageChanged.emit([this.currentPage,this.pageSize])
    this.fillPaginas() //cada que cambien de tamaño el numero de paginas disponibles tambien cambia 
  }
}
