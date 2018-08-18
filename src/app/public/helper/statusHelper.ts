import {Injectable} from '@angular/core';
import {Https} from '../https.service';
import {Urls} from '../url';

@Injectable()
export class StatusHelper {

  constructor(private http: Https) {
  }

  workflowType(): Promise<void | Object> {
    return this.http.get(Urls.WORKFLOW.TYPES).then(onfulfilled => {
      return Promise.resolve(onfulfilled);
    }, errorResp => {
      return Promise.reject(errorResp);
    });
  }
}
