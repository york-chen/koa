const axios = require('axios');

const instance = axios.create({
    baseURL: 'http://localhost:3100',
    timeout: 1000
});

let ajax = {
    get(url, option) {
        return instance.get(url, {
            params: option.params
        })
    },
    post(url, option) {
        return instance.post(url, {
            data: option.data
        })
    }
};

module.exports = ajax;

