import request from '../../../utils/request';

export function query() {
  return request({
    url: '/api/page1'
  });
}
