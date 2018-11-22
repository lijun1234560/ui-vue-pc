<template>
  <div class="textarea-item">
    <textarea
      v-model="valueCopy"
      :rows="rows"
      :maxlength="maxlength"
      :placeholder="placeholder"
      :disabled="disabled"
      @focus="onFocus"
      @blur="onBlur"
      @change="onChange">
    </textarea>
    <i v-show="value" @click="clearvalue" class="btn-clear iconfont icon-error"></i>
    <div :class="{'error': valueCopy.length === maxlength}" class="num-words-tips">
      {{valueCopy.length}} / {{maxlength}}
    </div>
  </div>
</template>

<script>
  export default {
    name: 'bTextarea',
    props: {
      value: {
        type: String,
        default: ''
      },
      disabled: {
        type: Boolean,
        default: false
      },
      maxlength: {
        type: Number,
        default: 1000
      },
      placeholder: {
        type: String,
        default: '请输入...'
      },
      rows: {
        type: Number,
        default: 5
      }
    },
    computed: {
      valueCopy: {
        get() {
          return this.value;
        },
        set(newValue) {
          this.$emit('input', newValue);
        }
      }
    },
    methods: {
      clearvalue() {
        this.$emit('input', '');
      },
      onFocus(event) {
        this.$emit('on-focus', event);
      },
      onBlur(event) {
        this.$emit('on-blur', event);
      },
      onChange(event) {
        this.$emit('on-change', event);
      }
    }
  };
</script>

<style lang="scss" scoped>
  .textarea-item {
    position: relative;

    textarea {
      display: block;
      padding: 5px 25px 25px 10px;
      width: 100%;
      line-height: 1.8;
      border: 1px solid #dddee1;
      border-radius: 4px;
      resize: vertical;
      transition: all 0.3s;

      &:hover {
        border-color: #bcbcbc;
      }
      &:disabled {
        resize: none;
        color: #aaa;
        background: #f3f3f3;

        &:hover {
          border-color: #dddee1;
        }
        & ~ .btn-clear,
        & ~ .num-words-tips {
          display: none;
        }
      }
      &:focus {
        border-color: #409eff !important;
      }
    }
    .btn-clear {
      position: absolute;
      top: 10px;right: 10px;
      color: #dddee1;
      transition: all 0.3s;
      cursor: pointer;

      &:hover {
        color: #bcbcbc;
      }
    }
    .num-words-tips {
      position: absolute;
      right: 10px;bottom: 10px;
      font-size:12px;
      color:#999;

      &.error {
        font-weight: bold;
        color: #ff5e5e;
      }
    }
  }
</style>
