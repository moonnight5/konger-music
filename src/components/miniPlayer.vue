<template>
  <div class="miniPlayer">
    <van-popup v-model="show" position="bottom" :overlay="false" closeable close-icon-position="top-right" @closed="close">
      <aplayer ref="aplayer"
        :music="song"
      />
    </van-popup>
  </div>
</template>

<script>
import Aplayer from "vue-aplayer";
import api from "../api/index";
export default {
  props: ['play','id'],
  data() {
    return {
      show: false,
      param: {
        ids: 347230
      },
      song: {}
    }
  },
  created() {

  },
  watch: {
    play(newval,oldval) {
      // console.log(newval,'faddd')
      if(newval) {
        this.show = true
      } else if (!newval) {
        this.show = false
      }
    },
    id(newval,oldval) {
      this.param.ids = newval;
      api.getSongDetail(this.param).then(res => {
        // console.log(res)
        let obj = {}
        let ar = []
        obj.title = res.songs[0].name
        res.songs[0].ar.forEach(ele => {
          ar.push(ele.name)
        })
        obj.artist = ar.join()
        obj.src = `https://music.163.com/song/media/outer/url?id=${newval}.mp3`
        obj.pic = res.songs[0].al.picUrl
        this.song = obj
      })
    }
  },
  methods: {
    close() {
      // console.log(this.$refs.aplayer)
      this.$refs.aplayer.pause()
    }
  },
  components: {
    Aplayer
  }
}
</script>

<style scoped>
</style>