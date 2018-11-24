<template>
  <div>面包屑</div>
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

</style>
