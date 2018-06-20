<template>
    <li  >{{ content  | reserve }} <span class="delete" @click="handleDelete"> 删除 </span></li>
</template>
<script>
export default {
  props: ['content', 'index'],
  methods: {
    handleDelete () {
      this.$emit('delete', this.index)
    }
  },
  filters:{
    reserve(value){
      value = value.toString()
      return value.charAt(0).toUpperCase() + value.slice(1)
    }
  }
}
</script>
<style scoped lang="less">
    .delete{
        float: right;
        display: inline-block;
        padding: 0 10px;
        height: 30px;
        line-height: 30px;
        box-sizing: border-box;
        background: #f5f5f5;
        font-size: 12px;
        margin-left: 50px;
        border-radius: 4px;
    }
</style>
