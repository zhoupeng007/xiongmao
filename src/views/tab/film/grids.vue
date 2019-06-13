<template>
    <div v-if="datalist" class="grids">
      <div class="grid">
          <img :src="datalist[1].imageUrl" alt="" class="tu1">
          <span class="title">{{datalist[1].title}}</span>
          <br><span class="cheng">{{datalist[1].text}}</span>
      </div>
      <div class="grid1">
            <img :src="datalist[2].imageUrl" alt="">
            <span class="title1">{{datalist[2].title}}</span>
            <br><span class="fen">{{datalist[2].text}}</span>
      </div>
      <div class="grid2">
            <img :src="datalist[3].imageUrl" alt="">
             <span class="title2">{{datalist[3].title}}</span>
            <br><span class="lv">{{datalist[3].text}}</span>
      </div>
    </div>
</template>
<script>
import axios from 'axios'
export default {
  data () {
    return {
      datalist: null
    }
  },
  mounted () {
    axios.get('api/tab/1?start=0').then(res => {
      console.log(res.data.data.gridsV2)
      this.datalist = res.data.data.gridsV2
    })
  }
}
</script>
<style>
*{
  padding: 0;
  margin: 0;
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
