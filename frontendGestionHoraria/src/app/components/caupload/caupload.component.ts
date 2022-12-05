import { Component, OnInit } from '@angular/core';
import { FileService } from 'src/app/services/file.service';
@Component({
  selector: 'app-caupload',
  templateUrl: './caupload.component.html',
  styleUrls: ['./caupload.component.scss']
})
export class CauploadComponent implements OnInit {

  imgRta= '';
  colaPendientes: string[] = ['OA2022.2-Licenciatura en ingles','OA2022.2-Historia','OA2022.2-Humanidades'];
  constructor(
    private fileService:FileService
  ) { }

  ngOnInit(): void {
  this.colaPendientes.push('OA2022.2-Licenciatura en ingles');

  }

  onUpload(event:Event){
    const element = event.target as HTMLInputElement;
    const file = element.files?.item(0);
    if(file){
      this.fileService.uploadFile(file)
      .subscribe(rta => {
        this.imgRta=rta.location;
      })
    }

  }
}
