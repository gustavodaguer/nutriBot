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
  },
  CANT_SAVE: {
    code: prefix('04'),
    message: 'Error saving to database!'
  },
  CANT_GET: {
    code: prefix('05'),
    message: 'Error getting from database!'
  },
  CANT_UPDATE: {
    code: prefix('06'),
    message: 'Error when updating data in the database!'
  },
  CANT_DELETE: {
    code: prefix('06'),
    message: 'Error when deleting from database!'
  },
  NOT_FOUND_FOOD: {
    code: prefix('07'),
    message: 'Not found person!'
  }
} as const;