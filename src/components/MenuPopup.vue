<template>
  <div class="menu">
    <div class="head">
      <div class="avatar">
        <img
          src="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1561046766590&di=17072a311f48b6b871f5c75c6813e642&imgtype=0&src=http%3A%2F%2Fimg.juimg.com%2Ftuku%2Fyulantu%2F110713%2F84-110G316340479.jpg"
        />
      </div>
      <div class="name">月夜</div>
    </div>
    <div class="menu-item">
      <ul>
        <li>
          <router-link to="">
            <i class="iconfont icon-gerenzhongxin1"></i>
            <span>个人中心</span>
          </router-link>
        </li>
        <li>
          <router-link to=''>
            <i class="iconfont icon-yinxiao"></i>
            <span>音效调整</span>
          </router-link>
        </li>
        <li>
          <router-link to=''>
            <i class="iconfont icon-naozhong"></i>
            <span>定时关闭</span>
          </router-link>
        </li>
        <li>
          <router-link to=''>
            <i class="iconfont icon-tinggeshiqu"></i>
            <span>听歌识曲</span>
          </router-link>
        </li>
        <li>
          <router-link to=''>
            <i class="iconfont icon-bangzhu"></i>
            <span>帮助</span>
          </router-link>
        </li>
        <li>
          <router-link to=''>
            <i class="iconfont icon-shezhi"></i>
            <span>设置</span>
          </router-link>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.menu a {
  color: #e8e8e8;
  font-size: 0.56rem;
}
.menu a.router-link-exact-active {
  color: #e8e8e8;
}
.menu {
  color: #e8e8e8;
  background-color: #99cccc;
  height: 100%;
  padding-top: 1.5rem;
}
.head {
  text-align: center;
  font-size: 0.7rem;
}
.head .avatar img {
  border-radius: 50%;
  width: 2.3rem;
  height: 2.3rem;
}
.menu-item {
  padding-left: 0.8rem;
}
.menu-item ul li {
    margin-top: 0.8rem;
}
.menu-item ul li i {
  font-size: 0.7rem;
  margin-right: 0.7rem;
}
</style>