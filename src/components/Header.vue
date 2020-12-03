<template>
  <div class="header">
    <div class="top">
      <i class="iconfont icon-toggle" @click="showPopup"></i>
      <div class="search-box" @click="toSearchVue">
        <input type="text" placeholder="搜索" readonly>
        <i class="iconfont icon-search" style="color:#cccccc"></i>
      </div>
      <i class="iconfont icon-zhuye" @click="toHomeVue"></i>
    </div>

    <div class="nav-bar">
      <router-link to="/">
        推荐
      </router-link>
      <router-link to="/songer">
        歌手
      </router-link>
      <router-link to="/rank">
        排行
      </router-link>
      <router-link to="/mine">
        我的
      </router-link>
    </div>

    <van-popup v-model="show"  position="left" :style="{ width: '6.5rem',height: '100%' }" >
      <menu-component></menu-component>
    </van-popup>
  </div>
</template>

<script>
  import menuComponent from './MenuPopup'
  export default {
    data() {
      return {
        show: false
      }
    },
    methods: {
      showPopup() {
        this.show = true
      },
      toSearchVue() {
        this.$router.push({path:'/search'})
      },
      toHomeVue() {
        if(this.$route.path !== '/') {
          this.$router.push('/')
        } else {
          return
        }
      }
    },
    components: {
      menuComponent
    }
  }
</script>

<style scoped>
.iconfont {
  color: #ffffff;
  font-size: 1.2rem;
}
.icon-search {
  color: #cccccc;
  font-size: 1rem;
}
.header a {
  color: #ffffff;
}
.header a.router-link-exact-active {
  color: #ff0033;
  font-size: 0.75rem;
}
.header {
  padding: 0.3rem;
  background: linear-gradient(to right,#f2a3ff,#7ce3ff);
}
.top {
  display: flex;
  justify-content: space-between;
  margin-top: 0.15rem;
}
.search-box {
  position: relative;
}
.search-box input {
  border: 0;
  width: 10rem;
  border-radius: 0.6rem;
  font-size: 1rem;
}
.search-box input::-webkit-input-placeholder {
  font-size: 0.56rem;
  position: relative;
  left: 1.3rem;
  bottom: 0.13rem;
}
.search-box i {
  font-size: 0.6rem;
  position: absolute;
  left: 0.5rem;
  top: 0.33rem;
}

.nav-bar {
  display: flex;
  justify-content:space-around;
  margin-top: 0.3rem;
  font-size: 0.7rem;
}
</style>