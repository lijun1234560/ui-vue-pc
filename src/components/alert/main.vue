<template>
  <div v-show="show" :class="theme" class="alert-item">
    <i :class="icon" class="icon iconfont"></i>
    <i v-if="duration === 0" @click="onClose" class="btn-close iconfont icon-error"></i>
    <dl v-if="title.length || subTitle.length" class="content">
      <dt v-if="title.length" class="title">{{title}}</dt>
      <dd v-if="subTitle.length" class="sub-title">{{subTitle}}~</dd>
    </dl>
    <slot name="content"></slot>
  </div>
</template>

<script>
  export default {
    name: 'bAlert',
    props: {
      value: {
        type: Boolean,
        default: false
      },
      duration: {
        type: Number,
        default: 3000
      },
      theme: {
        type: String,
        default: 'info'
      },
      icon: {
        type: String,
        default: 'icon-error'
      },
      title: {
        type: String,
        default: ''
      },
      subTitle: {
        type: String,
        default: ''
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
    watch: {
      show(newValue) {
        const _this = this;

        if (_this.duration && newValue) {
          setTimeout(function() {
            _this.$emit('input', false);
          }, _this.duration);
        }
      }
    },
    methods: {
      onClose() {
        this.show = false;
        this.$emit('on-close', null);
      }
    }
  };
</script>

<style lang="scss" scoped>
  .alert-item {
    z-index: 10;
    position: fixed;
    top: 20px; left: 50%;
    padding: 10px 20px 10px 45px;
    min-height: 40px;
    border-radius: 6px;
    transform: translate(-50%, 0);

    &:hover {
      .btn-close {
        right: -10px; top: -10px;
        font-size: 20px;
        color: rgba(237, 63, 20, 1);
      }
    }
    &.info {
      border: 1px solid #d5e8fc;
      background-color: #eaf4fe;

      .icon {
        color: #2d8cf0;
      }
    }
    &.success {
      border: 1px solid #d1f2e1;
      background-color: #e8f9f0;

      .icon {
        color: #19be6b;
      }
    }
    &.warning {
      border: 1px solid #ffebcc;
      background-color: #fff5e6;

      .icon {
        color: #f90;
      }
    }
    &.error {
      border: 1px solid #fbd9d0;
      background-color: #fdece8;

      .icon {
        color: #ed3f14;
      }
    }
    dt.title {
      margin-bottom: 5px;
      line-height: 1;
      font-size: 14px;
      font-weight: bold;
      color: #000;
    }
    dd.sub-title {
      font-size: 12px;
      color: #666;
    }
    .icon {
      position: absolute;
      left: 15px; top: 50%;
      font-size: 18px;
      transform: translate(0, -50%);
    }
    .btn-close {
      position: absolute;
      right: -6px; top: -6px;
      font-size: 12px;
      color: rgba(237, 63, 20, 0.5);
      cursor: pointer;
      transition: all 0.3s;
    }
  }
</style>
