import {Injectable} from '@angular/core';
import {Https} from '../https.service';
import {Urls} from '../url';
import {Properties} from '../properties';

@Injectable()
export class StatusHelper {

  constructor(private http: Https) {
  }

  workflowType(): Promise<void | Object> {
    return this.http.get(Urls.OPTIONS.WORKFLOW.TYPES).then(onfulfilled => {
      return Promise.resolve(onfulfilled);
    }, errorResp => {
      return Promise.reject(errorResp);
    });
  }

  reimbursementFlows(): Promise<void | Object> {
    return this.http.get(Urls.OPTIONS.WORKFLOW.TYPE, {type: Properties.STRING.ENUM.WORKFLOWTYPE.FINANCE}).then(onfulfilled => {
      return Promise.resolve(onfulfilled);
    }, errorResp => {
      return Promise.reject(errorResp);
    });
  }
}
