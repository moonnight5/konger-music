import Vue from 'vue'
import axios from 'axios'
import { Toast } from 'vant'
const vue = new Vue()

// axios配置
axios.defaults.timeout = 10000
axios.defaults.baseURL = 'http://musicapi.leanapp.cn'

// 返回状态判断
axios.interceptors.response.use((res) => {
  if (res.data.code !== 200) {
    Toast('网络异常')
    return Promise.reject(res)
  }
  return res
}, (error) => {
  Toast('网络异常')
  return Promise.reject(error)
})

export function fetchGet(url, param) {
  return new Promise((resolve, reject) => {
    axios.get(url, {
      params: param
    })
      .then(response => {
        resolve(response.data)
      }, err => {
        reject(err)
      })
      .catch((error) => {
        reject(error)
      })
  })
}

export default {
  // 推荐页 推荐mv,歌单，新音乐，电台
  recommendMv() {
    return fetchGet('/personalized/mv')
  },
  recommendSongSheet() {
    return fetchGet('/personalized')
  },
  recommendNewSong() {
    return fetchGet('/personalized/newsong')
  },
  recommendDjprogram() {
    return fetchGet('/personalized/djprogram')
  },
  // 歌手页
  recommendArtists(param) {
    return fetchGet('/artist/list',param)
  },
  // 排行版页 飙升榜，新歌榜，原创榜，热歌榜
  rankUpSong() {
    return fetchGet('/playlist/detail?id=19723756')
  },
  rankNewSong() {
    return fetchGet('/playlist/detail?id=3779629')
  },
  rankOriginalSong() {
    return fetchGet('/playlist/detail?id=2884035')
  },
  rankHotSong() {
    return fetchGet('/playlist/detail?id=3778678')
  },
  // 获取MV评论
  getMvComment(param) {
    return fetchGet('/comment/mv',param)
  },
  //获取歌单详情
  getSongSheetDetail(param) {
    return fetchGet('/playlist/detail',param)
  },
  //获取歌曲详情
  getSongDetail(param) {
    return fetchGet('/song/detail',param)
  },
  //获取歌手热门歌曲
  getArtistSong(param) {
    return fetchGet('/artists',param)
  },
  //搜索，热门搜索
  searchRes(param) {
    return fetchGet('/search',param)
  },
  hotSearch() {
    return fetchGet('/search/hot')
  }
}