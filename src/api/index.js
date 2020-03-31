import http from '@/utils/request'
export default function getUserInfos() {
    http.get('www.baidu.com', { name: "ddd" })
}