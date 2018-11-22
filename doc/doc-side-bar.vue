<template>
  <DocItem :title="'SideBar 侧边弹窗'" :testButtons="testButtons" :param="param" @on-test="onTest">
    <div slot="tip">
      buttons 字段中的 text 字段是必须的，其余字段都是可选的，建议给按钮传递一个flag字段，
      用于标识点击了哪个按钮，而不是用 text 字段来标识(这么做显得很low~) <br>
      buttons 字段的默认值为 【确认】 和 【取消】 两个按钮，文档中的默认值仅仅是数据格式（表格太小，展示字段有限）<br>
      on-buttons 回调事件返回的当前按钮对象格式取决于 buttons 字段中的定义，
    </div>

    <template slot="example">
      <b-sideBar
        v-model="modelData.show"
        v-bind="modelData"
        @on-buttons="onButtons">
      </b-sideBar>
    </template>
  </DocItem>
</template>

<script>
  import DocItem from './doc-item.vue';
  import bSideBar from '../src/components/side-bar/main.vue';

  export default {
    name: 'DocSideBar',
    components: {
      DocItem,
      bSideBar
    },
    data() {
      return {
        param: [
          {
            name: 'v-model',
            explain: '控制侧边栏的显示与隐藏',
            type: 'Boolean',
            default: 'false',
            isMust: false
          },
          {
            name: 'title',
            explain: '对话框标题，长度太长会自动截取。若不需要小图标，对应参数不传递即可',
            type: 'Object',
            default: {
              icon: '',
              text: '侧边栏标题'
            },
            isMust: false
          },
          {
            name: 'abled-blur',
            explain: '当点击页面其它地方（非当前组件本身），是否需要自动隐藏侧边栏',
            type: 'Boolean',
            default: true,
            isMust: false
          },
          {
            name: 'buttons',
            explain: '底部按钮,主题有三种可选 默认、primary、danger，默认提供两个按钮，确认和取消',
            type: 'Array',
            default: [
              {
                flag: '',
                theme: '',
                text: ''
              }
            ],
            isMust: false
          },
          {
            name: 'slot="header"',
            explain: '自定义顶部，建议 title 字段都传递空值来避免干扰界面布局',
            type: '-',
            default: '-',
            isMust: '-'
          },
          {
            name: 'slot="content"',
            explain: '主体自定义内容，超过一定高度时会出现滚动条，默认不含任何 padding margin',
            type: '-',
            default: '-',
            isMust: '-'
          },
          {
            name: 'on-buttons',
            explain: '底部按钮点击回调事件，附带当前按钮对象',
            type: '-',
            default: '-',
            isMust: '-'
          }
        ],
        testButtons: [
          {
            flag: 'showSideBar',
            text: '显示侧边弹窗'
          }
        ],
        modelData: {
          show: false,
          buttons: [
            {
              flag: 'cancel',
              theme: '',
              text: '取消'
            },
            {
              flag: 'del',
              theme: 'danger',
              text: '删除'
            },
            {
              flag: 'ok',
              theme: 'primary',
              text: '确认'
            }
          ]
        }
      };
    },
    methods: {
      showSideBar() {
        this.modelData.show = true;
      },
      onTest(button) {
        switch (button.flag) {
          case 'showSideBar':
            this.showSideBar();
            break;
          default:
            break;
        }
      },
      onButtons(button) {
        alert('您点击了底部按钮，请在控制台查看调试数据');
        console.log(button);
      }
    }
  };
</script>

<style lang="scss" scoped>
  //
</style>
