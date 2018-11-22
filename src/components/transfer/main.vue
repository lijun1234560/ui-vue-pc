<template>
  <div class="transfer-item">
    <div class="content-wrap">
      <div class="title-wrap">
        <b-checkbox
          v-model="unselectDataCheckedAll"
          :label="true"
          :text="titles[0]"
          :disabled="unselectData.abled.length === 0"
          @on-change="checkedAll(!!unselectDataCheckedAll[0], 'unselectData', 'moveToSelectData');">
        </b-checkbox>
        <em class="number">{{moveToSelectData.length}}/{{unselectData.all.length}}</em>
      </div>
      <div class="list-wrap">
        <b-checkbox
          v-for="(select) in unselectData.all"
          :key="select.key"
          v-model="moveToSelectData"
          :label="select.key"
          :disabled="select.disabled"
          :text="select.text">
        </b-checkbox>
      </div>
    </div>

    <div class="operation-wrap">
      <a
        :class="{'disabled': moveToUnselectData.length === 0}"
        @click="moveToUnselect"
        class="iconfont icon-left"
        href="javascript:;">
      </a>
      <a
        :class="{'disabled': moveToSelectData.length === 0}"
        @click="moveToSelect"
        class="iconfont icon-right"
        href="javascript:;">
      </a>
    </div>

    <div class="content-wrap">
      <div class="title-wrap">
        <b-checkbox
          v-model="selectDataCheckedAll"
          :label="true"
          :text="titles[1]"
          :disabled="selectData.abled.length === 0"
          @on-change="checkedAll(!!selectDataCheckedAll[0], 'selectData', 'moveToUnselectData');">
        </b-checkbox>
        <em class="number">{{moveToUnselectData.length}}/{{selectData.all.length}}</em>
      </div>
      <div class="list-wrap">
        <b-checkbox
          v-for="(select) in selectData.all"
          :key="select.key"
          v-model="moveToUnselectData"
          :label="select.key"
          :disabled="select.disabled"
          :text="select.text">
        </b-checkbox>
      </div>
    </div>
  </div>
</template>

<script>
  import bCheckbox from '../checkbox/main.vue';

  export default {
    name: 'bTransfer',
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
      titles: {
        type: Array,
        default() {
          return ['源列表', '目的列表'];
        }
      }
    },
    computed: {
      // 左侧数据
      unselectData() {
        let select = Array.from(new Set(this.value));
        let result = {
          all: [], // 全部的数据
          abled: [], // 可点击的
          disabled: [] // 不可点击的
        };

        for (let i = 0; i < this.data.length; i++) {
          let isIn = true; // 标记是否已经存在 已选择数据里面

          for (let j = 0; j < select.length; j++) {
            if (this.data[i].key === select[j]) {
              isIn = false; // 已经存在 已选择数据里面
              break;
            }
          }

          if (isIn) {
            result.all.push(this.data[i]);
            switch (this.data[i].disabled) {
              case true:
                result.disabled.push(this.data[i]);
                break;
              case false:
                result.abled.push(this.data[i]);
                break;
              default:
                break;
            }
          }
        }

        return result;
      },

      // 右侧数据
      selectData() {
        let select = Array.from(new Set(this.value));
        let result = {
          all: [], // 全部的数据
          abled: [], // 可点击的
          disabled: [] // 不可点击的
        };

        for (let i = 0; i < this.data.length; i++) {
          for (let j = 0; j < select.length; j++) {
            if (this.data[i].key === select[j]) {
              result.all.push(this.data[i]);
              switch (this.data[i].disabled) {
                case true:
                  result.disabled.push(this.data[i]);
                  break;
                case false:
                  result.abled.push(this.data[i]);
                  break;
                default:
                  break;
              }
              break;
            }
          }
        }

        return result;
      }
    },
    data() {
      return {
        unselectDataCheckedAll: [], // 左侧全选标记
        moveToSelectData: [], // 左侧已选的数据
        selectDataCheckedAll: [], // 右侧全选标记
        moveToUnselectData: [] // 右侧已选的数据
      };
    },
    watch: {
      moveToSelectData(newValue) {
        this.unselectDataCheckedAll = newValue.length === this.unselectData.abled.length ? newValue.length === 0 ? [] : [true] : [];
      },
      moveToUnselectData(newValue) {
        this.selectDataCheckedAll = newValue.length === this.selectData.abled.length ? newValue.length === 0 ? [] : [true] : [];
      }
    },
    methods: {
      // 全选 反选
      checkedAll(isCheckedAll, data, select) {
        this[select] = isCheckedAll ? this[data].abled.map(item => item.key) : [];
      },

      // 把左侧数据 移动 到右侧
      moveToSelect() {
        let select = JSON.parse(JSON.stringify(Array.from(new Set(this.value))));

        if (!this.moveToSelectData.length) {
          return;
        }

        this.$emit('on-change', {
          direction: 'right',
          data: this.unselectData,
          select: this.moveToSelectData
        });

        select.push(...this.moveToSelectData);
        this.moveToSelectData = [];
        this.selectDataCheckedAll = []; // 右侧全选 不打勾
        this.$emit('input', select);
      },

      // 把右侧数据 移动 到左侧
      moveToUnselect() {
        let select = JSON.parse(JSON.stringify(Array.from(new Set(this.value))));

        if (!this.moveToUnselectData.length) {
          return;
        }

        this.$emit('on-change', {
          direction: 'left',
          data: this.selectData,
          select: this.moveToUnselectData
        });

        for (let i = 0; i < this.moveToUnselectData.length; i++) {
          select.splice(select.indexOf(this.moveToUnselectData[i]), 1);
        }

        this.moveToUnselectData = [];
        this.unselectDataCheckedAll = []; // 左侧全选 不打勾
        this.$emit('input', select);
      }
    }
  };
</script>

<style lang="scss" scoped>
  .transfer-item {
    position: relative;
    height: 280px;
    overflow: hidden;

    .operation-wrap {
      position: absolute;
      left: 50%; top: 50%;
      transform: translate(-50%, -50%);

      a {
        display: block;
        width: 25px; height: 25px;
        line-height: 25px;
        text-align: center;
        border-radius: 50%;
        color: #fff;
        background: #f3f3f3;
        transition: all 0.3s;

        &:hover {
          background: #50bfff;

          &.disabled {
            background: #f3f3f3;
          }
        }
        &:first-child {
          margin-bottom: 20px;
        }
      }
    }
    .content-wrap {
      float: left;
      width: calc(50% - 33px); height: 100%;
      border: 1px solid #dddee1;
      border-radius: 6px;
      overflow: hidden;

      &:first-child {
        margin-right: 65px;
      }
      .title-wrap {
        position: relative;
        padding: 8px 10px;
        font-size: 0;
        border-bottom: 1px solid #ddd;
        background: #f9fafc;

        .number {
          position: absolute;
          right: 10px; top: 50%;
          font-size: 12px;
          color: #c0c4cc;
          transform: translate(0, -50%);
        }
      }
    }
    .list-wrap {
      max-height: calc(100% - 31px);
      overflow-y: auto;

      .checkbox-item {
        display: block;
        padding: 6px 10px;
        transition: all 0.3s;

        &:hover {
          background: #ecf8ff;
        }
      }
    }
  }
</style>

<style lang="scss">
  .transfer-item {
    .checkbox-item {
      i {
        margin-right: 10px !important;
      }
    }
  }
</style>
