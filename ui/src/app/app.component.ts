import {Component} from '@angular/core';
import {ServerInfo} from "./serverInfo";
import {ServerInfoService} from './serverInfo.service';
import {NgbModal} from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [ServerInfoService]
})

export class AppComponent {
  serverInfo: ServerInfo;

  constructor(private serverInfoService: ServerInfoService, private modalService: NgbModal) {
  }

  getServerInfo(): void {
    this.serverInfoService.getServerInfo().then(serverInfo => this.serverInfo = serverInfo);
  }

  showAboutModal(content) {
    this.modalService.open(content)
  }

  ngOnInit(): void {
    this.getServerInfo();
  }

}

