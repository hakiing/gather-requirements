const BASE_URL = 'http://123.207.32.32:9001'

class HttpRequest {
  request(url, method, params) {
    return new Promise((resolve, reject) => {
      wx.request({
        url: BASE_URL + url,
        data: params,
        method: method,
        success: (result) => {
          resolve(result.data)
        },
        fail: (res) => {
          reject(res)
        },
      })
    })
  }
  get(url, params) {
    return this.request(url, 'GET', params)
  }
  post(url,data){
    return this.request(url,'POST',data)
  }
}

const httpRequest = new HttpRequest()

export default httpRequest