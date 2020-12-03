<template>
  <div class="play">
    <div class="header">
      <components-header :title="title"></components-header>
    </div>
    <!-- 歌词 -->
    <div class="lyric">歌词加载中···</div>
    <!-- 播放控件 -->
    <div class="controls">
      <audio ref="audio" :src="url"></audio>
      <div class="player">
        <i class="iconfont icon-nextvideo-copy"></i>
        <i v-if="isPlay" @click="playOrPause" class="iconfont icon-com icon-bofang"></i>
        <i v-else @click="playOrPause" class="iconfont icon-com icon-zanting"></i>
        <i class="iconfont icon-prev"></i>
      </div>
      <div class="progress">
        <span>0:00</span>
        <van-progress class="van-progress" :percentage="50" :show-pivot="false" />
        <span>4:32</span>
      </div>
      <div class="function">
        <i class="iconfont icon-xinaixin"></i>
        <i class="iconfont icon-taolun"></i>
        <i class="iconfont icon-xiazai"></i>
        <i class="iconfont icon-zhuanfa"></i>
      </div>
    </div>
  </div>
</template>

<script>
  import api from '../api/index'
  import componentsHeader from "../components/componentsHeader"
  // import { mapState } from '../store/index'
  export default {
    data() {
      return {
        isPlay: true,
        title: '歌名',
        url: `https://music.163.com/song/media/outer/url?id=33894312.mp3`
      }
    },
    components: {
      componentsHeader
    },
    created() {
      this.$store.commit('resetPlay')
      this.$store.commit('newId',this.$route.query.id)
      // common.state.id = this.$route.query.id
      this.url = `https://music.163.com/song/media/outer/url?id=${this.$route.query.id}.mp3`
    },
    computed: {
      play() {
        return this.$store.state.play
      }
    },
    methods: {
      playOrPause() {
        this.isPlay = !this.isPlay
        if(!this.isPlay) {
          this.$refs.audio.play()
        } else {
          this.$refs.audio.pause()
        }
        this.$store.commit('changePlay')
      }
    },
  }
</script>

<style scoped>
.play {
  height: 100%;
  background-image: url('https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=35774776,1810969439&fm=26&gp=0.jpg');
}
.play i {
  color: #ffffff;
}
.lyric {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%,-50%);
  font-size: 1rem;
  color: #33cccc;
}
.controls {
  width: 100%;
  position: absolute;
  bottom: 0;
}
.controls .player {
  display: flex;
  justify-content: center;
  align-items: center;
}
.controls .player i {
  font-size: 1rem;
}
.controls .player .icon-com {
  font-size: 1.3rem;
  margin: 0 2rem;
}
.controls .progress {
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  margin-top: 0.8rem;
}
.controls .progress span {
  font-size: 0.56rem;
  color: #ffffff;
}
.controls .progress .van-progress {
  width: 10rem;
  margin: 0 0.4rem;
}
.controls .function {
  display: flex;
  justify-content: space-around;
  margin-top: 0.5rem;
  margin-bottom: 0.3rem;
}
.controls .function i {
  font-size: 1.3rem;
}
</style>