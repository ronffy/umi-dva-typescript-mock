import request from '../utils/request';

export async function queryMenu() {
  return request({
    url: '/api/menu'
  });
}
