<template>
  <div class="doc-content">
    <h1>基础组件文档说明</h1>

    <DocProgressCircle></DocProgressCircle>
    <DocTransfer></DocTransfer>
    <DocDialog></DocDialog>
    <DocSideBar></DocSideBar>
    <DocAlert></DocAlert>
    <DocLoading></DocLoading>
    <DocInput></DocInput>
    <DocTextarea></DocTextarea>
    <DocRadio></DocRadio>
    <DocCheckbox></DocCheckbox>
    <DocSwitch></DocSwitch>
    <DocSelect></DocSelect>
  </div>
</template>

<script>
  import DocProgressCircle from './doc-progress-circle.vue';
  import DocTransfer from './doc-transfer.vue';
  import DocDialog from './doc-dialog.vue';
  import DocSideBar from './doc-side-bar.vue';
  import DocAlert from './doc-alert.vue';
  import DocLoading from './doc-loading.vue';
  import DocInput from './doc-input.vue';
  import DocTextarea from './doc-textarea.vue';
  import DocRadio from './doc-radio.vue';
  import DocCheckbox from './doc-checkbox.vue';
  import DocSwitch from './doc-switch.vue';
  import DocSelect from './doc-select';

  export default {
    name: 'Doc',
    components: {
      DocProgressCircle,
      DocTransfer,
      DocDialog,
      DocSideBar,
      DocAlert,
      DocLoading,
      DocInput,
      DocTextarea,
      DocRadio,
      DocCheckbox,
      DocSwitch,
      DocSelect
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
