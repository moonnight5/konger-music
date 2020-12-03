<template>
  <div class="home">
    <div class="recommend">
      <!-- 推荐MV -->
      <div class="recommend-mv-title recommend-title">推荐MV</div>
      <div class="recommend-mv-content recommend-content">
        <div
          class="recommend-mv-box recommend-box"
          v-for="(item, index) in recommendMv"
          :key="index"
        >
          <img v-lazy="item.picUrl" @click="toMvPlay(item.id)" />
          <div class="word">
            <div class="mv-title description">{{item.name}}</div>
            <div class="layout-foot">
              <div class="mv-artist-name">{{item.artistName}}</div>
              <div class="mv-play-count">
                <i class="iconfont icon-yingshi"></i>
                <span>{{item.playCount > 10000 ? Math.floor(item.playCount/10000) + '万' : item.playCount}}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <!-- 推荐歌单 -->
      <div class="recommend-songSheet-title recommend-title">推荐歌单</div>
      <div class="recommend-songSheet-content recommend-content">
        <div
          class="recommend-songSheet-box recommend-box"
          v-for="(item, index) in recommendSongSheet"
          :key="index"
          @click="toSongSheetDetail(item.id)"
        >
          <img v-lazy="item.picUrl" />
          <div class="description">{{item.name}}</div>
          <div class="songSheet-play">
            <i class="iconfont icon-erji"></i>
            <span
              class="songSheet-playCount"
            >{{item.playCount > 10000 ? Math.floor(item.playCount/10000) + '万' : item.playCount}}</span>
          </div>
        </div>
      </div>
      <!-- 推荐电台 -->
      <div class="recommend-djprogram-title recommend-title">推荐电台</div>
      <div class="recommend-djprogram-content recommend-content">
        <div
          class="recommend-djprogram-box recommend-box"
          v-for="(item, index) in recommendDjprogram"
          :key="index"
        >
          <img v-lazy="item.picUrl" />
          <div class="description">{{item.name}}</div>
        </div>
      </div>
      <!-- 推荐新歌曲 -->
      <div class="recommend-djprogram-title recommend-title">推荐新歌曲</div>
      <div class="recommend-newSong-content">
        <div class="recommend-newSong-box" v-for="(item, index) in recommendNewSong" :key="index">
          <div class="img" @click="toPlay(item.id)">
            <img v-lazy="item.picUrl" />
            <i class="iconfont icon-bofang"></i>
          </div>
          <div class="newSong">
            <div class="newSong-name">{{item.name}}</div>
            <div class="newSong-artist-name">{{item.song.artists[0].name}}</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import api from "../api/index";
export default {
  data() {
    return {
      recommendMv: [],
      recommendSongSheet: [],
      recommendDjprogram: [],
      recommendNewSong: []
    };
  },
  created() {
    api.recommendMv().then(res => {
      this.recommendMv = res.result.slice(0, 4);
    });
    api.recommendSongSheet().then(res => {
      this.recommendSongSheet = res.result.slice(0, 6);
      // console.log(this.recommendSongSheet)
    });
    api.recommendDjprogram().then(res => {
      this.recommendDjprogram = res.result.slice(0, 6);
    });
    api.recommendNewSong().then(res => {
      this.recommendNewSong = res.result.slice(0, 10);
    });
  },
  methods: {
    toPlay(id) {
      this.$router.push({path: '/play/:id',query: {id:id}})
    },
    toMvPlay(id) {
      this.$router.push({path: '/mvPlay/:id',query:{id: id}})
    },
    toSongSheetDetail(id) {
      this.$router.push({path:'/songSheet/:id',query:{id: id}})
    }
  },
};
</script>

<style scoped>
.recommend {
  padding: 0.4rem;
}
.recommend-title {
  font-size: 1rem;
  color: #33cccc;
  margin-bottom: 0.3rem;
}
.recommend-content {
  box-sizing: border-box;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-between;
}
.recommend-box {
  box-sizing: border-box;
  background-color: #fff;
  border-radius: 0.1rem;
  margin-bottom: 0.3rem;
  font-size: 0.5rem;
}
.recommend-box img {
  width: 100%;
}
.recommend-mv-box {
  width: 6.8rem;
}
.recommend-mv-box .word {
  padding: 0 0.2rem 0.1rem;
}
.mv-title,
.description {
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}
.layout-foot {
  display: flex;
  justify-content: space-between;
}
.mv-play-count i {
  font-size: 0.52rem;
  margin-right: 0.1rem;
}
.recommend-songSheet-box {
  width: 4.5rem;
  position: relative;
}
.recommend-songSheet-box .songSheet-play {
  position: absolute;
  right: 0.2rem;
  top: 0.1rem;
}
.recommend-songSheet-box i {
  font-size: 0.56rem;
}
.recommend-songSheet-box .description {
  margin: 0 0.2rem 0.1rem;
}
.recommend-djprogram-box {
  width: 4.5rem;
}
.recommend-djprogram-box .description {
  margin: 0 0.2rem 0.1rem;
}
.recommend-newSong-content {
  font-size: 0.56rem;
}
.recommend-newSong-box {
  display: flex;
  flex-direction: row;
  background-color: #fff;
  height: 2.2rem;
  padding: 0.2rem;
  border-bottom: 1px solid#dbf0f7;
}
.recommend-newSong-box .img {
  height: 100%;
  position: relative;
}
.recommend-newSong-box .img img {
  height: 100%;
}
.recommend-newSong-box i {
  font-size: 0.8rem;
  color: #ffffff;
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%,-50%);
}
.newSong {
  margin-left: 0.4rem;
  padding: 0.2rem;
}
.newSong .newSong-name {
  font-size: 0.65rem;
}
.newSong .newSong-artist-name {
  margin-top: 0.2rem;
  color: #cccccc;
}
</style>

