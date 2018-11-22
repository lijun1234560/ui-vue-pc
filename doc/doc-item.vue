<template>
  <div class="doc-item">
    <h2>{{title}}</h2>

    <blockquote  class="tip">
      <slot name="tip"></slot>
    </blockquote>

    <dl class="doc-example">
      <dt>示例</dt>
      <dd>
        <div v-if="testButtons && testButtons.length" class="tool-wrap">
          <a
            v-for="(button, index) in testButtons"
            :key="index"
            @click="onTest(button);"
            class="btn"
            href="javascript:;">
            {{button.text}}
          </a>
        </div>
        <slot name="example"></slot>
      </dd>
    </dl>

    <table class="api-table">
      <caption>props & slot & event</caption>
      <thead>
        <tr>
          <th>属性</th>
          <th>说明</th>
          <th>类型</th>
          <th>默认值</th>
          <th>是否必传</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(prop, index) in param" :key="index">
          <td>{{prop.name}}</td>
          <td>{{prop.explain}}</td>
          <td>{{prop.type}}</td>
          <td>{{prop.default}}</td>
          <td>{{prop.isMust}}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
  export default {
    name: 'DocItem',
    props: {
      title: {
        type: String,
        default: '组件名 + 中文名'
      },
      testButtons: {
        type: Array,
        default() {
          return [];
        }
      },
      param: {
        default() {
          return [
            {
              name: '参数名',
              explain: '参数说明',
              type: '参数类型',
              default: '参数的默认值',
              isMust: '是否必传'
            }
          ];
        }
      }
    },
    methods: {
      onTest(button) {
        this.$emit('on-test', button);
        console.log(button);
      }
    }
  };
</script>

<style lang="scss" scoped>
  .btn {
    padding: 5px 12px;
    border: 1px solid #0079ff;
    border-radius: 4px;
    font-size: 12px;
    color: #fff;
    background: #0079ff;
    transition: all 0.3s;

    &:hover {
      border-color: #40a9ff;
      background: #40a9ff;
    }
  }
  .tip {
    padding: 5px 15px;
    line-height: 1.8;
    border-radius: 4px;
    border-left: 5px solid #50bfff;
    background: #ecf8ff;
  }
  .doc-example {
    .btn {
      margin-left: 20px;

      &:first-child {
        margin-left: 0;
      }
    }
    & > dt {
      margin-bottom: 5px;
      font-size: 12px;
    }
  }
  .api-table {
    width: 100%;
    font-family: Consolas,Menlo,Courier,monospace;
    font-size: 12px;

    caption {
      margin-bottom: 5px;
      text-align: left;
    }
    th,td {
      padding: 5px 16px;
      border: 1px solid #e9e9e9;
      text-align: left;
      white-space: nowrap;

      &:first-child {
        width: 120px;
      }
      &:nth-last-child(1),
      &:nth-last-child(2),
      &:nth-last-child(3) {
        width: 90px;
      }
    }
    thead {
      background: #f7f7f7;
      color: #5c6b77;
    }
    tbody {
      tr {
        transition: all 0.3s;

        &:hover {
          background: #eee;
        }
      }
    }
  }
  .doc-item {
    .tip {
      margin-top: 5px;
    }
    .doc-example {
      margin-top: 20px;
    }
    .api-table {
      margin-top: 20px;;
    }
  }
  .group {
    display: inline-block;
    margin-left: 30px;

    &:first-child {
      margin-left: 0;
    }
    & > dt {
      margin-bottom: 5px;
      color: #999;
      font-size: 12px;
    }
    & > dd {
      font-size: 0; // 解决间隙产生的间距

      & > * {
        font-size: 14px; // 重置样式表默认是14px
      }
    }
  }
</style>
