<template>
  <div>
    <div v-if="datalist" class="grids">
      <div class="grid" @click="wbxclick3()">
          <img :src="datalist[1].imageUrl" alt="" class="tu1">
          <span class="title">{{datalist[1].title}}</span>
          <br><span class="cheng">{{datalist[1].text}}</span>
      </div>
      <div class="grid1" @click="wbxclick(datalist[2].url.split('='))">
            <img :src="datalist[2].imageUrl" alt="">
            <span class="title1">{{datalist[2].title}}</span>
            <br><span class="fen">{{datalist[2].text}}</span>
      </div>
      <div class="grid2" @click="wbxclick1()">
            <img :src="datalist[3].imageUrl" alt="">
             <span class="title2">{{datalist[3].title}}</span>
            <br><span class="lv">{{datalist[3].text}}</span>
      </div>
    </div>
    <div class="swiper-container baobao">
          <div class="leftfloat">
          <p class="weight">HOT</p>
          <p class="weight">——</p>
          <p class="hui">热销排行</p>
        </div>
    <div class="swiper-wrapper">
        <div class="swiper-slide" v-for="items in swiperlist" :key="items.id">
          <img :src="items.image" alt="">
          <p class="title">{{items.title}}</p>
          <p class="price">￥{{items.price}}</p>
        </div>
    </div>
</div>
    </div>
</template>
<script>
import axios from 'axios'
import Swiper from 'swiper'
export default {
  data () {
    return {
      datalist: null,
      swiperlist: []
    }
  },
  mounted () {
    axios.get('api/tab/1?start=0').then(res => {
      console.log(res.data.data.gridsV2)
      console.log(res.data.data.topList)
      this.datalist = res.data.data.gridsV2
      this.swiperlist = res.data.data.topList
    })
  },
  updated () {
    // eslint-disable-next-line
    var mySwiper = new Swiper('.baobao', {
      slidesPerView: 4,
      spaceBetween: 30,
      centeredSlides: true,
      pagination: {
        el: '.swiper-pagination',
        clickable: true
      }
    })
  },
  methods: {
    wbxclick (id) {
      // console.log(id)
      this.$router.push(`/column/${id[1]}`)
    },
    wbxclick1 () {
      this.$router.push(`/tab/26`)
    },
    wbxclick3 () {
      this.$router.push(`/tab/3`)
    }
    // wbxclick(id){
    //    this.$router.push(`/column/${id[3]}`)
    // }
  }
}
</script>
<style lang="scss" scoped>
*{
  padding: 0;
  margin: 0;
}
.swiper-container {
    width: 100%;
    height: auto;
    position: relative;
    img{
      width:100%;
      height: auto;
    }
    p.title{
      font-size: .29rem;
      width: 100%;
      height: .45rem;
      overflow: hidden;
      text-align: left;
      text-overflow: ellipsis;
      line-height: .45rem;
      color: #43240c;
      white-space: nowrap;
    }
    p.price{
      font-size: .29rem;
      height: .61rem;
      line-height: .61rem;
      text-align: center;
      vertical-align: bottom;
      color: #f60;

    }
    .leftfloat{
      width: .8rem;
      height: 3.44rem;
      font-size: .3rem;
      padding:0.1rem;
      background-color: #fee44e;
      position: absolute;
      left:0;
      top:0;
      z-index: 3;
      .weight{
        font-weight: 600;
      }
      .hui{
        color: #43240c;
      }
    }
}
.grids{
  box-sizing: border-box;
    margin: -.27rem 0 .27rem;
    padding: .27rem;
    overflow: hidden;
    background: #fff;
    box-shadow: 0 1px 0 0 #d9d9d9;
    padding-top: .5rem;
}
.grid{
  width: 3.56rem;
  height: 3.56rem;
  background-color: #fdf4e6;
 position: relative;
 float: left;
}
.grid .tu1{
  display: block;
    position: absolute;
    right: 0;
    bottom: 0;
    width: 3.55rem;
    height: 3.55rem;
    border: none;
}
.grid .title{
  margin: .27rem 0 0 .35rem;
  font-size: .27rem;
    font-weight: 400;
    line-height: .61rem;
    white-space: nowrap;
    color: #43240c;
    z-index: 9;
    position: absolute;
    top: .1rem;
}
.grid .cheng{
    margin: 0 0 0 .35rem;
    font-size: .2rem;
    font-weight: 500;
    color: #ff9e55;
    z-index: 9;
    position: absolute;
    top: 1rem;
}
.grid1{
  width: 3.3rem;
  float:right;
    z-index: 2;
    position: relative;
    /* margin-right: 1.867rem; */
    height: 1.7rem;
    font-size: .427rem;
    color: #877a73;
    background: #fff3f1;
     border-radius: 8%;
}
.grid1 img{
  z-index: 1;
    height: 1.5rem;
    position: absolute;
    border: none;
    right: .27rem;
    top: 0;
}
.grid1 .title1{
  margin: .27rem 0 0 .35rem;
    font-size: .24rem;
    font-weight: 400;
    line-height: .61rem;
    white-space: nowrap;
    color: #43240c;
    position: absolute;
    /* top: .rem; */
}
.grid1 .fen{
  margin: 0 0 0 .35rem;
    font-size: .2rem;
    font-weight: 500;
    color: #ff9e55;
}

.grid2{
  width: 3.3rem;
  float:right;
    z-index: 2;
    position: relative;
    /* margin-right: 1.867rem; */
    height: 1.7rem;
    font-size: .427rem;
    color: #877a73;
    background: #eef9fc;
    margin-top: .2rem;
    border-radius: 8%;
}
.grid2 img{
  z-index: 1;
    height: 1.5rem;
    position: absolute;
    border: none;
    right: .2rem;
    top: 0;
}
.grid2 .title2{
  margin: .27rem 0 0 .35rem;
   font-size: .24rem;
    font-weight: 400;
    line-height: .61rem;
    white-space: nowrap;
    color: #43240c;
    position: absolute;
    top: .1rem;
}
.grid2 .lv{
  margin: 0 0 0 .35rem;
    font-size: .2rem;
    font-weight: 500;
    color: #ff9e55;
}
</style>
