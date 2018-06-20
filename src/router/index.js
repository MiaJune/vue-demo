import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import TodoList from '../components/TodoList'
import TodoListDetail from '../components/Todo/TodoListDetail'
import noFind from '../components/Todo/noFind'
/*
* @这在这等价于 /src
* */
Vue.use(Router)
export default new Router({
  mode: 'history',
  routes: [
    {
      path: '',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/todo-list',
      name: 'TodoList',
      component: TodoList,
    },
    {
      path: '/todo-detail',
      name: 'TodoListDetail',
      component: TodoListDetail
    },
    {
      path: '*',
      name: 'noFind',
      component: noFind
    }
  ],
})
