<template>
  <div class="progress-circle-item">
    <canvas :width="size" :height="size">您的浏览器不支持canvas ！</canvas>
    <div class="content">
      <slot v-if="!text.show" name="content"></slot>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'bProgressCircle',
    props: {
      size: {
        type: Number,
        default: 120
      },
      percent: {
        type: Number,
        default: 0
      },
      width: {
        type: Number,
        default: 6
      },
      trailColor: {
        type: String,
        default: '#eaeef2'
      },
      strokeColor: {
        type: String,
        default: '#2db7f5'
      },
      fullColor: {
        type: String,
        default: '#5cb85c'
      },
      text: {
        type: Object,
        default() {
          return {
            show: true,
            font: 'normal 18px Microsoft YaHei'
          };
        }
      },
      speed: {
        type: Number,
        default: 15
      }
    },
    mounted() {
      this.creat();
    },
    watch: {
      percent() {
        this.creat();
      }
    },
    methods: {
      creat() {
        let conText = this.$el.getElementsByTagName('canvas')[0].getContext('2d');
        let _this = this;
        let x = _this.size / 2;
        let y = x;
        let r = (_this.size - 2 * _this.width) / 2;
        let draw = function(percent) {

          // 清除画布 避免多次重复绘制产生锯齿
          conText.clearRect(0, 0, _this.size, _this.size);

          // 底环，即暗色环
          conText.beginPath();
          conText.strokeStyle = _this.trailColor;
          conText.arc(x, y, r, 0, Math.PI * 2);
          conText.stroke();

          // 高亮环
          conText.beginPath();
          conText.strokeStyle = percent === 100 ? _this.fullColor : _this.strokeColor;
          conText.arc(x, y, r, Math.PI * 1.5, Math.PI * (1.5 + 2 * percent / 100));
          conText.stroke();

          // 绘制文字
          if (_this.text.show) {
            conText.beginPath();
            conText.fillText(`${percent}%`, x, y);
          }
        };
        let playDraw = function() {
          let count = 0;
          let timer = null;

          timer = setInterval(function() {
            draw(count);
            count >= _this.percent ? clearInterval(timer) : count++;
          }, _this.speed);
        };

        // 线条末端圆头、文字样式设定
        conText.font = _this.text.font;
        conText.textAlign = 'center';
        conText.textBaseline = 'middle';
        conText.lineCap = _this.percent === 0 ? 'butt' : 'round';
        conText.lineWidth = _this.width;
        conText.fillStyle = _this.percent === 100 ? _this.fullColor : '#333';

        // 开始绘制图案
        _this.speed ? playDraw(): draw(_this.percent);
      }
    }
  };
</script>

<style lang="scss" scoped>
  .progress-circle-item {
    position: relative;
    display: inline-block;
    vertical-align: middle;
    font-size: 0;

    .canvas {
      display: block;
    }
    .content {
      position: absolute;
      left: 50%; top: 50%;
      font-size: 14px;
      white-space:nowrap;
      user-select: none;
      text-align: center;
      transform: translate(-50%, -50%);
    }
  }
</style>
