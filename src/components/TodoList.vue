<template>
  <div class="todolist" :style="{fontSize: postFontSize + 'em' }">
    <h2 class="title">TodoList 小案例</h2>
    <button @click="Large">Large</button>
    <br>
    <input type="text" v-model="inputValue">
    <button @click="hondleSumit">添加</button>
    <ul>
      <todo-item
          v-for="(item,index) in list"
          :key="index"
          :content="item"
          :index="index"
          @delete="handleDelete"></todo-item>
    </ul>
    <div>
      <button @click="Hidden">{{tip}}</button>
    </div>
    <div>
      <div>
        <p>查询字符串的方式</p>
        <ul v-if="isShow">
          <li v-for="(item,index) in list2" :key="item.id">
            <router-link :to="{ name:'TodoListDetail',query:{id: item.id}}">
              {{item.text}}
            </router-link>
          </li>
        </ul>
        <ul v-else>
          <li>暂不显示</li>
        </ul>
        <br>
        <p>path方式</p>
        <ul>
          <li v-for="(item,index) in list2" :key="index">
            <router-link :to="{ name:'TodoListDetail',params:{id: index}}">
              {{item.text}}
            </router-link>
          </li>
        </ul>
      </div>
      <div>
        <button @click="Toggle">toggle</button>
        <transition name="fade">
          <p v-show="isToggle">过度属性</p>
        </transition>
      </div>
    </div>
  </div>
</template>
<script>
  import TodoItem from './Todo/TodoItem.vue'

  export default {
    components: {
      'todo-item': TodoItem
    },
    data() {
      return {
        inputValue: '',
        list: [],
        postFontSize: 1,
        num: 0,
        isToggle: 'true',
        tip: '隐藏列表',
        isShow: true ,
        list2: [
          {
            id: 0,
            text: 'chinapex'
          },
          {
            id: 1,
            text: '技术部'
          },
          {
            id: 2,
            text: '攻坚组'
          },
          {
            id: 3,
            text: '人事部'
          },
          {
            id: 4,
            text: '客服部'
          },
          {
            id: 5,
            text: '销售部'
          },
          {
            id: 6,
            text: '花生牛奶'
          },
          {
            id: 7,
            text: '小面筋'
          }
        ]
      }
    },
    mounted() {

    },
    methods: {
      hondleSumit() {
        if (this.inputValue) {
          this.list.push(this.inputValue)
          this.inputValue = ''
        } else {
          alert('空空如也')
        }
      },
      handleDelete(index) {
        console.log(index)
        this.list.splice(index, 1)
      },
      Large() {
        this.postFontSize += 0.1
      },
      Hidden() {
        this.isShow = !this.isShow
        this.tip = this.isShow ?  '隐藏列表' : '显示列表'
      },
      Toggle(){
        this.isToggle = !this.isToggle
      }
    }
  }


</script>

<style scoped lang="less">
  .todolist {
    text-align: left;
    width: 100%;
    padding: 20px;
    box-sizing: border-box;
    button {
      margin: 10px 0;
    }
    .title{
      padding: 10px;
      text-align: center;
      background: #f1f1f1;
    }
    ul{
      li{
        border-bottom: 1px dashed #999;
        overflow: hidden;
        padding: 10px 0;
        line-height: 30px;
      }
    }
  }
  .fade-enter-active, .fade-leave-active {
    transition: opacity .5s;
  }
  .fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
    opacity: 0;
  }
</style>
