<template>
  <div class="home_nav">
      <div class="home">
        <router-link to="/" class="home_nav_items" tag="div" active-class="navswiperbor">今日推荐</router-link>
      </div>
      <div class="line"></div>
      <navSwiper :key="datalist.length">
        <!--  eslint-disable-line -->
        <div class="swiper-slide" v-for="data in datalist" :key="data.id" v-show="data.id !== 1" @click="xppluyou()">
          <router-link :to="`/tab/${data.id}`" tag="div" class="xppnav2" active-class="navswiperbor">{{data.name}}</router-link>
        </div>
      </navSwiper>
      <div class="dian" @click="navshow()"></div>
  </div>
</template>

<script>
import bus from '@/components/bus'
import axios from 'axios'
import navSwiper from '@/views/navbar/navSwiper'
export default {
  data () {
    return {
      datalist: []
    }
  },
  mounted () {
    axios.get('http://www.xiongmaoyouxuan.com/api/tabs?sa=').then(res => {
      console.log(res.data.data.list)
      this.datalist = res.data.data.list
    })
  },
  methods: {
    xppluyou () {
      console.log(this.$route.params.id)
      bus.$emit('xppluyou', this.$route.params.id)
    },
    navshow () {
      this.$store.commit('navisshow')
    }
  },
  components: {
    navSwiper
  }
}
</script>
<style lang="scss" scoped>
  .home_nav{
    position: relative;
    padding: 0 .4rem 0 .533rem;
    box-sizing: border-box;
    box-shadow: 1px 2px 5px hsla(0,11%,79%,.5);
    height: 1.333rem;
    font-size: 0;
    overflow: hidden;
    vertical-align: middle;
    .home{
      float: left;
      vertical-align: middle;
      height: 1.333rem;
      .home_nav_items{
        display: inline-block;
        height: 100%;
        box-sizing: border-box;
        margin-right: .2rem;
        font-size: .4rem;
        color: #6b4c10;
        height: 1.333rem;
        line-height: 1.35rem;
        overflow: hidden;
        margin-right: 0;
        cursor: pointer;
      }
      .navswiperbor{
        color: #f6c !important;
        border-bottom: 4px solid #f6c;
      }
    }
    .line{
        width: 1px;
        height: .633rem;
        margin: .35rem .1rem .35rem .25rem;
        background-color: #877a73;
        float: left;
      }
    .dian{
      background: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACQAAAAkCAYAAADhAJiYAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyhpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNi1jMDY3IDc5LjE1Nzc0NywgMjAxNS8wMy8zMC0yMzo0MDo0MiAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIDIwMTUgKE1hY2ludG9zaCkiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6ODNGMDI2MjQ3RkQzMTFFN0IyOEQ4NzZDRTYxNjM2QjIiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6ODNGMDI2MjU3RkQzMTFFN0IyOEQ4NzZDRTYxNjM2QjIiPiA8eG1wTU06RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0ieG1wLmlpZDowQ0VCNzBGRjdGQzkxMUU3QjI4RDg3NkNFNjE2MzZCMiIgc3RSZWY6ZG9jdW1lbnRJRD0ieG1wLmRpZDowQ0VCNzEwMDdGQzkxMUU3QjI4RDg3NkNFNjE2MzZCMiIvPiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/PkCOUykAAAGWSURBVHja7Jc/SwNBEMXvzsMIYm8piJzaiaYyoqD4EewFK8FCSz+ApYq2it/BRhAV45/KwlJCECztTyEG9HyzTI5lGEjEW3LFPviRMMzxJtm9fXdhlmVBmRQFJVPpBopXJka6Nl0106CXvqL+oRDsgxbImBbXQtE/Cu7Aj9VbBLkfDVQD26BiGVe4Ni8G2gULyqD/Ve5Xyk39AA7Al1Wn74fgUfTvcX/Ryv1iXsMdppveecmcKfQHox/ID+TDtc/hGvPnItiw8oxOzhNQF/0DYJPzr8g8y/1ooHFwCQZF0xqYBq9WbYtjxoWMH+2hKWWYgGuJqM04XC3jF/GyNJQGqt2L2pkI4SJl/GjJUjALlsUeugEf4qJbMAmqDtLe+HU29Sc47/HiN8anvR/IR8dfomNYue2v+e6TGgNzDqLD+NFA9NOflFO5wedNatWWwAUYcnQwViMO1kRpSJQ3jHVHw+R+NNALaCsNbSVSnh1uH+MXc5qvKo8fpyLpScf8Xl9zEB3Gr7Op68qzj6ZvcMT46OiLfgUYAO8Hew+TIqSvAAAAAElFTkSuQmCC);
      background-repeat: no-repeat;
      background-size: 100%;
      width: .54rem;
      height: .54rem;
      position: absolute;
      right: .4rem;
      top: 50%;
      margin-top: -.27rem;
    }
  }
</style>
