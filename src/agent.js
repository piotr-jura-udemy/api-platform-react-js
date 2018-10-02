import superagentPromise from 'superagent-promise';
import _superagent from 'superagent';

const superagent = superagentPromise(_superagent, global.Promise);
const API_ROOT = 'http://localhost:8000/api';
const responseBody = response => response.body;

export const requests = {
  get: (url) =>
    superagent.get(`${API_ROOT}${url}`).then(responseBody),
  post: (url, body = null) =>
    superagent.post(`${API_ROOT}${url}`, body).then(responseBody)
};
