module.exports = {
  root: true,
  env: {
    node: true
  },
  'extends': [
    'plugin:vue/essential',
    // 'eslint:recommended'
  ],
  rules: {
    'vue/script-indent': [
      1, 2,
      {
        'baseIndent': 1,
        'switchCase': 1
      }
    ],                                              // script 里面的内容 首行必须要有缩进
    'semi': [1, 'always'],                          // 语句强制分号结尾
    'quotes': [1, 'single'],                        // 强制使用单引号
    'eqeqeq': 1,                                    // 必须使用全等
    'eol-last': 1,                                  // 文件以换行符结束
    'camelcase': 1,                                 // 强制驼峰法命名
    'new-parens': 1,                                // new时,构造函数要有括号
    'max-params': [1, 3],                           // 函数最多只能有3个参数
    'vars-on-top': 1,                               // 变量必须在作用域顶部声明
    'comma-style': [1, 'last'],                     // 禁止在行首写逗号
    'key-spacing': [
      1,
      {
        'beforeColon': false,
        'afterColon': true
      }
    ],                                              // 对象字面量中冒号的前后空格
    'brace-style': [
      1,
      '1tbs',
      {
        'allowSingleLine': true
      }
    ],                                              // if while function 后面的{必须与if在同一行
    'default-case': 1,                              // switch语句强制default分支
    'dot-location': [1, 'property'],                // 链式调用的时候，点号必须放在第二行开头处，禁止放在第一行结尾处
    'comma-dangle': [1, 'never'],                   // 数组和对象键值对最后一个元素不能带末尾的逗号
    'semi-spacing': [
      1,
      {
        before: false,
        after: true
      }
    ],                                              // 一行有多个语句时，分号前面禁止有空格，分号后面必须有空格
    'comma-spacing': [
      1,
      {
        'before': false,
        'after': true
      }
    ],                                              // 控制逗号前后的空格
    'arrow-spacing': [
      1,
      {
        before: true,
        after: true
      }
    ],                                              // 箭头函数的箭头前后必须有空格
    'spaced-comment': [1, 'always'],                // 注释后必须有一个空格
    'keyword-spacing': [
      1,
      {
        'before': true,
        'after': true
      }
    ],                                              // 关键字前后 必须空格
    'newline-after-var': 1,                         // 变量声明后是否需要空一行
    'space-before-blocks': [1, 'always'],           // if, function 等的大括号之前必须要有空格，比如 if (a) {
    'switch-colon-spacing': [
      1,
      {
        after: true,
        before: false
      }
    ],                                              // case 的冒号前禁止有空格，冒号后必须有空格
    'lines-around-comment': [
      1,
      {
        beforeLineComment: true,
        beforeBlockComment: true,
        allowObjectStart: true
      }
    ],                                             // 注释前必须有空行
    'array-bracket-spacing': [1, 'never'],          // 数组[]内侧两头不要空格
    'space-before-function-paren': [1, 'never'],    // 函数定义时括号前面要不要有空格
    'no-var': 1,                                    // 不能使用var声明变量
    'no-eval': 1,                                   // 禁止使用 eval
    'no-empty': 1,                                  // 块语句中的内容不能为空
    'no-undef': 1,                                  // 不能有未定义的变量
    'no-dupe-keys': 1,                              // 对象不能定义重复的key
    'no-multi-str': 1,                              // 字符串不能用\换行
    'no-dupe-args': 1,                              // 函数参数不能重复
    'no-extra-semi': 1,                             // 禁止不必要的分号
    'no-func-assign': 1,                            // 禁止重复的函数声明
    'no-spaced-func': 1,                            // 函数调用时 函数名与()之间不能有空格
    'no-unused-vars': [
      1,
      {
        vars: 'all',
        args: 'after-used'
      }
    ],                                              // 不能有声明后未被使用的变量或参数
    'no-func-assign': 1,                            // 禁止将一个函数声明重新赋值，如：function foo() {} foo = bar
    'no-cond-assign': 1,                            // 禁止在条件表达式中使用赋值语句
    'no-fallthrough': 1,                            // switch 的 case 内必须有 break, return 或 throw
    'no-implied-eval': 1,                           // 禁止使用隐式eval
    'no-multi-spaces': 1,                           // 不能用多余的空格
    'no-extra-parens': 1,                           // 不允许出现多余的括号
    'no-sparse-arrays': 1,                          // 禁止在数组中出现连续的逗号，如 let foo = [,,]
    'no-duplicate-case': 1,                         // switch中的case标签不能重复
    'no-useless-concat': 1,                         // 禁止出现没必要的字符串连接
    'no-empty-function': [
      1,
      {
        allow: [
          'functions',
          'arrowFunctions'
        ]
      }
    ],                                              // 不允许有空函数，除非是将一个空函数设置为某个项的默认值
    'no-trailing-spaces': 1,                        // 一行结束后面不要有空格
    'no-floating-decimal': 1,                       // 禁止省略浮点数中的0 .5 3.
    'no-use-before-define': 1,                      // 未定义前不能使用
    'no-constant-condition': 1,                     // 禁止在条件中使用常量表达式 if(true) if(1)
    'no-inner-declarations': [1, 'both'],           // 禁止在 if 代码块内出现函数声明
    'no-multiple-empty-lines': [
      1,
      {
        max: 2
      }
    ],                                               // 空行最多不能超过2行
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off'
  },
  parserOptions: {
    parser: 'babel-eslint'
  }
}
