<template>
  <div class="select-item">
    <div class="select-wrap">
      <!-- 图标 开始 -->
      <i
        v-if="selectKey.length"
        @click="clearAllSelect"
        class="iconfont icon-error btn-clear">
      </i>
      <i class="iconfont icon-arrow_u icon-arrow"></i>
      <!-- 图标 结束 -->

      <!-- 已选中的元素 开始 -->
      <a
        v-for="(selectItem, index) in selectData"
        :key="selectItem.key"
        @click="delSelect(selectItem.key, index)"
        class="item" href="javascript:;">
        <span>{{selectItem.text}}</span>
        <i class="iconfont icon-delete btn-delete"></i>
      </a>
      <!-- 已选中的元素 结束 -->

      <input type="text">
    </div>

    <div class="list-wrap">
      <div class="no-data-wrap">无匹配数据</div>

      <b-checkbox
        v-for="(listItem) in data"
        :key="listItem.key"
        v-model="selectKey"
        :label="listItem.key"
        :disabled="listItem.disabled"
        :text="listItem.text">
      </b-checkbox>
    </div>
  </div>
</template>

<script>
  import bCheckbox from '../checkbox/main.vue';

  export default {
    name: 'bSelect',
    components: {
      bCheckbox
    },
    props: {
      value: {
        type: Array,
        required: true
      },
      data: {
        type: Array,
        required: true
      },
      writeable: {
        type: Boolean,
        default: false
      },
      searchable: {
        type: Boolean,
        default: false
      },
      multiple: {
        type: Boolean,
        default: false
      },
      disabled: {
        type: Boolean,
        default: false
      },
      placeholder: {
        type: String,
        default: '无匹配数据'
      }
    },
    computed: {
      selectData() {
        const dataKey = this.data.map(item => item.key);
        const keyIndexArr = this.selectKey.map(key => dataKey.indexOf(key));

        return keyIndexArr.map(key => this.data[key]);
      },

      // 从 下拉列表中 被选中的元素的key 值会存在此
      selectKey: {
        get() {
          return this.value;
        },
        set(newValue) {
          this.$emit('input', newValue);
        }
      }
    },
    data() {
      return {
        //
      };
    },
    methods: {
      clearAllSelect() {
        this.selectKey = [];
      },
      delSelect(key) {
        this.selectKey = this.selectKey.filter(keyItem => keyItem !== key);
      }
    }
  };
</script>

<style lang="scss" scoped>
  .select-item {
    position: relative;

    &:hover {
      .list-wrap {
        transform: scaleY(1);
      }
    }
  }
  .select-wrap {
    position: relative;
    padding: 5px 10px;
    min-height: 34px;
    border: 1px solid #dddee1;
    border-radius: 4px;

    .btn-clear,
    .icon-arrow {
      position: absolute;
      right: 10px;
    }
    .icon-arrow {
      top: 50%;
      font-size: 16px;
      color: #bcbcbc;
      transform: translate(0, -50%);
    }
    .btn-clear {
      z-index: 5;
      top: 9px;
      cursor: pointer;
      color:#dddee1;
      opacity: 0;
      transition: all 0.3s;

      & ~ .icon-arrow {
        opacity: 0;
      }
      &:hover {
        color: #bcbcbc;
      }
    }
    .item {
      position: relative;
      margin-right: 8px;
      padding: 2px 5px;
      color: #409eff;
      font-size: 12px;
      background: #e8f5ff;
      cursor: default;

      &:hover {
        z-index: 10; // 避免清楚按钮遮挡
      }
      .icon-delete {
        margin-left: 5px;
        cursor: pointer;
      }
    }
    input[type="text"] {
      width: 10px; height: 22px;
      border: none;
    }
    .item,
    input[type="text"] {
      vertical-align: middle;
    }
    &:hover {
      .btn-clear {
        opacity: 1;
      }
    }
  }
  .list-wrap {
    z-index: 10;
    position: absolute;
    left: 0; right: 0; top: 100% + 20;
    padding: 5px 0;
    border: 1px solid #dddee1;
    border-radius: 4px;
    background: #fff;
    box-shadow: 0 0 8px 0 rgba(0, 0, 0, 0.22);
    transform-origin: center top;
    transition: all .4s;
    transform: scaleY(0);

    .checkbox-item {
      display: block;
      padding: 8px 10px;
      transition: all 0.3s;

      &:hover {
        background: #ecf8ff;
      }
    }
  }
  .no-data-wrap {
    text-align: center;
    color: #c0c4cc;
  }
</style>
