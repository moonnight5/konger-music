<template>
  <div id="app">
    <header-component
      v-show="(path === '/' || path === '/songer' || path === '/rank' || path === '/mine')"
    ></header-component>
    <miniPlayer-component v-show="(path === '/' || path === '/songer' || path === '/rank' || path === '/mine')" :play="play" :id="id"></miniPlayer-component>
    <router-view />
  </div>
</template>

<script>
import headerComponent from "./components/Header";
import miniPlayerComponent from './components/miniPlayer'

export default {
  name: "Home",
  data() {
    return {
      path: ""
    };
  },
  components: {
    headerComponent,
    miniPlayerComponent
  },
  mounted() {
    this.path = this.$route.path;
  },
  watch: {
    $route(to, from) {
      this.path = to.path;
    }
  },
  computed: {
    play() {
      return this.$store.state.play
    },
    id() {
      return this.$store.state.id
    }
  }
};
</script>


<style>
html,body,#app {
  height: 100%;
  overflow-x: hidden;
  background-color: #dbf0f7;
}
#app aplayer {
  position: absolute;
  bottom: 0;
}
</style>
