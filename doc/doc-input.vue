<template>
  <DocItem :title="'Input 输入框'" :param="param">
    <div slot="tip">
      输入框的值是双向绑定的。默认表现为块级元素样式，即宽度占据一整行 <br>
      请打开控制台查看相应回调函数信息
    </div>

    <template slot="example">
      <dl class="group">
        <dt>普通文本框：{{userName}}</dt>
        <dd>
          <b-input v-model="userName"></b-input>
        </dd>
      </dl>

      <dl class="group">
        <dt>密码框：{{userPassword}}</dt>
        <dd>
          <b-input v-model="userPassword" :placeholder="'请输入密码'" :type="'password'"></b-input>
        </dd>
      </dl>

      <dl class="group">
        <dt>禁用：</dt>
        <dd>
          <b-input v-model="sign" :disabled="true"></b-input>
        </dd>
      </dl>
    </template>
  </DocItem>
</template>

<script>
  import DocItem from './doc-item.vue';
  import bInput from '../src/components/input/main.vue';

  export default {
    name: 'DocInput',
    components: {
      DocItem,
      bInput
    },
    data() {
      return {
        userName: '隔壁帅气的小小俊',
        userPassword: '123456',
        sign: '帅的惊天动地，偏偏要靠写代码吃饭',
        value: '输入框的值',
        param: [
          {
            name: 'v-model',
            explain: '绑定输入框的值',
            type: 'String',
            default: '-',
            isMust: true
          },
          {
            name: 'placeholder',
            explain: '输入框为空时的提示语',
            type: 'String',
            default: '请输入',
            isMust: false
          },
          {
            name: 'maxlength',
            explain: '输入字段的最大长度',
            type: 'Number',
            default: 20,
            isMust: false
          },
          {
            name: 'type',
            explain: '输入框的类型, 只能改成 email、number、password诸如此类，不可选择 checkbox、button此类',
            type: 'String',
            default: 'text',
            isMust: false
          },
          {
            name: 'disabled',
            explain: '是否禁用输入框',
            type: 'Boolean',
            default: false,
            isMust: false
          },
          {
            name: 'on-focus',
            explain: '获得焦点的时候触发的回调函数，返回原生event事件对象',
            type: '-',
            default: '-',
            isMust: '-'
          },
          {
            name: 'on-blur',
            explain: '失去焦点的时候触发的回调函数，返回原生event事件对象',
            type: '-',
            default: '-',
            isMust: '-'
          },
          {
            name: 'on-change',
            explain: '当输入框的值发生改变，并且失去焦点的时候触发的回调函数，参数(event)',
            type: '-',
            default: '-',
            isMust: '-'
          }
        ]
      };
    }
  };
</script>

<style lang="scss" scoped>
  .group {
    width: 360px;
  }
</style>
