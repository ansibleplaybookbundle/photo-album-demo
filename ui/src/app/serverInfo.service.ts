import {Injectable} from '@angular/core';
import {ServerInfo} from "./serverInfo";
import {Headers, Http} from '@angular/http';
import 'rxjs/add/operator/toPromise';

@Injectable()
export class ServerInfoService {
  private serverInfoUrl = '/api/server-info';

  constructor(private http: Http) {
  }

  getServerInfo(): Promise<ServerInfo> {
    return this.http.get(this.serverInfoUrl)
      .toPromise()
      .then(response => {
        console.log(response.json());
        return response.json().serverInfo as ServerInfo
      })
      .catch(this.handleError);
  }

  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error);
    return Promise.reject(error.message || error);
  }
}


// @Injectable()
// export class ServerInfoService {
//   getServerInfo(): Promise<ServerInfo> {
//     return Promise.resolve({apiUrl: "http://api-url/goes/here"});
//   }
// }
