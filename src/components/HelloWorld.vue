<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <h2>{{fullName}}</h2>
    <br>
    <p>默认页/初始页面 <br>
      lrouter-ink 跳转  router中的语法  相当于a标签
    </p><br>
    <router-link :to="{name:'TodoList'}">TodoList</router-link>
    <router-link to="/todo-list">TodoList</router-link>
    <div class="slier-box">
      <swiper :options="swiperOption" ref="mySwiper" class="slier-box-warp">
        <!-- slides -->
        <swiper-slide><img src="../assets/images/banner-01.jpg" alt=""></swiper-slide>
        <swiper-slide><img src="../assets/images/banner-02.jpg" alt=""></swiper-slide>
        <swiper-slide><img src="../assets/images/banner-03.jpg" alt=""></swiper-slide>
        <!-- Optional controls -->
        <div class="swiper-pagination"  slot="pagination"></div>
        <div class="swiper-button-prev" slot="button-prev"></div>
        <div class="swiper-button-next" slot="button-next"></div>
      </swiper>
    </div>
  </div>
</template>

<script>
  import { swiper, swiperSlide } from 'vue-awesome-swiper'
export default {
  name: 'HelloWorld',
  components: {
    swiper,
    swiperSlide
  },
  computed:{
    fullName: function () {
      return this.firstName + ' ' + this.lastName
    },
    swiper() {
      return this.$refs.mySwiper.swiper
    }
  },
  data () {
    return {
      msg: 'Vue.js App',
      firstName: 'Mia',
      lastName: 'Jin',
      swiperOption: {
        notNextTick: true,
        loop: true,
        pagination: {
          el: '.swiper-pagination',
          type: 'progressbar',
        },
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        },
      }
    }
  },
  mounted(){

    console.log(this.$store.state.count)
    this.$store.commit('increment',2)
    console.log(this.$store.state.count)




    setTimeout(()=>{
      this.firstName='Mengmeng'
    },5000)
  }
}
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
  .slier-box{
    width: 100%;
    height: 200px;
    margin-top:30px;
    .slier-box-warp{
      width: 100%;
      height: 200px;
      .swiper-slide{
        width: 100%;
        height: 100%;
        img{
          width: 100%;
          height: 100%;
          object-fit: cover;
          vertical-align: middle;
        }
      }
    }
  }
</style>
