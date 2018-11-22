<template>
  <DocItem :title="'Loading 加载动画'" :testButtons="testButtons" :param="param" @on-test="onTest">
    <div slot="tip">
      需要手动关闭，组件内部不会自动关闭加载动画
    </div>

    <template slot="example">
      <b-loading v-model="modelData.show" v-bind="modelData"></b-loading>
    </template>
  </DocItem>
</template>

<script>
  import DocItem from './doc-item.vue';
  import bLoading from '../src/components/loading/main.vue';

  export default {
    name: 'DocLoading',
    components: {
      DocItem,
      bLoading
    },
    data() {
      return {
        param: [
          {
            name: 'v-model',
            explain: '控制加载动画的显示 与 隐藏',
            type: 'Boolean',
            default: false,
            isMust: false
          },
          {
            name: 'icon',
            explain: '加载动画图标的类名，组件内对这个标签写了旋转动画',
            type: 'String',
            default: 'icon-loading',
            isMust: false
          },
          {
            name: 'text',
            explain: '加载动画的文案，若传递空字符串，则对应节点不会被渲染出来',
            type: 'String',
            default: '加载中',
            isMust: false
          }
        ],
        testButtons: [
          {
            flag: 'showLoading',
            text: '显示加载动画'
          }
        ],
        modelData: {
          show: false
        }
      };
    },
    methods: {
      showLoading() {
        this.modelData.show = true;

        setTimeout(function() {
          this.modelData.show = false;
        }.bind(this), 3000);
      },
      onTest(button) {
        switch (button.flag) {
          case 'showLoading':
            this.showLoading();
            break;
          default:
            break;
        }
      }
    }
  };
</script>

<style lang="scss" scoped>
  //
</style>
