<template>
  <div>
    <div class="header_search">
      <p class="return">返回</p>
      <div class="nav-search">
        <div class="demo-input-suffix">
          <el-input placeholder="搜索商品,发现更多优选" prefix-icon="el-icon-search" v-model="myvalue"></el-input>
        </div>
      </div>
      <p class="header_title_search" @click="search()">搜索</p>
    </div>
  </div>
</template>
<script>
import bus from '@/components/bus'
export default {
  data () {
    return {
      myvalue: ''
    }
  },
  methods: {
    search () {
      if (this.myvalue !== '') {
        this.$router.push(`/s`)
        bus.$emit('searchvalue', this.myvalue)
      } else {
      }
    }
  }
}
</script>

<style lang="scss" scoped>
* {
  padding: 0;
  margin: 0;
}
.header_search {
  width: 100%;
  overflow: hidden;
  height: 1.333rem;
  line-height: 1.333rem;
  color: #877a73;
  font-size: 0;
  background-color: #fdde4a;
  box-shadow: 1px 2px 5px hsla(0, 11%, 79%, 0.5);
  .return {
    float: left;
    height: 1.333rem;
    line-height: 1.333rem;
    font-size: 0.4rem;
    margin-left: 0.533rem;
    color: #43240c;
  }
  .header_title_search {
    float: right;
    height: 1.333rem;
    line-height: 1.333rem;
    font-size: 0.4rem;
    margin-right: 0.3rem;
    display: inline-block;
    color: #43240c;
  }
  .demo-input-suffix {
    width: 100%;
    height: 0.5rem;
    margin-top: 0.1rem;
  }
  .nav-search {
    float: left;
    width: 65%;
    overflow: hidden;
    height: 1rem;
    line-height: 1rem;
    color: #877a73;
    background-color: #fdde4a;
    font-size: 0;
  }
}
</style>
