<template>
  <DocItem :title="'Breadcrumb 面包屑'" :param="param">
    <div slot="tip">
      显示网站的层级结构，告知用户当前所在位置，以及在需要向上级导航时使用
    </div>

    <template slot="example">
      <bBreadcrumb></bBreadcrumb>
    </template>
  </DocItem>
</template>

<script>
  import DocItem from './doc-item.vue';
  import bBreadcrumb from '../src/components/breadcrumb/main.vue';

  export default {
    name: 'DocBreadcrumb',
    components: {
      DocItem,
      bBreadcrumb
    },
    data() {
      return {
        param: [
          {
            name: 'to',
            explain: '链接，不传则没有链接，支持 vue-router 对象',
            type: 'String',
            default: '-',
            isMust: false
          },
          {
            name: 'pathList',
            explain: '面包屑',
            type: 'String',
            default: '-',
            isMust: false
          }
        ],
      };
    },
    methods: {

    }
  };
</script>

<style lang="scss" scoped>
  .xxx-item {
    margin-left: 15px;

    &:first-child {
      margin-left: 0;
    }
  }
</style>
