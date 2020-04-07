import axios from "axios";
import qs from "qs";
const HttpRequest = axios.create({
    timeout: 5000, // 请求超时时间
    headers: {
        'Content-Type': 'application/x-www-form-urlencoded'
    },
});

//第一个匹配到的 url地址
console.log(process.env)
debugger
let targets = Object.keys(process.env).filter(v => v.includes('VUE_APP_URL'))[0]
let proxys = targets.split('_').pop();

axios.defaults.baseURL = process.env.NODE_ENV === 'production' ? process.env[targets] : "/" + (proxys.toLowerCase());
console.log('========ajax============');
console.log(process.env[targets], proxys)

axios.interceptors.response.use(response => {
        /**
         * code:200,接口正常返回;
         */
        const res = response.data
        if (res.code !== 0) {
            console.log(res.msg)
            return Promise.reject('error')
        }
        return response.data
    },
    error => {
        console.log('系统错误')
        return Promise.reject(error)
    }
)

HttpRequest.post = (url, data) => {
    return axios.post(url, qs.stringify(data), {})
};

HttpRequest.get = (url, data) => {
    return axios.get(url, { params: data })
};

export default HttpRequest;