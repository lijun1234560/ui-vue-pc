<template>
  <div class="breadcrumb-item">
    <div class="path-item">
      <router-link to="/">路径1</router-link>
      <i class="tag iconfont icon-right"></i>
    </div>

    <div class="path-item">
      <router-link to="/">路径1</router-link>
      <i class="tag iconfont icon-right"></i>
    </div>

    <div class="path-item">
      <router-link to="/">路径1</router-link>
      <i class="tag iconfont icon-right"></i>
    </div>

    <div class="path-item">
      <router-link to="/">路径1</router-link>
      <i class="tag iconfont icon-right"></i>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'bBreadcrumb',
    props: {

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
  .breadcrumb-item {
    font-size: 0;

    .path-item {
      display: inline-block;
      margin-right: 10px;
      font-size: 14px;
      vertical-align: middle;
      transition: all 0.3s;

      &:last-child {
        margin-right: 0;
        cursor: not-allowed;

        a {
          pointer-events: none;
        }
        .tag {
          display: none;
        }
      }
      a {
        &:hover {
          color: #409eff;
        }
      }
      .tag {
        margin-left: 10px;
        color: #c0c4cc;
      }
    }
  }
</style>
