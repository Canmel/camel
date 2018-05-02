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
    DELETE: `/api/users/`,
    UPDATEROLES: `/api/users/roles`
  },
  ROLES: {
    PAGEQUERY: `/api/roles`,
    SAVE: `/api/roles`,
    DETAILS: `/api/roles/`,
    EDIT: `/api/roles/`,
    DELETE: `/api/roles/`,
    UPDATEMENUS: `/api/roles/menus`,
    ALL: `/api/roles/all`
  },
  MENUS: {
    PAGEQUERY: `/api/menus`,
    SAVE: `/api/menus`,
    DETAILS: `/api/menus/`,
    DELETE: `/api/menus/`,
    EDIT: `/api/menus/`,
    TOPMENUS: `/api/menus/tops`,
    SUBS: `/api/menus/subs`
  },
  OPTIONS: {
    MENUS: {
      STATUS: `/api/options/menus/statuses`,
      LEVEL: `/api/options/menus/levels`
    }
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
    MENUS: {
      LIST: `/app/menus`,
      ADD: `/app/menus/add`,
      EDIT: `/app/menus/edit`
    },
    MAIN: {
      HOME: `/app/home`
    }
  }
};
