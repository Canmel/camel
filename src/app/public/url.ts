import {host} from './HOST';

export const Urls = {
  GetBillTypes: `/return/thumbnail`,
  PROJECTS: `/project`,
  USERS: {
    ME: `/api/users/me`,
    PAGEQUERY: `/api/users`,
    CURRENT: `/api/users/current`,
    SAVE: `/api/users`
  },
  USER: `/users`,
  SESSION: {
    LOGIN: `/auth/login`,
    QRCODE: `/code/image`
  }
};
