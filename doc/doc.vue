<template>
  <div class="doc-content">
    <h1>基础组件文档说明</h1>
  </div>
</template>

<script>
  export default {
    name: 'Doc',
    components: {

    }
  };
</script>

<style lang="scss" scoped>
  h1 {
    margin-bottom: 30px;
    font-size: 28px;
    color: #409eff;
  }
  .doc-content {
    margin: 0 auto;
    min-width: 1900px;
    padding: 20px 160px;

    .doc-item {
      margin-bottom: 20px;
      padding: 20px;
      border: 1px dashed #eee;
      border-radius: 6px;
      transition: all 0.5s;

      &:hover {
        border-color: transparent;
        box-shadow: 0 0 8px 0 rgba(0, 0, 0, 0.3);
      }
    }
  }
</style>
