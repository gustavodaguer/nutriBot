const prefix = (code: string) => `00${code}` as const;

export const ERROR_MESSAGES = {
  CONNECT_DATABASE: {
    code: prefix('01'),
    message: 'Error when connect to the database!'
  },
  INTERNAL_SERVER: {
    code: prefix('02'),
    message: 'Internal Server Error!'
  },
  INVALID_DATA: {
    code: prefix('03'),
    message: 'Invalid data!'
  }
} as const;