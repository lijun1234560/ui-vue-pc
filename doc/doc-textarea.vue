<template>
  <DocItem :title="'Textarea 多行文本'" :param="param">
    <div slot="tip">
      默认表现为块级元素样式，即占据一整行。根据以往经验来看，左右拉伸一般会对现有布局造成破坏，
      因此组件默认禁止了该功能，但可以上下拉伸
    </div>

    <template slot="example">
      <dl class="group">
        <dt>启用：</dt>
        <dd>
          <b-textarea
            v-model="tips"
            @on-focus="onFocus"
            @on-blur="onBlur"
            @on-change="onChange">
          </b-textarea>
        </dd>
      </dl>

      <dl class="group">
        <dt>禁用：</dt>
        <dd>
          <b-textarea v-model="joke" :disabled="true"></b-textarea>
        </dd>
      </dl>
    </template>
  </DocItem>
</template>

<script>
  import DocItem from './doc-item.vue';
  import bTextarea from '../src/components/textarea/main.vue';

  export default {
    name: 'DocTextarea',
    components: {
      DocItem,
      bTextarea
    },
    data() {
      return {
        tips: '请打开控制台查看相应回调函数信息~',
        joke: '传说秦末年间，虞姬眼睛受伤了看不见，一次项羽出征，虞姬为他敲鼓送行，项羽甚是感动，于是给这种敲发命名为瞎姬霸敲',
        param: [
          {
            name: 'v-model',
            explain: '多行文本框的值',
            type: 'String',
            default: '\'\'',
            isMust: false
          },
          {
            name: 'disabled',
            explain: '是否禁用该文本框',
            type: 'Boolean',
            default: false,
            isMust: false
          },
          {
            name: 'maxlength',
            explain: '该文本框最大的可输入字符长度，如果不需要字符长度限制，可把该值设置的大些',
            type: 'Number',
            default: 1000,
            isMust: false
          },
          {
            name: 'placeholder',
            explain: '当文本框为空值时的提示语',
            type: 'String',
            default: '请输入...',
            isMust: false
          },
          {
            name: 'rows',
            explain: '该文本框的可见行数',
            type: 'Number',
            default: 5,
            isMust: false
          },
          {
            name: 'on-focus',
            explain: '获得焦点的时候触发的回调函数，参数(event)',
            type: '-',
            default: '-',
            isMust: '-'
          },
          {
            name: 'on-blur',
            explain: '失去焦点的时候触发的回调函数，参数(event)',
            type: '-',
            default: '-',
            isMust: '-'
          },
          {
            name: 'on-change',
            explain: '当文本框的值发生改变，并且失去焦点的时候触发的回调函数（不是输入的时候触发），参数(event)',
            type: '-',
            default: '-',
            isMust: '-'
          }
        ]
      };
    },
    methods: {
      onFocus(event) {
        console.log('on-focus', event);
      },
      onBlur(event) {
        console.log('on-blur', event);
      },
      onChange(event) {
        console.log('on-change', event);
      }
    }
  };
</script>

<style lang="scss" scoped>
  .group {
    width: 500px;
  }
</style>
