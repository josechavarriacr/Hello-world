import axios from 'axios';

export const HTTP = axios.create({
  baseURL: `'https://api.coindesk.com/v1/bpi/currentprice.json`,
})
