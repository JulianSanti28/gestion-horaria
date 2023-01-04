import { Component } from '@angular/core';
import { Resource } from 'src/app/models/resource.model';

@Component({
  selector: 'app-resources-create',
  templateUrl: './resources-create.component.html',
  styleUrls: ['./resources-create.component.scss']
})
export class ResourcesCreateComponent {

  public visible = false;
  showResource:string=''
  resource!:Resource;
  getResourceForm(resource:Resource){
    //obteniendo el resource del form
    this.resource=resource
  }

  getInfoResource(){
    this.showResource=JSON.stringify(this.resource)
    this.visible=true
  }

  toggleLiveDemo() {
    this.visible = !this.visible;
  }

  handleLiveDemoChange(event: any) {
    this.visible = event;
  }
}
