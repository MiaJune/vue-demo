<template>
  <div class="todolist">
    <button @click="goBack">返回上一页</button>
    <div class="title">
      <h2 class="title">TodoList 详情页</h2>
      <p>{{new Date().toLocaleString()}}</p>
    </div>
    <div class="detail">
      <p>
        1个参数<br>
        模式： /user/:username<br>
        匹配路径： /user/evan<br>
        $route.params：{ username: 'evan' }<br>
        多个参数<br>
        模式： /user/:username/post/:post_id<br>
        匹配路径：/user/evan/post/123<br>
        $route.params：{ username: 'evan', post_id: 123 }<br>
        作者：汤利利<br>
        链接：https://www.jianshu.com/p/4b833b23dc4a<br>
        來源：简书<br>
        著作权归作者所有。商业转载请联系作者获得授权，非商业转载请注明出处。</p>
    </div>

    <div id="dynamic-component-demo" class="demo">
      <button
          v-for="tab in tabs"
          v-bind:key="tab"
          v-bind:class="['tab-button', { active: currentTab === tab }]"
          v-on:click="currentTab = tab"
      >{{ tab }}</button>

      <component
          v-bind:is="currentTabComponent"
          class="tab"
      ></component>
    </div>
  </div>
</template>
<script>
 import  Vue from 'vue'
  Vue.component('tab-home', {
   template: '<div>Home component</div>'
 })
 Vue.component('tab-posts', {
   template: '<div>Posts component</div>'
 })
 Vue.component('tab-archive', {
   template: '<div>Archive component</div>'
 })

  export default {
    data() {
      return {
        currentTab: 'Home',
        tabs: ['Home', 'Posts', 'Archive']
      }
    },
    computed: {
      currentTabComponent: function () {
        return 'tab-' + this.currentTab.toLowerCase()
      }
    },
    mounted() {
      console.log('query',this.$route.query.id);
      console.log('params',this.$route.params.id);
    },
    methods: {
      goBack(){
        this.$router.go(-1)
      }
    }
  }


</script>

<style scoped lang="less">
  .todolist {
    .title{
      padding: 10px;
      text-align: center;
      font-size: 18px;
      text-align: center;
      p{
        font-size: 14px;
        padding: 10px;
      }
    }
    .detail{
      width: 100%;
      padding:10px 15px;
      font-size: 14px;
      color: #666;
      line-height: 1.5;
      text-align: justify;
    }
  }
  .tab-button {
    width: 33.3%;
    height: 30px;
    line-height: 30px;
    color: #666;
    border-top-left-radius: 3px;
    border-top-right-radius: 3px;
    border: 1px solid #ccc;
    cursor: pointer;
    background: #f0f0f0;
  }
  .tab-button:hover {
    background: #e0e0e0;
  }
  .tab-button.active {
    background: #e0e0e0;
  }
  .tab {
    border: 1px solid #ccc;
    padding: 10px;
  }
</style>
