<template>
  <label class="switch-item">
    <input
      v-model="isChecked"
      :disabled="disabled"
      @change="onChange"
      type="checkbox">
    <span class="inner-text">{{this.value ? this.text[0] : this.text[1]}}</span>
  </label>
</template>

<script>
  export default {
    name: 'bSwitch',
    props: {
      value: {
        type: Boolean,
        required: true
      },
      disabled: {
        type: Boolean,
        default: false
      },
      text: {
        type: Array,
        default: function() {
          return ['开', '关'];
        }
      }
    },
    computed: {
      isChecked: {
        get() {
          return this.value;
        },
        set(newValue) {
          this.$emit('input', newValue);
        }
      }
    },
    methods: {
      onChange() {
        this.$emit('on-change', event);
      }
    }
  };
</script>

<style lang="scss" scoped>
  .switch-item {
    $height: 22px; // 小圆圈 的高度
    $margin: 2px; // 小圆圈距离周边的距离

    position: relative;
    cursor: pointer;

    input[type="checkbox"] {
      z-index: 10;
      position: absolute;
      left: 0; top: 0;
      width: 100%; height: 100%;
      opacity: 0;

      &:checked {
        & ~ .inner-text {
          padding-left: 8px;
          padding-right: $height - $margin * 2 + 5px; // 一个小圆球的大小 再增加5px的距离
          text-align: left;
          background: #409eff;

          // css 过渡的前提是 过渡前后属性必须是一致的 因此这边不能再用right
          &:after {
            left: calc(100% - 2px);
            transform: translate(-100%, 0);
          }
        }
      }
      &:disabled {
        & ~ .inner-text {
          opacity: .5;
        }
      }
    }
    .inner-text {
      position: relative;
      padding-left: $height - $margin * 2 + 5px;
      padding-right: 8px;
      min-width: 45px; height: $height;
      line-height: $height;
      color: #fff;
      text-align: right;
      font-size: 12px;
      border-radius: $height;
      background: #c0c4cc;
      transition: all .2s;

      &:after {
        position: absolute; content: "";
        left: $margin; top: $margin; bottom: $margin;
        width: $height - $margin * 2; // 保证 宽度 和 高度 的值是一致的
        border-radius: 50%;
        background: #fff;
        transition: all .2s;
      }
    }
  }
</style>
