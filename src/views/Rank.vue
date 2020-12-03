<template>
  <div class="rank">
    <!-- 飙升榜 -->
    <div class="rank-box">
      <div class="rank-title rank-up">飙升榜</div>
      <div class="rank-content">
        <div class="song-box" v-for="(item, index) in upSong" :key="index">
          <div class="img" @click="toPlay(item.al.id)">
            <img v-lazy="item.al.picUrl" />
            <i class="iconfont icon-bofang"></i>
          </div>
          <div class="song">
            <div class="song-name">{{item.al.name}}</div>
            <div class="song-artist">{{item.ar[0].name}}</div>
          </div>
        </div>
      </div>
    </div>
    <!-- 新歌榜 -->
    <div class="rank-box">
      <div class="rank-title rank-new">新歌榜</div>
      <div class="rank-content">
        <div class="song-box" v-for="(item, index) in newSong" :key="index">
          <div class="img" @click="toPlay(item.al.id)">
            <img v-lazy="item.al.picUrl" />
            <i class="iconfont icon-bofang"></i>
          </div>
          <div class="song">
            <div class="song-name">{{item.al.name}}</div>
            <div class="song-artist">{{item.ar[0].name}}</div>
          </div>
        </div>
      </div>
    </div>
    <!-- 原创榜 -->
    <div class="rank-box">
      <div class="rank-title rank-original">原创榜</div>
      <div class="rank-content">
        <div class="song-box" v-for="(item, index) in originalSong" :key="index">
          <div class="img" @click="toPlay(item.al.id)">
            <img v-lazy="item.al.picUrl" />
            <i class="iconfont icon-bofang"></i>
          </div>
          <div class="song">
            <div class="song-name">{{item.al.name}}</div>
            <div class="song-artist">{{item.ar[0].name}}</div>
          </div>
        </div>
      </div>
    </div>
    <!-- 热歌榜 -->
    <div class="rank-box">
      <div class="rank-title rank-hot">热歌榜</div>
      <div class="rank-content">
        <div class="song-box" v-for="(item, index) in hotSong" :key="index">
          <div class="img" @click="toPlay(item.al.id)">
            <img v-lazy="item.al.picUrl" />
            <i class="iconfont icon-bofang"></i>
          </div>
          <div class="song">
            <div class="song-name">{{item.al.name}}</div>
            <div class="song-artist">{{item.ar[0].name}}</div>
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
      upSong: [],
      newSong: [],
      originalSong: [],
      hotSong: []
    };
  },
  created() {
    api.rankUpSong().then(res => {
      this.upSong = res.playlist.tracks.slice(0, 10);
    });
    api.rankNewSong().then(res => {
      this.newSong = res.playlist.tracks.slice(0, 10);
    });
    api.rankOriginalSong().then(res => {
      this.originalSong = res.playlist.tracks.slice(0, 10);
    });
    api.rankHotSong().then(res => {
      this.hotSong = res.playlist.tracks.slice(0, 10);
    });
  },
  methods: {
    toPlay(id) {
      this.$router.push({path: '/play/:id',query: {id:id}})
    },
  },
};
</script>

<style scoped>
.rank {
  padding: 0.4rem;
}
.rank-box {
  width: 100%;
  background-color: #ffffff;
  margin-bottom: 1.5rem;
}
.rank-title {
  height: 2.5rem;
  line-height: 2.5rem;
  padding: 0.5rem;
  font-size: 1.6rem;
  color: #ffffff;
  font-style: italic;
}
.rank-up {
    background-color: #7ca3e0;
}
.rank-new {
  background-color: #69c4ca;
}
.rank-original {
  background-color: #d26986;
}
.rank-hot {
  background-color: #c17867;
}
.rank-content {
  padding: 0.2rem;
}
.song-box {
  border-bottom: 1px solid#dbf0f7;
  display: flex;
  height: 2rem;
  padding: 0.2rem;
}
.song-box .img {
  height: 100%;
  position: relative;
}
.song-box .img img {
  height: 100%;
}
.song-box i {
  font-size: 0.8rem;
  color: #ffffff;
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
}
.song-box .song {
  width: 100%;
  margin-left: 0.3rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.song-name {
  font-size: 0.6rem;
}
.song .song-artist {
  color: #cccccc;
  font-size: 0.56rem;
}
</style>