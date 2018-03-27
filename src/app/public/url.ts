import {host} from './HOST';

export const Urls = {
  GetBillTypes: host + `return/thumbnail`,
  PROJECTS: host + `project`,
  USERS: host + `users.json`,
  USER: host + `users`,
  SESSION: {
    LOGIN: host + `auth/login`,
    QRCODE: host + `code/image`
  }
};
