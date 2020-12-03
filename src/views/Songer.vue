<template>
  <div class="songer">
    <!-- 歌手分类 -->
    <!-- <div class="category">
      <div class="area category-layout">
        <div class="category-title">语种:</div>
        <div class="category-item">
          <div ref="area" class="category-item-name" @click="changeCategory('area')" v-for="(item, index) in area" :key="index">{{item}}</div>
        </div>
      </div>
      <div class="type category-layout">
        <div class="category-title">分类:</div>
        <div class="category-item">
          <div class="category-item-name" v-for="(item, index) in type" :key="index">{{item}}</div>
        </div>
      </div>
      <div class="initial category-layout">
        <div class="category-title">筛选:</div>
        <div class="category-item">
          <div class="category-item-name" v-for="(item, index) in initial" :key="index">{{item}}</div>
        </div>
      </div>
    </div> -->
    <!-- 歌手头像 -->
    <div class="artists">
      <div class="artist" v-for="(item, index) in currentPageArtists" :key="index" @click="toSongerDetail(item.id)">
        <div class="artist-avatar">
          <img v-lazy="item.picUrl">
        </div>
        <div class="artist-name">{{item.name}}</div>
      </div>
    </div>
    <!-- 分页器 -->
    <van-pagination class="pagination" v-model="currentPage" :total-items="90" :items-per-page="15" />
  </div>
</template>

<script>
import api from "../api/index";
export default {
  data() {
    return {
      param: {
        offset: 1,
        limit: 15
      },
      currentPageArtists: [],
      currentPage: 1
      // area: ['全部','华语','欧美','日本','韩国','其他'],
      // type: ['全部','男歌手','女歌手','其他'],
      // initial: ['热门','A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','X','Y','Z']
    };
  },
  created() {
    api.recommendArtists(this.param).then(res => {
      this.currentPageArtists = res.artists;
    });
  },
  methods: {
    toSongerDetail(id) {
      this.$router.push(
        {path: '/songerDetail/:id',query:{id: id}}
      )
    }
  },
  watch: {
    currentPage(newVal,oldVal) {
      this.param.offset = (newVal-1) * 15 + 1;
      api.recommendArtists(this.param).then(res => {
        this.currentPageArtists = res.artists;
        // console.log(this.currentPageArtists)
      })
    }
  },
};
</script>

<style scoped>
.songer {
  padding: 0.4rem;
}
.artists {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-between;
}
.artist {
  text-align: center;
  box-sizing: border-box;
  align-items: center;
  width: 4rem;
  padding: 0.4rem;
}
.artist .artist-avatar img{
  width: 3.2rem;
  height: 3.2rem;
  border-radius: 50%;
}
.artist .artist-name {
  font-size: 0.56rem;
  color: #33cccc;
}
.pagination {
  padding: 0.4rem;
  margin-top: 1rem;
}
/* .category {
  font-size: 0.6rem;
  border-bottom: 1px solid #33cccc;
  padding-bottom: 0.4rem;
}
.category .category-layout {
  display: flex;
  margin-top: 0.2rem;
}
.category .category-layout .category-title {
  flex-shrink: 0;
  margin-top: 0.2rem;
}
.category .category-layout .category-item {
  display: flex;
  flex-wrap: wrap;
}
.category .category-layout .category-item .category-item-name {
  padding: 0 0.5rem;
  margin-top: 0.2rem;
  border-right: 1px solid #33cccc;
}
.category .category-layout .category-item .category-item-name:last-child {
  border-right: 0;
} */
</style>