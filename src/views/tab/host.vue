<template>
    <div>
            <!-- <div class="split-line" v-for="data in title" :key="data.id">
               <span>{{data.categoriesTitle}}</span>
            </div> -->
            <div class="split-line">
                <span class="befor">━━━━━◆</span>
                <span class="text">潮流精选</span>
                <span class="befor">◆━━━━━</span>
            </div>
        <!-- <split-line></split-line> -->
            <ul>
                <li v-for="data in datalist" :key="data.id">
                    <img :src="data.imageUrl" alt="">
                    <br><span>{{data.title}}</span>
                </li>
            </ul>
    </div>
</template>

<script>
import axios from 'axios'
export default {
  data () {
    return {
      datalist: [],
      title: ''
    }
  },

  mounted () {
    axios.get('/api/tab/2?start=0').then(res => {
      console.log(res.data.data)
      this.datalist = res.data.data.categories
      this.title = res.data.data.categoriesTitle
    })
  }
}
</script>
<style lang="scss" scoped>
   *{
       margin: 0;
       padding: 0;
   }
   div{
       display: block;
   }
   .split-line{
       height: 1.33rem;
       line-height: 1.33rem;
       text-align: center;
       font-size: 12px;
   }
   .split-line .befor{
       color: #fdde4a;
   }
   ul {
    list-style-type: none;
    overflow: hidden;
    display: flex;
    flex-wrap: wrap
    }
    li{
        text-align: center;
        font-size: 12px;
        width: 25%;
    }
    img{
        width: 1.28rem;
        height: 1.28rem;
        cursor: pointer;
    }
    span{
        font-size: .32rem;
        color: #877a73;
        text-align: center;
        margin-top: .16rem;
    }
</style>
