<template>
  <DocItem :title="'Breadcrumb 面包屑'" :param="param">
    <div slot="tip">
      <!--  -->
    </div>

    <template slot="example">
      <dl class="group">
        <dt>当前值：</dt>
        <dd>
          <!--  -->
        </dd>
      </dl>
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
