<template>
  <div class="input-item">
    <input
      :value="value"
      :maxlength="maxlength"
      :placeholder="placeholder"
      :disabled="disabled"
      :type="type"
      @focus="onFocus"
      @blur="onBlur"
      @change="onChange"
      @input="input">
    <i v-show="value" @click="clearvalue" class="btn-clear iconfont icon-error"></i>
  </div>
</template>

<script>
  export default {
    name: 'bInput',
    props: {
      value: {
        type: String,
        required: true
      },
      placeholder: {
        type: String,
        default: '请输入'
      },
      maxlength: {
        type: Number,
        default: 20
      },
      type: {
        type: String,
        default: 'text'
      },
      disabled: {
        type: Boolean,
        default: false
      }
    },
    methods: {
      clearvalue() {
        this.$emit('input', '');
      },
      input(event) {
        this.$emit('input', event.target.value);
      },
      onFocus(event) {
        console.log('on-focus', event);
        this.$emit('on-focus', event);
      },
      onBlur(event) {
        console.log('on-blur', event);
        this.$emit('on-blur', event);
      },
      onChange(event) {
        console.log('on-change', event);
        this.$emit('on-change', event);
      }
    }
  };
</script>

<style lang="scss" scoped>
  .input-item {
    position: relative;

    input {
      display: block;
      padding: 0 10px;
      width: 100%; height: 34px;
      border: 1px solid #dddee1;
      border-radius: 4px;
      transition: all 0.3s;

      &:disabled {
        color: #aaa;
        background: #f3f3f3;

        & + .btn-clear {
          display: none;
        }
      }

      &:hover:not(:disabled) {
        border-color: #bcbcbc;
      }
      &:focus {
        border-color: #409eff !important;
      }
    }
    .btn-clear {
      position: absolute;
      top: 50%;right: 10px;
      transform: translate(0, -50%);
      color: #dddee1;
      transition: all 0.3s;
      cursor: pointer;

      &:hover {
        color: #bcbcbc;
      }
    }
  }
</style>
