import instance from '../index.js'

export const getTableList = (params) => {
  return instance.request({
    url: '/get-data',
    method: 'get',
    params
  })
}
