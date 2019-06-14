<template>
  <div>
    <headersearch></headersearch>
    <div class="hot_search">
      <p>热门搜索</p>
      <ul class="flex">
        <li
          v-for="(hots,index) in hotlist"
          :key="index"
          v-show="index <= 10"
          @click="toseaech(hots.word)"
        >{{hots.word}}</li>
      </ul>
    </div>
    <div class="categories">
      <p>商品分类</p>
      <ul class="flex">
        <li
          v-for="(categories,index) in categorieslist"
          v-show="index !== 0"
          :key="categories.id"
          @click="tabclick(categories.id)"
        >{{categories.name}}</li>
      </ul>
    </div>
  </div>
</template>
<script>
import axios from 'axios'
import headersearch from '@/views/tab/search/header_search'
export default {
  data () {
    return {
      hotlist: [],
      categorieslist: []
    }
  },
  components: {
    headersearch
  },
  methods: {
    toseaech (id) {
      this.$router.push(`/s/${id}`)
    },
    tabclick (id) {
      window.location.href = `/#/tab/${id}`
    }
  },
  beforeCreate () {
    this.$store.commit('navcisshow')
  },
  beforeDestroy () {
    this.$store.commit('navcisshow')
  },
  mounted () {
    axios.get('http://www.xiongmaoyouxuan.com/api/search/home').then(res => {
      console.log(res.data.data.hotWords)
      this.hotlist = res.data.data.hotWords
    })
    axios.get('http://www.xiongmaoyouxuan.com/api/tabs?sa=').then(res => {
      console.log(res.data.data.list)
      this.categorieslist = res.data.data.list
    })
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
.hot_search {
  overflow: hidden;
  p {
    color: #877a73;
    font-size: 0.4rem;
    margin: 0.533rem;
  }
}
.categories {
  overflow: hidden;
  p {
    color: #877a73;
    font-size: 0.4rem;
    margin: 0.533rem;
  }
}
ul.flex {
  display: flex;
  flex-wrap: wrap;
  width: 100%;
  height: auto;
  margin: 0.533rem;

  li {
    width: 25%;
    text-align: center;
    color: #43240c;
    background-color: #f5f5f5;
    padding: 0.1rem 0.3rem;
    box-sizing: border-box;
    margin: 0 0.3rem 0.4rem 0;
    border-radius: 0.2rem;
    font-size: 0.3rem;
    display: inline-block;
  }
}
</style>
