<template>
  <DocItem :title="'Checkbox 复选框'" :param="param">
    <div slot="tip">
      vue的Checkbox操作，其实是将当前选项的值(label) 与 v-model绑定的值进行匹配，<br>
      如果label的值 在 v-model中，则该选项被选中，否则未被选中，
      哪怕您只用一个复选框，也必须传递数组类型的值来保存复选框的最终选择结果<br>
      因此 v-model 值的类型被强制设置为数组，
      以便于适应多个复选框使用的场景，<br>
      建议给name字段赋值，以便于区分标识
    </div>

    <template slot="example">
      <dl class="group">
        <dt>当前值：{{hobby}}</dt>
        <dd>
          <b-checkbox v-model="hobby" :label="'游泳的值'" :text="'游泳'"></b-checkbox>
          <b-checkbox v-model="hobby" :label="'踢球的值'" :text="'踢球'"></b-checkbox>
          <b-checkbox v-model="hobby" :label="'下象棋的值'" :text="'下象棋'"></b-checkbox>
          <b-checkbox v-model="hobby" :label="'写代码的值'" :text="'写代码'" :disabled="true"></b-checkbox>
          <b-checkbox v-model="hobby" :label="'学习的值'" :text="'学习'"></b-checkbox>
          <b-checkbox v-model="hobby" :label="'加班的值'" :text="'加班'" :disabled="true"></b-checkbox>
        </dd>
      </dl>
    </template>
  </DocItem>
</template>

<script>
  import DocItem from './doc-item.vue';
  import bCheckbox from '../src/components/checkbox/main.vue';

  export default {
    name: 'DocCheckbox',
    components: {
      DocItem,
      bCheckbox
    },
    data() {
      return {
        hobby: ['写代码的值', '学习的值'],
        param: [
          {
            name: 'v-model',
            explain: '复选框选中的值，必须是数组类型',
            type: 'Array',
            default: '[]',
            isMust: false
          },
          {
            name: 'label',
            explain: '当前选项的后选值，建议不要重复，此字段的值务必唯一',
            type: 'String, Number, Boolean',
            default: '-',
            isMust: true
          },
          {
            name: 'name',
            explain: '原生name属性，相同name属性的复选框视为一组',
            type: 'String',
            default: 'defaultName',
            isMust: false
          },
          {
            name: 'disabled',
            explain: '是否禁用该选项',
            type: 'Boolean',
            default: 'false',
            isMust: false
          },
          {
            name: 'text',
            explain: '复选框文案',
            type: 'String',
            default: '复选框文案',
            isMust: false
          },
          {
            name: 'on-change',
            explain: '在选项状态发生改变时触发的回调，参数(event)',
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
  .checkbox-item {
    margin-left: 15px;

    &:first-child {
      margin-left: 0;
    }
  }
</style>
