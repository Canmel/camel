export const Urls = {
  GetBillTypes: `/return/thumbnail`,
  PROJECTS: `/project`,
  USERS: {
    ME: `/api/users/me`,
    PAGEQUERY: `/api/users`,
    CURRENT: `/api/users/current`,
    SAVE: `/api/users`,
    DETAILS: `/api/users/`,
    EDIT: `/api/users/`,
    DELETE: `/api/users/`
  },
  ROLES: {
    PAGEQUERY: `/api/roles`,
    SAVE: `/api/roles`,
    DETAILS: `/api/roles/`,
    DELETE: `/api/roles/`
  },
  MENUS: {
    PAGEQUERY: `/api/menus`,
    SAVE: `/api/menus`,
    DETAILS: `/api/menus/`,
    DELETE: `/api/menus/`
  },
  SESSION: {
    LOGIN: `/auth/login`,
    QRCODE: `/code/image`,
    LOGOUT: `/signOut`,
    REJECTED: `/anth/require`
  },
  BUSINESS: {
    USERS: {
      LIST: `/app/users`,
      ADD: `/app/users/add`,
      EDIT: `/app/users/edit`
    },
    ROLES: {
      LIST: `/app/roles`,
      ADD: `/app/roles/add`,
      EDIT: `/app/roles/edit`
    },
    MAIN: {
      HOME: `/app/home`
    }
  }
};
