<template>
  <DocItem :title="'Loading 加载动画'" :testButtons="testButtons" :param="param" @on-test="onTest">
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
  import xxx from '../src/components/xxx/main.vue';

  export default {
    name: 'Docxxx',
    components: {
      DocItem,
      xxx
    },
    data() {
      return {
        param: [
          {
            name: '-',
            explain: '-',
            type: '-',
            default: '-',
            isMust: false
          }
        ],
        testButtons: [
          {
            flag: '',
            text: '示例操作1'
          }
        ]
      };
    },
    methods: {
      onTest(button) {
        switch(button.flag) {
          case '':
            break;
          default:
            break;
        }
      },
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
