import superagentPromise from 'superagent-promise';
import _superagent from 'superagent';

const superagent = superagentPromise(_superagent, global.Promise);
const API_ROOT = 'http://localhost:8000/api';
const responseBody = response => response.body;

let token = null;

const tokenPlugin = secured => {
  return (request) => {
    if (token && secured) {
      request.set('Authorization', `Bearer ${token}`);
    }
  };
};

export const requests = {
  get: (url, secured = false) => {
    return superagent.get(`${API_ROOT}${url}`).use(tokenPlugin(secured)).then(responseBody);
  },
  post: (url, body = null, secured = true) => {
    return superagent.post(`${API_ROOT}${url}`, body).use(tokenPlugin(secured)).then(responseBody);
  },
  upload: (url, file, secured = true) =>
    superagent.post(`${API_ROOT}${url}`).attach('file', file)
      .use(tokenPlugin(secured))
      .then(responseBody),
  delete: (url, secured = true) => {
    return superagent.del(`${API_ROOT}${url}`).use(tokenPlugin(secured)).then(responseBody)
  },
  setToken: (newJwtToken) => token = newJwtToken
};
