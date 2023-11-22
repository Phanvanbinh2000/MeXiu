import superagent from 'superagent';
import { router } from 'umi';

const API_DOMAIN = "https://localhost:7189/"
export default {
    get: (url, data = {}) =>
        superagent
            .get(API_DOMAIN + url)
            .query(data)
            .set('Accept', 'application/json')
            .use(req =>
                req.on('error', err => {
                    if (err.status === 401) {
                        router.push({ pathname: '/login' });
                    }
                }),
            ),

    post: (url, data = {}) =>
        superagent
            .post(API_DOMAIN + url)
            .send(data)
            .set('Accept', 'application/json, multipart/form-data')
            .use(req =>
                req.on('error', err => {
                    if (err.status === 401 && url !== '/login') {
                        router.push({ pathname: '/login' });
                    }
                }),
            ),

    put: (url, data = {}) =>
        superagent
            .put(API_DOMAIN + url)
            .send(data)
            .set('Accept', 'application/json, multipart/form-data')
            .use(req =>
                req.on('error', err => {
                    if (err.status === 401) {
                        router.push({ pathname: '/login' });
                    }
                }),
            ),

    delete: (url, data = {}) =>
        superagent
            .delete(API_DOMAIN + url)
            .send(data)
            .set('Accept', 'application/json')
            .use(req =>
                req.on('error', err => {
                    if (err.status === 401) {
                        router.push({ pathname: '/login' });
                    }
                }),
            ),
};