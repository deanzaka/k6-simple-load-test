import http from 'k6/http';
import { check } from 'k6';

const API_URL = process.env.API_URL || '';
const BEARER_TOKEN = process.env.BEARER_TOKEN || '';
const HTTP_METHOD = process.env.HTTP_METHOD || '';

export const options = {
  vus: 1,
  iterations: 40,
  // duration: '1s',
};

export default function () {
  if (!HTTP_METHOD || !API_URL || !BEARER_TOKEN) {
    throw new Error('HTTP_METHOD, API_URL, BEARER_TOKEN must be set');
  }

  const params = {
    headers: {
      accept: 'application/json',
      Authorization: `Bearer ${BEARER_TOKEN}`,
    },
  };

  let res;
  switch (HTTP_METHOD.toUpperCase()) {
    case 'GET':
      res = http.get(API_URL, params);
      break;
    case 'POST':
      res = http.post(API_URL, null, params);
      break;
    case 'PUT':
      res = http.put(API_URL, null, params);
      break;
    case 'DELETE':
      res = http.del(API_URL, null, params);
      break;
    default:
      throw new Error(`Unsupported HTTP method: ${HTTP_METHOD}`);
  }
  console.log(`Response: ${JSON.stringify(res)}`);
  check(res, { 'status is 200': (r) => r.status === 200 });
}