<template>
  <div class="doc-content">
    <h1>api 测试</h1>

    <dl class="demo-wrap">
      <dt>
        <button class="btn" @click="getUserInfo">获取用户信息</button>
      </dt>
      <dd>
        <pre>{{result1}}</pre>
      </dd>
    </dl>

    <dl class="demo-wrap">
      <dt>
        <button class="btn" @click="delUserInfo">删除用户</button>
      </dt>
      <dd>
        <pre>{{result2}}</pre>
      </dd>
    </dl>
  </div>
</template>
<script>
    import {
        apiGetUserInfo,
        apiDelUserInfo
    } from "../src/api/user";

    export default {
        name: "Http",
        data() {
            return {
                result1: '数据还没获取...',
                result2: '数据还没获取...'
            };
        },
        methods: {
            getUserInfo() {
                const params = {
                    userId: '15949565123'
                };

                apiGetUserInfo(params).then(result => {
                    console.log('---apiGetUserInfo---', result);
                    this.result1 = result;
                });
            },

            delUserInfo() {
                const params = {
                    userId: '15949565123'
                };

                apiDelUserInfo(params).then(result => {
                    console.log('---delUserInfo---', result);
                    this.result2 = result;
                });
            }
        }
    };
</script>

<style lang="scss" scoped>
    .doc-content {
        padding: 80px;

        h1 {
            margin-bottom: 30px;
            padding: 20px 0;
            font-size: 28px;
            text-align: center;
            color: red;
        }
    }
    .btn {
        padding: 5px 20px;
        border: none;
        border-radius: 4px;
        font-size: 12px;
        color: #fff;
        background: #339966;
        transition: all 0.2s;

        &:active {
            opacity: 0.8;
        }
    }
    .demo-wrap {
        display: inline-block;
        min-width: 300px;
        vertical-align: middle;
        margin-right: 100px;

        pre {
            margin-top: 10px;
            padding: 10px;
            min-height: 260px;
            border-radius: 4px;
            background: #eee;
        }
    }
</style>
