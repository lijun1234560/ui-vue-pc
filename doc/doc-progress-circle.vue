<template>
  <DocItem :title="'ProgressCircle 进度环'" :param="param">
    <div slot="tip">
      进度环中间默认显示进度值，进度低于100%时为黑色(#333)，当进度为100%时，字体颜色为【full-color】字段的值<br>
      0% --> 100%（包含0%和100%）这个期间 除文字颜色外，其它行为样式均表现一致，表现行为取决于【text.font】字段<br>
      如果需自定义进度环中间内容及展示不同阶段表现出的行为样式，务必将【text.show】字段设置为false来使自定义内容生效 <br>
      如果进度环中间的进度值是您自己构造的，那么数字不会产生滚动效果（如示例2），解决办法是使用 setInterval手动去修改这个percent的一个副本，
      速度和务必和speed保持一致，具体操作请参考【示例3】<br>
      注：可以尝试点击下面三个进度环，来动态增加进度值<br>
    </div>

    <template slot="example">
      <b-progress-circle
        :size="140"
        :percent="percent"
        @click.native="percentIncrease">
      </b-progress-circle>

      <b-progress-circle
        :size="140"
        :percent="75"
        :trail-color="'transparent'"
        :stroke-color="'#ff5500'"
        :text="{show: false}"
        :speed="0">
        <p slot="content">
          <span style="font-size: 18px;">值：85%</span>
        </p>
      </b-progress-circle>

      <b-progress-circle
        :size="140"
        :percent="percent"
        :trail-color="'transparent'"
        :stroke-color="'#ff5500'"
        :text="{show: false}"
        @click.native="percentIncrease">
        <p slot="content">
          <span v-if="percentTemp !== 100" style="font-size: 18px;">值：{{percentTemp}}%</span>
          <span v-else style="font-size: 20px; color: #5cb85c">ok</span>
        </p>
      </b-progress-circle>

      <b-progress-circle
        :size="140"
        :percent="percent"
        :text="{show: false}"
        :full-color="'#ff5e5e'"
        @click.native="percentIncrease">
        <div slot="content" style="color: #888;">
          <small>消费人群规模</small>
          <p>占总人数{{percent}}%</p>
        </div>
      </b-progress-circle>
    </template>
  </DocItem>
</template>

<script>
  import DocItem from './doc-item.vue';
  import bProgressCircle from '../src/components/progress-circle/main.vue';

  export default {
    name: 'DocProgressCircle',
    components: {
      DocItem,
      bProgressCircle
    },
    data() {
      return {
        param: [
          {
            name: 'size',
            explain: '图表的宽度和高度，单位px',
            type: 'Number',
            default: 120,
            isMust: false
          },
          {
            name: 'percent',
            explain: '进度值，单位%，0-100，包含0和100',
            type: 'Number',
            default: 0,
            isMust: false
          },
          {
            name: 'width',
            explain: '环的宽度，单位px',
            type: 'Number',
            default: 5,
            isMust: false
          },
          {
            name: 'trail-color',
            explain: '进度环的背景颜色，即暗色环的颜色',
            type: 'String',
            default: '#eaeef2',
            isMust: false
          },
          {
            name: 'stroke-color',
            explain: '进度环的颜色，即高亮环的颜色(当进度不是100%时)',
            type: 'String',
            default: '#2db7f5',
            isMust: false
          },
          {
            name: 'full-color',
            explain: '当进度是100%时，高亮环的颜色',
            type: 'String',
            default: '#5cb85c',
            isMust: false
          },
          {
            name: 'text',
            explain: '进度环里面默认文字样式',
            type: 'Object',
            default: {
              show: true,
              font: 'normal 18px Microsoft YaHei'
            },
            isMust: false
          },
          {
            name: 'speed',
            explain: '动画速度，如果不需要动画效果，传递0即可，单位毫秒',
            type: 'Number',
            default: 15,
            isMust: false
          },
          {
            name: 'slot="content"',
            explain: '自定义显示中间内容，默认水平和垂直都居中且文字强制不换行，',
            type: '-',
            default: '-',
            isMust: '-'
          }
        ],
        percent: 80,
        percentTemp: 0
      };
    },
    mounted() {
      this.percentTempFn();
    },
    methods: {
      percentIncrease() {
        this.percent = this.percent + 10 > 100 ? 0 : this.percent + 10;
        this.percentTempFn();
      },
      percentTempFn() {
        let _this = this;
        let timer = null;

        _this.percentTemp = 0;
        timer = setInterval(function() {
          _this.percentTemp >= _this.percent ? clearInterval(timer) : _this.percentTemp++;
        }, 15);
      }
    }
  };
</script>

<style lang="scss" scoped>
  .progress-circle-item {
    margin-left: 60px;

    &:first-child {
      margin-left: 0;
    }
  }
</style>
