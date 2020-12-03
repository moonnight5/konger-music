<template>
  <div class="songerDetail">
    <div class="header">
      <component-header :title="artist.name"></component-header>
    </div>
    <div class="songer-detail">
      <div class="songer">
        <div class="songer-img">
          <img v-lazy="artist.picUrl">
        </div>
        <div class="songer-desc">
          <div class="songer-name">{{artist.name}}</div>
          <div class="songer-description">简介:
            <span>{{artist.briefDesc}}</span>
          </div>
        </div>
      </div>
      <songList :trackIds="trackIds" :songer="showSonger"></songList>
    </div>
  </div>
</template>

<script>
  import componentHeader from '../components/componentsHeader'
  import api from '../api/index'
  import songList from '../components/songList'
  export default {
    data() {
      return {
        artist: {},
        trackIds: [],
        param: {
          id: 6542,
        },
        showSonger: false,
      }
    },
    components: {
      componentHeader,
      songList
    },
    created() {
      // console.log(this.$route.query.id)
      this.param.id = this.$route.query.id;
      api.getArtistSong(this.param).then(res => {
        this.artist = res.artist;
        res.hotSongs.forEach(element => {
          this.trackIds.push(element.id)
        });
      })
    },
  }
</script>

<style scoped>
  .header {
    background-color: #33cccc;
  }
  .songer-detail {
    padding: 0.3rem;
  }
  .songer-detail .songer {
    display: flex;
    flex-direction: row;
    font-size: 0.6rem;
  }
  .songer .songer-img {
    width: 5rem;
    height: 5rem;
    flex-shrink: 0;
  }
  .songer .songer-img img {
    width: 100%;
    height: 100%;
  }
  .songer .songer-desc {
    margin-left: 0.3rem;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }
  .songer .songer-desc .songer-name {
    color: #33cccc;
  }
  .songer .songer-desc .songer-description span {
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 4;
    -webkit-box-orient: vertical;
  }
</style> 