// index.js
Page({
  data: {
    message: '你好，贺京',
    movies: [
      '大话西游',
      '大白',
      '甄嬛传'
    ],
    counter: 0
  },
  handlerAdd: function(){
    const counter = this.data.counter + 1
    this.setData({counter})
  },
  handlerDec: function(){
    const counter = this.data.counter - 1
    this.setData({counter})
  }
})
