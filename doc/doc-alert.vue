<template>
  <DocItem :title="'Alert 提示'" :testButtons="testButtons" :param="param" @on-test="onTest">
    <div slot="tip">
      提示内容支持定义排版
    </div>

    <template slot="example">
      <b-alert v-model="modelData.show" v-bind="modelData" @on-close="onClose">
        <a
          v-if="!modelData.title && !modelData.subTitle"
          slot="content"
          href="https://github.com/qiaodaima/vue-base-ui">
            这个是自定义超链接提示内容
        </a>
      </b-alert>
    </template>
  </DocItem>
</template>

<script>
  import DocItem from './doc-item.vue';
  import bAlert from '../src/components/alert/main.vue';

  export default {
    name: 'DocAlert',
    components: {
      DocItem,
      bAlert
    },
    data() {
      return {
        param: [
          {
            name: 'v-model',
            explain: '控制提示语的显示 与 隐藏',
            type: 'Boolean',
            default: false,
            isMust: false
          },
          {
            name: 'duration',
            explain: '提示框需要显示多长时间，单位毫秒，默认3秒后消失。如果需要一直显示，传递0即可，此时会提供按钮方便手动关闭',
            type: 'Number',
            default: 3000,
            isMust: false
          },
          {
            name: 'icon',
            explain: '左侧小图标的类名',
            type: 'String',
            default: 'icon-error',
            isMust: false
          },
          {
            name: 'theme',
            explain: '提示类型，可选择 info、success、warning、error',
            type: 'String',
            default: 'info',
            isMust: false
          },
          {
            name: 'title',
            explain: '提示语的大标题',
            type: 'String',
            default: '\'\'',
            isMust: false
          },
          {
            name: 'subTitle',
            explain: '提示语的正文内容',
            type: 'String',
            default: '\'\'',
            isMust: false
          },
          {
            name: 'slot="content"',
            explain: '自行定义提示内容，此时建议title subTitle都传递为空，避免干扰您的排版',
            type: '-',
            default: '-',
            isMust: '-'
          },
          {
            name: 'on-close',
            explain: '当duration设置为 0 时，手动关闭提示时的回调函数，无附带参数',
            type: '-',
            default: '-',
            isMust: '-'
          }
        ],
        testButtons: [
          {
            flag: 'info',
            text: '信息提示'
          },
          {
            flag: 'success',
            text: '成功提示'
          },
          {
            flag: 'warning',
            text: '警告提示'
          },
          {
            flag: 'error',
            text: '错误提示'
          }
        ],
        infoData: {
          show: true,
          theme: 'info',
          icon: 'icon-busy',
          title: '',
          subTitle: ''
        },
        successData: {
          show: true,
          theme: 'success',
          icon: 'icon-success',
          title: '成功提示',
          subTitle: '某程序员说：“Apple是美工写代码，Google是码农做美工。”'
        },
        warningData: {
          show: true,
          theme: 'warning',
          icon: 'icon-busy',
          title: '',
          duration: 0,
          subTitle: '生活不仅只是敲代码，还有……调bug。'
        },
        errorData: {
          show: true,
          theme: 'error',
          icon: 'icon-error',
          title: '错误提示',
          subTitle: '编程夜当午，手握小滑鼠。谁知编程辛，行行皆“心”苦；头昏不觉晓，使劲揉眼角。夜夜太辛苦，睡眠知多少'
        },
        modelData: {
          show: false
        }
      };
    },
    methods: {
      onTest(button) {
        switch (button.flag) {
          case 'info':
            this.modelData = JSON.parse(JSON.stringify(this.infoData));
            break;
          case 'success':
            this.modelData = JSON.parse(JSON.stringify(this.successData));
            break;
          case 'warning':
            this.modelData = JSON.parse(JSON.stringify(this.warningData));
            break;
          case 'error':
            this.modelData = JSON.parse(JSON.stringify(this.errorData));
            break;
          default:
            break;
        }
      },
      onClose() {
        alert('您关闭了提示框');
      }
    }
  };
</script>

<style lang="scss" scoped>
  .alert-item {
    a {
      text-decoration: underline;
    }
  }
</style>
