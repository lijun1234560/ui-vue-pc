<template>
  <label class="checkbox-item">
    <input
      v-model="checked"
      :value="label"
      :name="name"
      :disabled="disabled"
      @change="onChange"
      type="checkbox">
    <i class="icon"></i>
    <span>{{text}}</span>
  </label>
</template>

<script>
  export default {
    name: 'bCheckbox',
    props: {
      value: {
        type: Array,
        default() {
          return [];
        }
      },
      label: {
        type: [String, Number, Boolean],
        required: true
      },
      name: {
        type: String,
        default: 'defaultName'
      },
      disabled: {
        type: Boolean,
        default: false
      },
      text: {
        type: String,
        default: '复选框文案'
      }
    },
    computed: {
      checked: {
        get() {
          return this.value;
        },
        set(newValue) {
          this.$emit('input', newValue);
        }
      }
    },
    methods: {
      onChange(event) {
        this.$emit('on-change', event);
      }
    }
  };
</script>

<style lang="scss" scoped>
  .checkbox-item {
    position: relative;
    font-size: 0;

    &:hover {
      input[type="checkbox"] {
        &:disabled {
          & ~ i {
            border-color: #dddee1;
            cursor: not-allowed;
          }
        }
      }
      i {
        border-color: #bcbcbc;
      }
    }
    input[type="checkbox"] {
      z-index: 1;
      position: absolute;
      left: 0;top: 0;
      width: 100%; height: 100%;
      opacity: 0;

      &:disabled {
        & ~ i {
          background: #f8f4f4;
        }
        & ~ span {
          color: #c0c4cc;
        }
      }
      &:checked {
        & + i {
          border-color: #409eff;
          background: #409eff;

          &:after {
            position: absolute; content: "\e61d";
            left: 50%; top: 50%;
            font-family: "iconfont" !important;
            font-size: 14px;
            color: #fff;
            transform: translate(-50%, -50%);
          }
        }
        &:disabled + i {
          background: #f5f7fa;
          border-color: #c0c4cc;

          &:after {
            color: #c0c4cc;
          }
        }
      }
    }
    i {
      position: relative;
      width: 14px; height: 14px;
      margin-right: 6px;

      border: 1px solid #dddee1;
      border-radius: 2px;
      vertical-align: middle;
      transition: all 0.3s;
    }
    span {
      line-height: 1;
      font-size: 14px;
      vertical-align: middle;
    }
  }
</style>
