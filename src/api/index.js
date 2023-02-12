/* eslint-disable */
import request from './request'
// 产品信息定义 条件查询-分页
export function productMessage (data) {
  return request({
    url: '/mes-produce-process/productMessageDefinition/by/list/productCodeOrName/body/page/' + data.pageNum + '/' + data.pageSize,
    method: 'post',
    data
  })
}
