<template>
  <div>
    <div class="swiper-container photobanner">
      <div class="swiper-wrapper">
        <div class="swiper-slide" v-for="ban in photolist" :key="ban.id">
          <img :src="ban.url">
        </div>
      </div>
      <div class="swiper-pagination"></div>
    </div>
    <div class="distory">
      <p>
        <span class="taobao">淘宝</span>
        <span class="baoyou">包邮</span>
        {{depitlist.title}}
      </p>
      <P>
        <span class="price">￥{{depitlist.price}}</span>
        <span class="saleNum">月销量：{{depitlist.saleNum}}</span>
      </P>
    </div>
    <div class="imgdes">
      <ul>
        <li v-for="(img,index) in desclist" :key="index">
          <img :src="img.image.url" v-if="index !== 0" >
        </li>
      </ul>
    </div>
    <div class="bottom">
      <p class="bottom_p">去熊猫优选APP，商品详情更丰富</p>
    </div>
  </div>
</template>
<script>
import Swiper from 'swiper'
import axios from 'axios'
export default {
  data () {
    return {
      desclist: [],
      photolist: [],
      depitlist: []
    }
  },
  mounted () {
    console.log(this.$route.params.id)
    axios
      .get(`http://quan.lukou.com/api/detail?id=${this.$route.params.id}&normal=1&sa=`)
      .then(res => {
        console.log(res.data.data.detail)
        this.desclist = res.data.data.detail.descContentList
        this.photolist = res.data.data.detail.photo
        this.depitlist = res.data.data.detail
      })
  },
  updated () {
    // eslint-disable-next-line
    var mySwiper = new Swiper(".photobanner", {
      loop: true, // 循环模式选项
      // 如果需要分页器
      pagination: {
        el: '.swiper-pagination'
      },
      // 如果需要滚动条
      scrollbar: {
        el: '.swiper-scrollbar'
      },
      autoplay: {
        delay: 2500,
        disableOnInteraction: false
      }
    })
  },
  beforeCreate () {
    this.$store.commit('navcisshow')
  },
  beforeDestroy () {
    this.$store.commit('navcisshow')
  }
}
</script>
<style lang="scss" scoped>
.distory {
  background-color: white;
  width: 100%;
  font-size: 0.4rem;
  line-height: 1.6;
  color: #43240c;
  border: 0.02rem solid #ccc;
  .taobao {
    display: inline-block;
    width: 0.6rem;
    font-size: 0.27rem;
    color: #fff;
    text-align: center;
    letter-spacing: 0;
    background-color: #df2b2f;
  }
  .baoyou {
    display: inline-block;
    width: 0.8rem;
    text-align: center;
    font-size: 0.27rem;
    color: #c4b8ae;
    letter-spacing: 0;
    border: 0.01rem solid #ccc;
    margin-left: 0.05rem;
  }
  .price {
    display: inline-block;
    width: 1.2rem;
    font-size: 0.27rem;
    color: #fa585a;
    letter-spacing: 0;
  }
  .saleNum {
    display: inline-block;
    font-size: 0.27rem;
    color: #877a73;
    letter-spacing: 0;
  }
}
.imgdes img {
  width: 100%;
  height: auto;
}
.bottom{
  background-color: #43240c;
  height: 2.7rem;
  position: relative;
  overflow: hidden;

  .bottom_p{
    position: absolute;
    left: 0;
    top: 0;
    right: 0;
    bottom: 0;
    margin: auto;
    width: 90%;
    height: .5rem;
    line-height: .5rem;
    color: #fa521e;
    padding: .2rem;
    text-align: center;
    font-size: .4rem;
    border: 0.01rem solid #ccc;
    border-radius: 0.5rem;
  }
}
</style>
