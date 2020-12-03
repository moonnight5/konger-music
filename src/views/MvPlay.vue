<template>
  <div class="mvPlay">
    <div class="header">
      <components-header :title="title"></components-header>
    </div>
    <div class="mvPlay-content">
      <div class="video">
        <video :src="mvUrl" controls></video>
      </div>
      <comments :param="param"></comments>
    </div>
  </div>
</template>

<script>
import componentsHeader from "../components/componentsHeader";
import comments from "../components/comments"
export default {
  data() {
    return {
      title: "mv名",
      mvUrl:
        "http://vodkgeyttp8.vod.126.net/cloudmusic/OTI3MDIwOTU=/443247c8ffa83039f0ef9e0a358a5938/f1222be4756e9cebe73fe91a2d6de9e9.mp4?wsSecret=436dfc936fe21e72b0d61d243a6ded32&wsTime=1604932628",
      param: {
        id: 10971187,
        limit: 100
      },
    };
  },
  components: {
    componentsHeader,
    comments
  },
  created() {
    this.param.id = this.$route.query.id;
  },

};
</script>

<style scoped>
.mvPlay-content {
  padding: 0 0.2rem;
}
.header {
  background-color: #33cccc;
}
.video {
  width: 100%;
  margin-top: 0.2rem;
}
.video video {
  width: 100%;
}
</style>