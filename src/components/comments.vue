<template>
  <div class="comment">
    <div class="comment-title">评论</div>
    <div class="comment-content">
      <van-pull-refresh v-model="refreshing" @refresh="onRefresh">
        <van-list v-model="loading" :finished="finished" finished-text="暂时就加载这么多了" @load="onLoad">
          <div class="comment-item" v-for="(item, index) in comments" :key="index">
            <div class="comment-up">
              <div class="comment-up-avatar">
                <img v-lazy="item.user.avatarUrl" />
              </div>
              <div class="comment-up-name">{{item.user.nickname}}</div>
            </div>
            <div class="comment-detail">{{item.content}}</div>
          </div>
        </van-list>
      </van-pull-refresh>
    </div>
  </div>
</template>

<script>
import api from "../api/index";
export default {
  props: ["param"],
  data() {
    return {
      comments: [],
      loading: false,
      finished: false,
      refreshing: false
    };
  },
  methods: {
    onLoad() {
      setTimeout(() => {
        if (this.refreshing) {
          // this.comments = [];
          this.refreshing = false;
        }
        api.getMvComment(this.param).then(res => {
          this.comments = this.comments.concat(
            res.comments.slice(this.comments.length, this.comments.length + 6)
          );
          // console.log(res.comments.slice(this.comments.length,this.comments.length+6));
        });
        this.loading = false;

        if (this.comments.length >= 100) {
          this.finished = true;
        }
      }, 1000);
    },
    onRefresh() {
      // 清空列表数据
      this.finished = false;

      // 重新加载数据
      // 将 loading 设置为 true，表示处于加载状态
      this.loading = true;
      this.onLoad();
    }
  }
};
</script>

<style scoped>
.comment {
  margin-top: 0.3rem;
}
.comment .comment-title {
  margin-bottom: 0.3rem;
  border-bottom: 2px solid #33cccc;
}
.comment-content .comment-item {
  padding: 0.2rem 0.1rem 0.3rem;
  border-bottom: 1px solid #33cccc;
}
.comment-content .comment-item .comment-up {
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-bottom: 0.25rem;
}
.comment-content .comment-item .comment-up .comment-up-avatar {
  width: 1.2rem;
  height: 1.2rem;
  margin-right: 0.3rem;
}
.comment-item .comment-up .comment-up-avatar img {
  width: 100%;
  height: 100%;
  border-radius: 50%;
}
.comment-content .comment-item .comment-up .comment-up-name {
  color: #33cccc;
  font-size: 0.5rem;
}
.comment-content .comment-item .comment-detail {
  font-size: 0.4rem;
  padding-left: 1.5rem;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
}
</style>