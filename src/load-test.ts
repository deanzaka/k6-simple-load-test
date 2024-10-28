import http from 'k6/http';
import { check } from 'k6';

const API_URL = process.env.API_URL || '';
const BEARER_TOKEN = process.env.BEARER_TOKEN || '';

export const options = {
  vus: 1,
  iterations: 40,
  // duration: '1s',
};

export default function () {
  if (!API_URL && !BEARER_TOKEN) {
    throw new Error('API_URL and BEARER_TOKEN must be set');
  }

  const params = {
    headers: {
      accept: 'application/json',
      Authorization: `Bearer ${BEARER_TOKEN}`,
    },
  };

  const res = http.put(API_URL, null, params);
  console.log(`Response: ${JSON.stringify(res)}`);
  check(res, { 'status is 200': (r) => r.status === 200 });
}