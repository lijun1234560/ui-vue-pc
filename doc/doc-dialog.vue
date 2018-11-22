<template>
  <DocItem :title="'Dialog 对话框'" :testButtons="testButtons" :param="param" @on-test="onTest">
    <div slot="tip">
      buttons 字段中的 text 字段是必须的，其余字段都是可选的，建议给按钮传递一个flag字段，
      用于标识点击了哪个按钮，而不是用 text 字段来标识(这么做显得很low~) <br>
      buttons 字段的默认值为 【确认】 和 【取消】 两个按钮，文档中的默认值仅仅是数据格式（表格太小，展示字段有限）<br>
      on-buttons 回调事件返回的当前按钮对象格式取决于 buttons 字段中的定义，
    </div>

    <template slot="example">
      <b-dialog
        v-model="modelData.show"
        v-bind="modelData"
        @on-close="onClose"
        @on-mask="onMask"
        @on-buttons="onButtons">
        <div style="height: 1000px;" slot="content">
          <p v-for="(n, index) in 100" :key="index">自定义内容{{n}}</p>
        </div>
      </b-dialog>
    </template>
  </DocItem>
</template>

<script>
  import DocItem from './doc-item.vue';
  import bDialog from '../src/components/dialog/main.vue';

  export default {
    name: 'DocDialog',
    components: {
      DocItem,
      bDialog
    },
    data() {
      return {
        param: [
          {
            name: 'v-model',
            explain: '是否显示对话框',
            type: 'Boolean',
            default: true,
            isMust: false
          },
          {
            name: 'abled-mask',
            explain: '点击遮罩是否关闭对话框',
            type: 'Boolean',
            default: false,
            isMust: false
          },
          {
            name: 'title',
            explain: '对话框标题，长度太长会自动截取。若不需要小图标，对应参数不传递即可',
            type: 'Object',
            default: {
              icon: '',
              text: '对话框标题'
            },
            isMust: false
          },
          {
            name: 'buttons',
            explain: '底部按钮,主题有三种可选 默认、primary、danger',
            type: 'Array',
            default: [
              {
                flag: '',
                theme: '',
                text: '默认按钮'
              }
            ],
            isMust: false
          },
          {
            name: 'slot="content"',
            explain: '主体自定义内容,超过一定高度时会出现滚动条，默认不含任何 padding margin',
            type: '-',
            default: '-',
            isMust: '-'
          },
          {
            name: 'on-close',
            explain: '点击标题右侧关闭按钮的（会关闭弹窗）回调事件，无附带数据',
            type: '-',
            default: '-',
            isMust: '-'
          },
          {
            name: 'on-mask',
            explain: '点击遮罩层的回调事件，无附带数据',
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
            flag: 'showDialog',
            text: '显示对话框'
          }
        ],
        modelData: {
          show: false,
          abledMask: true,
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
      showDialog() {
        this.modelData.show = true;
      },
      onTest(button) {
        switch (button.flag) {
          case 'showDialog':
            this.showDialog();
            break;
          default:
            break;
        }
      },
      onClose() {
        alert('您点击了标题右侧的关闭按钮');
      },
      onMask() {
        alert('您点击了遮罩层');
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
