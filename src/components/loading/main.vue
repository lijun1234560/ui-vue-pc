<template>
  <div v-show="show" class="loading-item">
    <div class="inner-wrap">
      <i :class="[icon]" class="icon iconfont"></i>
      <p v-if="text" class="text">{{text}}</p>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'bLoading',
    props: {
      value: {
        type: Boolean,
        default: false
      },
      icon: {
        type: String,
        default: 'icon-loading'
      },
      text: {
        type: String,
        default: '加载中'
      }
    },
    computed: {
      show: {
        get() {
          return this.value;
        },
        set(newValue) {
          this.$emit('input', newValue);
        }
      }
    }
  };
</script>

<style lang="scss" scoped>
  .loading-item {
    z-index: 100;
    position: fixed;
    left: 50%; top: 50%;
    width: 95px; height: 95px;
    transform: translate(-50%, -50%);
	  border-radius: 4px;
    background: rgba(0, 0, 0, 0.6);

    .inner-wrap {
      position: absolute;
      left: 50%; top: 50%;
      text-align: center;
      color: #fff;
      transform: translate(-50%, -50%);
    }
    .icon {
      font-size: 26px;
      animation: rotate 1s linear 0s infinite normal;
    }
    .text {
      margin-top: 8px;
      font-size: 12px;
    }
  }

  @keyframes rotate{
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
</style>
