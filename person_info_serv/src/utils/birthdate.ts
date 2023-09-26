import { MIDNIGHT } from "../constants/date";

export const get_birth_date = (birth_date: string) => {
  const date_of_birth_date = new Date(`${birth_date}${MIDNIGHT}`).getTime();
  const diff = Date.now() - date_of_birth_date;
  
  return Math.floor(diff / (365.25 * 24 * 60 * 60 * 1000));
}