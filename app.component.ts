import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  serverElements = [{type: 'server', name: 'adam', content: 'jus test'}];


  onServerAdded(serverData:{Servername: string, serverContent: string}) {
    this.serverElements.push({
      type: 'server',
      name: serverData.Servername,
      content: serverData.serverContent
    });
  }

  onBlueprintAdded(blueprintData :{Servername: string, serverContent: string}) {
    this.serverElements.push({
      type: 'blueprint',
      name: blueprintData.Servername,
      content: blueprintData.serverContent
    });
  }

  onChangeFirst() {
    this.serverElements[0].name="Changed!"
  }

  onDestroy() {
    this.serverElements.splice(this.serverElements.length-1, 1);
  }
}
