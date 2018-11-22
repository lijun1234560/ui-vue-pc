<template>
  <div v-show="show" class="dialog-wrap">
    <div @click="onMask" class="mask"></div>
    <div class="dialog-item">
      <div class="header">
        <i v-if="title.icon" :class="title.icon" class="iconfont"></i>
        <span class="title-text">{{title.text}}</span>
        <i @click="onClose" class="btn-close"></i>
      </div>
      <div class="content">
        <slot name="content"></slot>
      </div>
      <div class="footer">
        <a
          v-for="(button, index) in buttons"
          @click="onButtons(button);"
          :class="button.theme"
          :key="index"
          href="javascript:;">
          {{button.text}}
        </a>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'bDialog',
    props: {
      value: {
        type: Boolean,
        default: true
      },
      abledMask: {
        type: Boolean,
        default: false
      },
      title: {
        type: Object,
        default() {
          return {
            icon: '',
            text: '对话框标题'
          };
        }
      },
      buttons: {
        type: Array,
        default() {
          return [
            {
              flag: 'cancel',
              theme: '',
              text: '取消'
            },
            {
              flag: 'confirm',
              theme: 'primary',
              text: '确定'
            }
          ];
        }
      }
    },
    computed: {
      show: {
        get() {
          return this.value;
        },
        set(newValue) {
          this.$emit('input', newValue);
        }
      }
    },
    methods: {
      onClose() {
        this.$emit('on-close', null);
        this.show = false;
      },
      onMask() {
        this.$emit('on-mask', null);

        if (this.abledMask) {
          this.show = false;
        }
      },
      onButtons(button) {
        this.$emit('on-buttons', button);
      }
    }
  };
</script>

<style lang="scss" scoped>
  .dialog-wrap {
    z-index: 500;
    position: fixed;
    left: 0;right: 0;top: 0;bottom: 0;
  }
  .mask {
    position: absolute;
    left: 0;right: 0;top: 0;bottom: 0;
    background: rgba(0, 0, 0, 0.3);
  }
  .dialog-item {
    position: absolute;
    left: 50%; top: 50%;
    width: 720px;
    box-shadow: 0 0 8px 0 rgba(0, 0, 0, 0.22);
    transform: translate(-50%, -50%);
    background: #fff;

    .header {
      position: relative;
      padding: 3px 10px;

      .title-text {
        max-width: 95%;
        white-space:nowrap;
        text-overflow:ellipsis;
        overflow:hidden;
        vertical-align: middle;
      }
      .btn-close {
        position: absolute;
        top: 0; right: 0; bottom: 0;
        padding: 0 7px;
        line-height: 30px;
        font-size: 16px;
        cursor: pointer;
        transition: all 0.3s;

        &:before {
          content: "\e60a";
          font-family: "iconfont" !important;
        }
        &:hover {
          color: #fff;
          background: #ff5e5e;
        }
      }
    }
    .content {
      position: relative;
      min-height: 400px;
      max-height: 450px;
      overflow-y: auto;
    }
    .footer {
      position: relative;
      padding: 10px 20px;
      font-size: 0;
      text-align: right;

      a {
        margin-left: 10px;
        padding: 2px 12px;
        border: 1px solid #ddd;
        border-radius: 4px;
        font-size: 12px;

        &:hover{
          opacity: 0.85;
        }
        &:first-child {
          margin-left: 0;
        }
        &.primary {
          color: #fff;
          border-color: #0079ff;
          background: #0079ff;
        }
        &.danger {
          color: #fff;
          border-color: #ff5e5e;
          background: #ff5e5e;
        }
      }
    }
  }
</style>
