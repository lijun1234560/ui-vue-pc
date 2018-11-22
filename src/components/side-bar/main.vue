<template>
  <div @click="stopBubble" v-show="show" class="side-bar-item">
    <div class="header">
      <i v-if="title.icon" :class="title.icon" class="iconfont"></i>
      <span class="title-text">{{title.text}}</span>
      <slot name="header"></slot>
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
</template>

<script>
  export default {
    name: 'bSideBar',
    props: {
      value: {
        type: Boolean,
        default: false
      },
      title: {
        type: Object,
        default() {
          return {
            icon: '',
            text: '侧边栏标题'
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
      },
      abledBlur: {
        type: Boolean,
        default: true
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
    mounted() {
      const _this = this;

      if (this.abledBlur) {
        document.addEventListener('click', function() {

          // 如果组件已经是隐藏状态，则不需要再隐藏，否则就会导致组件无法正常显示
          if (_this.show) {
            _this.show = false;
          }
        });
      }
    },
    methods: {
      onButtons(button) {
        this.$emit('on-buttons', button);
      },
      stopBubble(e) {
        if (this.abledBlur) {
          e.stopPropagation();
        }
      }
    }
  };
</script>

<style lang="scss" scoped>
  .side-bar-item {
    z-index: 10;
    position: fixed;
    right: 0; top: 0; bottom: 0;
    width: 360px;
    background: #fff;
    box-shadow: 0 0 8px 0 rgba(0, 0, 0, 0.22);

    .header {
      position: relative;
      padding: 5px 10px;

      .title-text {
        max-width: 95%;
        white-space:nowrap;
        text-overflow:ellipsis;
        overflow:hidden;
        vertical-align: middle;
      }
    }
    .content {
      position: relative;
      height: calc(100% - 32px - 44px);
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
