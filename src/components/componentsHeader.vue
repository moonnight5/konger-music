<template>
  <div class="row">
    <van-row>
      <van-col span="3">
        <van-icon name="arrow-left" @click="goBack" />
      </van-col>
      <van-col class="center" span="18">{{title}}</van-col>
      <van-col class="right" span="3">
        <i class="iconfont icon-zhuye" @click="goHome"></i>
      </van-col>
    </van-row>
  </div>
</template>

<script>
export default {
  props: ['title'],
  methods: {
    goBack() {
      this.$router.go(-1)
    },
    goHome() {
      this.$router.push('/')
    }
  },
};
</script>

<style scoped>
.row {
  padding: 0.4rem 0.4rem 0;
  font-size: 0.8rem;
  color: #ffffff;
}
.row i {
  font-size: 1.2rem;
  color: #ffffff;
}
.row .center {
  text-align: center;
}
.row .right {
  text-align: right;
}
</style>