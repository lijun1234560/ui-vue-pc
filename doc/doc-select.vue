<template>
  <DocItem :title="'Select 选择器'" :param="param">
    <div slot="tip">
      选择器
    </div>

    <template slot="example">
      <dl class="group">
        <dt>单选：</dt>
        <dd>
          <b-select v-model="selectedFavoriteFood" :data="favoriteFood"></b-select>
        </dd>
      </dl>
    </template>
  </DocItem>
</template>

<script>
  import DocItem from './doc-item.vue';
  import bSelect from '../src/components/select/main';

  export default {
    name: 'DocSelect',
    components: {
      DocItem,
      bSelect
    },
    data() {
      return {
        selectedFavoriteFood: [],
        favoriteFood: [],
        param: [
          {
            name: 'v-model',
            explain: '选择器已选中的值。ps:不管是单选模式还是多选模式，该字段数据类型均为数组',
            type: 'Array',
            default: [],
            isMust: false
          },
          {
            name: 'data',
            explain: '下拉数据源',
            type: 'Array',
            default: '[{ "key": "这个选项的值，必须唯一", "text": "选项文案", "disabled": false }]',
            isMust: true
          },
          {
            name: 'writeable',
            explain: '是否支持自行输入，ps: 可以输入不是下拉项中的值',
            type: 'Boolean',
            default: false,
            isMust: false
          },
          {
            name: 'searchable',
            explain: '是否支持模糊搜索',
            type: 'Boolean',
            default: false,
            isMust: false
          },
          {
            name: 'multiple',
            explain: '是否支持多选',
            type: 'Boolean',
            default: false,
            isMust: false
          },
          {
            name: 'disabled',
            explain: '是否禁用该选择器',
            type: 'Boolean',
            default: false,
            isMust: false
          },
          {
            name: 'placeholder',
            explain: '选择框提示文字',
            type: 'String',
            default: '无匹配数据',
            isMust: false
          }
        ]
      };
    },
    mounted() {
      this.createData();
    },
    methods: {
      createData() {
        let foods = [
          '鱼香肉丝',
          '香干炒肉',
          '佛跳墙',
          '肉末茄子',
          '番茄炒鸡蛋',
          '紫菜蛋汤',
          '萝卜丝爆蛋',
          '鸡蛋饼',
          '红烧排骨',
          '香菇炒肉',
          '凉拌木耳'
        ];
        let total = 10;

        for (let i = 0; i < total; i++) {
          this.favoriteFood.push({
            key: i,
            text: `${foods[Math.floor(Math.random() * 10)]} - ${i}`,
            disabled: i % 4 === 0 ? true : false
          });
        }
        for (let i = 0; i < total; i++) {
          if (i % 3 === 0) {
            this.selectedFavoriteFood.push(i);
          }
        }
      }
    }
  };
</script>

<style lang="scss" scoped>
  .group {
    width: 300px;
  }
</style>
