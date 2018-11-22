<template>
  <DocItem :title="'Switch 开关'" :param="param">
    <div slot="tip">
      在两种状态间切换时用到的开关选择器。
      由于只存在两种结果，因此采用布尔类型的值，需要 0和1时自行转换
    </div>

    <template slot="example">
      <dl class="group">
        <dt>当前值：{{enable}}</dt>
        <dd>
          <b-switch v-model="enable" :disabled="true"></b-switch>
        </dd>
      </dl>

      <dl class="group">
        <dt>当前值：{{switchBtn}}</dt>
        <dd>
          <b-switch v-model="switchBtn" :disabled="true"></b-switch>
        </dd>
      </dl>

      <dl class="group">
        <dt>当前值：{{sex}}</dt>
        <dd>
          <b-switch v-model="sex" :text="['男', '女']" @on-change="onChange"></b-switch>
        </dd>
      </dl>
    </template>
  </DocItem>
</template>

<script>
  import DocItem from './doc-item.vue';
  import bSwitch from '../src/components/switch/main.vue';

  export default {
    name: 'Docswitch',
    components: {
      DocItem,
      bSwitch
    },
    data() {
      return {
        enable: true,
        switchBtn: false,
        sex: true,
        param: [
          {
            name: 'v-model',
            explain: 'switch按钮的值',
            type: 'Boolean',
            default: true,
            isMust: true
          },
          {
            name: 'disabled',
            explain: '是否禁用switch按钮',
            type: 'Boolean',
            default: false,
            isMust: false
          },
          {
            name: 'text',
            explain: 'switch按钮两侧的文字；数组长度为2，超出无效',
            type: 'Array',
            default: ['开', '关'],
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
    },
    methods: {
      onChange(event) {
        alert('按钮状态改变了，详细信息看控制台');
        console.log(event);
      }
    }
  };
</script>

<style lang="scss" scoped>
  //
</style>
