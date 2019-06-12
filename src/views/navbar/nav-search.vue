<template>
  <div class="nav-search">
    <div class="demo-input-suffix">
      <el-input placeholder="搜索商品,发现更多优选" prefix-icon="el-icon-search">
      </el-input>
    </div>
  </div>
</template>
<style lang="scss">
  .demo-input-suffix{
    width: 85%;
    height: .5rem;
    margin-left: 50%;
    transform: translate(-50%)
  }
</style>
<style lang="scss" scoped>
  .nav-search{
    width: 100%;
    overflow: hidden;
    height: 1rem;
    line-height: 1rem;
    color: #877a73;
    background-color: #fdde4a;
    font-size: 0;
  }
</style>
