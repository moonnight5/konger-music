<template>
  <div class="songSheet">
    <div class="header">
      <component-header :title="title"></component-header>
    </div>
    <div class="songSheet-content">
      <!-- 上传信息 -->
      <div class="create">
        <div class="cover">
          <img v-lazy="playList.coverImgUrl" />
        </div>
        <div class="create-detail">
          <div class="title">{{playList.name}}</div>
          <div class="creator">
            <div class="avatar">
              <img v-lazy="creator.avatarUrl" />
            </div>
            <div class="creator-name">{{creator.nickname}}</div>
          </div>
          <div class="tags">
            标签:<span v-for="(item, index) in playList.tags" :key="index">{{item}}</span>
          </div>
          <div class="count">
            歌曲：{{playList.trackCount}}
            <span>播放：{{playList.playCount > 10000 ? Math.floor(playList.playCount/10000) + '万' : playList.playCount}}</span>
          </div>
          <div class="description">简介：{{playList.description}}</div>
        </div>
      </div>
      <!-- 歌曲列表 -->
      <songList :trackIds="trackIds" :songer="showSonger"></songList>
    </div>
  </div>
</template>

<script>
import api from "../api/index";
import componentHeader from '../components/componentsHeader'
import songList from "../components/songList"
export default {
  data() {
    return {
      title: '歌单详情',
      param: {
        id: 347231
      },
      playList: {},
      creator: {},
      trackIds: [],
      showSonger: true
    };
  },
  components: {
    componentHeader,
    songList
  },
  created() {
    this.param.id = this.$route.query.id;
    api.getSongSheetDetail(this.param).then(res => {
      // console.log(res)
      this.playList = res.playlist;
      this.creator = this.playList.creator;
      let oldTrackIds = this.playList.trackIds.slice(0,50);
      oldTrackIds.forEach(element => {
        this.trackIds.push(element.id)
      });
      // console.log(this.trackIds)
    });
  }
};
</script>

<style scoped>
.header {
  background-color: #33cccc;
}
.songSheet-content {
  padding: 0.3rem;
}
.songSheet-content .create {
  display: flex;
  flex-direction: row;
  font-size: 0.6rem;
}
.songSheet-content .create .cover {
  width: 5rem;
  height: 5rem;
  flex-shrink: 0;
}
.songSheet-content .create .cover img {
  width: 100%;
  height: 100%;
}
.songSheet-content .create .create-detail {
  margin-left: 0.3rem;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}
.songSheet-content .create .create-detail .title {
  font-weight: bolder;
  font-size: 0.8rem;
}
.songSheet-content .create .create-detail .creator {
  display: flex;
  flex-direction: row;
}
.songSheet-content .create .create-detail .creator .avatar {
  width: 0.6rem;
  height: 0.6rem;
}
.songSheet-content .create .create-detail .creator .avatar img {
  width: 100%;
  height: 100%;
  border-radius: 50%;
}
.songSheet-content .create .create-detail .creator .creator-name {
  color: #33cccc;
  margin-left: 0.2rem;
}
.songSheet-content .create .create-detail .tags span {
  margin-left: 0.2rem;
  color: #33cccc;
}
.songSheet-content .create .create-detail .count span {
  margin-left: 0.2rem;
}
.songSheet-content .create .create-detail .description {
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 1;
  -webkit-box-orient: vertical;
}
</style>