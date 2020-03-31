import http from '@/utils/request'
export default function getUserInfos(params) {
    return http.get('shop/goods/category/all', params)
}