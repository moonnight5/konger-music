<template>
  <div class="songList">
    <div class="songList-item" v-for="(item, index) in songList" :key="index">
      <div class="name" @click="toPlay(item.songs[0].id)">{{item.songs[0].name}}</div>
      <div class="songer" v-show="songer" @click="toSongerDetail(item.songs[0].ar[0].id)">{{item.songs[0].ar[0].name}}</div>
      <div class="time">{{Math.floor(item.songs[0].dt / 60000)}}:{{Math.floor((item.songs[0].dt % 60000)/1000)}}</div>
    </div>
  </div>
</template>

<script>
  import api from '../api/index'
  export default {
    props:['trackIds','songer'],
    data() {
      return {
        songList: [],
        newTrackIds: []
      }
    },
    created() {

    },
    methods: {
      toPlay(id) {
        this.$router.push({path: '/play/:id',query: {id:id}})
      },
      toSongerDetail(id) {
        this.$router.push({path: '/songerDetail/:id',query: {id:id}})
      },
    },
    watch: {
      trackIds(oldVal,newVal) {
        this.newTrackIds = newVal
        this.newTrackIds.forEach(element => {
          // console.log(element)
          let param = { ids : element}
          api.getSongDetail(param).then(res => {
            this.songList.push(res)
          })
        })
        // console.log(this.songList)
      }
    },
  }
</script>

<style scoped>
.songList {
  padding: 0.3rem;
  font-size: 0.6rem;
}
.songList-item {
  display: flex;
  flex-direction: row;  
  align-items: center;
  justify-content: space-between;
  height: 1.2rem;
  border-bottom: 1px solid #33cccc
}
.songList-item .name {
  width: 7rem;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 1;
  -webkit-box-orient: vertical;
} 
.songList-item .songer {
  width: 4rem;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  /* margin-left: 0.4rem; */
}
.songList-item .time {
  width: 1rem;
  /* margin-left: 0.4rem; */
}
</style>