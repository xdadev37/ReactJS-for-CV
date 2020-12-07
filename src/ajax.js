import axios from 'axios';

const BaseUrl = axios.create({
    baseURL: 'http://aedalat.ir'
});

export const ajax = {
    ...BaseUrl,
    post: (url, data) => {
        const token = window.localStorage.getItem('token');
        return BaseUrl.post(url, data, {
            headers: {
                Authorization: 'Bearer ' + token
            }
        })
    }
}