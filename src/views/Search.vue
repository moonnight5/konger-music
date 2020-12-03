<template>
  <div class="search">
    <!-- 顶部返回 -->
    <div class="head">
      <components-header :title="title"></components-header>
    </div>
    <!-- 搜索 -->
    <div class="search-box">
      <van-search v-model="value" background="#99cccc" placeholder="搜索歌曲、歌手" @search="onSearch"/>
    </div>
    <!-- 搜索联想 -->
    <div class="suggest" v-show="showSuggest">
      <van-list class="suggest-box" v-model="loading" :finished="finished" finished-text="没有更多了" @load="onLoad">
        <ul>
          <li v-for="(item, index) in suggest" :key="index" @click="toPlay(item.id)">
            <i class="iconfont icon-iconfontbiaozhunmoban01-copy"></i>
            <span>{{item.name}}</span>
          </li>
        </ul>
      </van-list>
    </div>
    <!-- 热门搜索 -->
    <div class="hot-key">
      <h1 class="title">热门搜索</h1>
      <ul>
        <li class="item" v-for="(item,index) in hotKey" :key="index">
          <span>{{item.first}}</span>
        </li>
      </ul>
    </div>
    <!-- 搜索历史 -->
    <div class="hot-key" v-if="history.length > 0">
      <div class="his">
        <h1 class="title">搜索历史</h1>
        <van-icon name="delete" @click="deleteHistory"/>
      </div>
      <ul>
        <li class="item" v-for="(item,index) in history" :key="index">
          <span>{{item}}</span>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import componentsHeader from "../components/componentsHeader";
import api from "../api/index"
export default {
  data() {
    return {
      value: "",
      title: "搜索",
      showSuggest: false,
      loading: false,
      finished: false,
      param: {
        keywords: '',
        limit: 50
      },
      hotKey: [],
      history: [

      ],
      suggest: []
    };
  },
  created() {
    api.hotSearch().then(res => {
      this.hotKey = res.result.hots
    })
  },
  components: {
    componentsHeader
  },
  methods: {
    onSearch() {
      if(this.history.indexOf(this.value) === -1) {
        this.history.push(this.value)
      }
    },
    deleteHistory() {
      this.history.splice(0,this.history.length)
    },
    onLoad() {
      // 异步更新数据
      // setTimeout 仅做示例，真实场景中一般为 ajax 请求
      setTimeout(() => {
        // for (let i = 0; i < 10; i++) {
        //   this.suggest.push(this.suggest.length + 1);
        // }
        // 加载状态结束
        this.loading = false;
        // 数据全部加载完成
        if (this.suggest.length >= 50) {
          this.finished = true;
        }
      }, 1000);
    },
    toPlay(id) {
      this.$router.push({path: '/play/:id',query: {id:id}})
    },
  },
  watch: {
    value(newVal,oldVal) {
      if (newVal !== '') {
        this.showSuggest = true;
        this.param.keywords = newVal;
        api.searchRes(this.param).then(res => {
          this.suggest = res.result.songs
        })
      } else {
        this.showSuggest = false;
      }
    },
  },
};
</script>

<style scoped>
.search {
  width: 100%;
  height: 100%;
  color: #ffffff;
  background-color: #dbf0f7;
}
.head,
.search-box {
  width: 100%;
  background-color: #99cccc;
}
.suggest .suggest-box {
  background-color: #99cccc;
  padding: 0.5rem;
  font-size: 0.68rem;
  position: absolute;
  width: 100%;
  z-index: 99;
}
.suggest .suggest-box ul li {
  display: flex;
  align-items: center;
  height: 0.75rem;
  line-height: 0.75rem;
  margin-bottom: 0.56rem;
}
.suggest .suggest-box ul li span {
  width: 10rem;
  margin-left: 0.5rem;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
}
.suggest .suggest-box ul li i {
  font-size: 0.68rem;
}
.hot-key,
.history {
  margin: 0.5rem;
}
.hot-key .title {
  font-size: 0.7rem;
  margin-bottom: 0.4rem;
}
.hot-key .item {
  font-size: 0.5rem;
  display: inline-block;
  padding: 0.4rem;
  margin: 0 0.5rem 0.5rem 0;
  background-color: #33cccc;
  border-radius: 0.1rem;
}
.his {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
}
</style>