<template>
  <DocItem :title="'Transfer 穿梭框'" :param="param">
    <div slot="tip">
      默认表现为块级元素样式，高度已经固定，文档中的默认值仅仅是数据格式（表格太小，展示字段有限）<br>
      【on-change】回调函数返回三个参数信息，【direction：转移方向】，【select: 已选择的key集合】，<br>
      【data: 当前栏的可选数据(abled)、不可选数据(disabled)、以及所有数据(all)】
    </div>

    <template slot="example">
      <p>当前值：{{modelData.select}}</p>

      <b-transfer
        v-model="modelData.select"
        v-bind="modelData"
        @on-change="onChange">
      </b-transfer>
    </template>
  </DocItem>
</template>

<script>
  import DocItem from './doc-item.vue';
  import bTransfer from '../src/components/transfer/main.vue';

  export default {
    name: 'DocTransfer',
    components: {
      DocItem,
      bTransfer
    },
    data() {
      return {
        param: [
          {
            name: 'v-model',
            explain: '已选择的数据，对应data数组成员里面的key字段',
            type: 'Array',
            default: '[] 成员类型取决于key字段的数据类型',
            isMust: true
          },
          {
            name: 'data',
            explain: '总的数据源',
            type: 'Array',
            default: [
              {
                key: '这个选项的值，必须唯一',
                text: '选项文案',
                disabled: false
              }
            ],
            isMust: true
          },
          {
            name: 'titles',
            explain: '两侧的标题',
            type: 'Array',
            default: ['源列表', '目的列表'],
            isMust: false
          },
          {
            name: 'on-change',
            explain: '选项在两栏之间转移时的回调函数，请查看控制台',
            type: '-',
            default: '-',
            isMust: '-'
          }
        ],
        modelData: {
          data: [],
          select: []
        }
      };
    },
    mounted() {
      this.createData();
    },
    methods: {
      createData() {
        let subject = [
          '语文',
          '数学',
          '英语',
          '历史',
          '政治',
          '生物',
          '化学',
          '地理',
          '物理',
          '体育'
        ];
        let teacher = [
          '王安石',
          '苏东坡',
          '李清照',
          '白居易',
          '陶渊明',
          '冯梦龙',
          '辛弃疾',
          '欧阳修',
          '司马光',
          '王之涣'
        ];
        let total = 25;

        for (let i = 0; i < total; i++) {
          this.modelData.data.push({
            key: i,
            text: `${subject[Math.floor(Math.random() * 10)]} - ${teacher[Math.floor(Math.random() * 10)]} - ${i}`,
            disabled: i % 4 === 0 ? true : false
          });
        }
        for (let i = 0; i < total; i++) {
          if (i % 3 === 0) {
            this.modelData.select.push(i);
          }
        }
      },
      onChange(result) {
        console.log(result);
      }
    }
  };
</script>

<style lang="scss" scoped>
  //
</style>
