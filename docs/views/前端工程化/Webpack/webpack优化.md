---
title: webpack优化
date: 2020-04-26
categories:
 - 前端工程化
author: 青菜白玉汤
tags:
 - webpack
---

## 提高构建速度

### 文件的检索速度
使用include、exclude来减少检索范围

配置resolve.alias或使用resolveLoader减少检索范围

使用module.noParse确定哪些是不需要webpack处理的
```javascript
module.exports = {
  module: {
    noParse: /^(vue|vue-router|vuex)$/,
  }
}
```

### HMR
在devServer时，css是会在js里面，修改css还是js都会引起js的重新加载，如果有几百个模块，当一个模块发生变化时，所有模块都会重新加载

HRM：热模块替换，一个模块发生变化，只会重新打包这一个模块
```javascript
module.exports = {
  devServer: {
    hot: true
  }
}
```

::: warning
HMR功能无法对js和html生效
:::

情况是当修改入口文件依赖的一个文件里的代码，会重新加载整个入口文件，无法做到HMR，解决方法如下：
```javascript
// index.js
import { print } from './print.js';
print();

// 解决js无法使用HMR功能
if (module.hot) {
  module.hot.accept('./print.js', function() {
    print();
  })
}
```

至于为什么css文件就能做到HMR功能，是因为style-loader内置了`module.hot.accept`

对于html文件，没有必要做HMR功能，因为就一个html文件，如果是想做到修改html文件，浏览器会自动刷新，那么将html文件放入入口配置中即可，但是html文件改变，会重新加载整个js资源
```javascript
module.exports = {
  entry: ['main.js', 'index.html']
}
```


### oneOf
该配置的作用是Rules匹配时，只会使用第一个匹配规则的数组，因为每个不同类型的文件在进行loader转换时，都会遍历rules里面所有的loader，设置oneOf，我们就可以在它命中匹配规则后，就不需要再往后遍历了，直接停下来，这样可以提高构建的速度。

比如说vue-cli里面，针对css的配置
```javascript
module.exports = {
  module: {
    rules: [
      {
        test: /\.css$/,
        oneOf: [
          // 处理vue-modules里面的css
          {
            resourceQuery: /module/, // .css?module
            use: ['loader']
          },
          // 处理vue里面的css
          {
            resourceQuery: /\?vue/,
            use: ['loader']
          },
          // ...

          // 上面都不匹配时，就用这个处理规则，就是我们平常使用的
          {
            use: ['loader']
          }
        ]
      }
    ]
  }
}
```
### babel缓存
可以通过将loader的结果缓存起来，这样第二次构建时，对于没有发生变化的文件，就不需要进行打包，直接从缓存中拿来使用。

- cache-loader 可以在loader转换非常耗时的文件类型前使用
- babel-loader 开启options.cacheDirectory:true


### 多进程打包

### externals
用来告诉webpack哪些第三方库不需要进行编译打包，而是使用CDN的方式
```javascript
module.exports = {
  externals: {
    // 包名: 要暴露的全局变量名
    vue: 'Vue',
    'element-ui': 'ELEMENT'
  }
}
```
然后在html文件那里使用`script`标签引入使用CDN的库，有时候需要注意它们的顺序。

### dll
动态连接库，重新写一份webpack配置用来打包那些不需要经常更新的第三方库，我们通过这份webpack配置进行打包，webpack就会自动帮我们对那些包打包成dll文件
```javascript
module.exports = {
  entry: {
    vue: ['vue','vuex'],
    elementUI: ['element-ui']
  },
  output: {
    filename: '[name].dll.js',
    path: path.resolve(__dirname, 'dll'),
    library: '_dll_[name]'
  },
  plugins: [
    new webpack.DllPlugin({
      name: '_dll_[name]',
      path: path.resolve(__dirname, 'dll', '[name].manifest.json')
    })
  ]
}
```


使用时
```javascript

```

在webpack5的时代，一般不需要做DLL了，因为webpack5对于缓存方面做得很好了，用不用相差不大。vue-cli4已经将DLL去掉了

## 提高运行性能
### 1. 利用浏览器缓存
对打包的文件使用hash、chunkhash还是contenthash

- hash: webpack每次构建时都会生成的唯一hash值
- chunkhash：如果打包来自同一个chunk，那么hash值就会一样
- contenthash：根据文件内容生成的hash值

### 2. tree shaking
使用tree shaking需要在production模式下，而且必须使用ES module。

因为ES module是在编译阶段段就能确认依赖关系，因此我们能够在运行前就能根据依赖关系删除掉那些没有被使用的代码。

使用tree shaking还需要注意sideEffects问题。
```json
{
  "sideEffects": true // 表明所有代码都没有副作用
}
```
### 3. code split

```javascript
const TerserPlugin = require('terser-webpack-plugin');
module.exports = {
  optimization: {
    splitChunks: {
      chunks: 'all',
    },
    // 将当前模块的记录其他模块的hash单独打包为一个文件
    // 解决修改a文件导致b文件的contenthash变化，缓存失效
    runtimeChunk: {
      name: entrypoint => `runtime-${entrypoint.name}`
    },

    minimizer: [
      // 配置生产环境js、css的压缩方案
      new TerserPlugin({
        cache: true,
        parallel: true, // 开启多线程打包
        sourceMap: true
      })
    ]
  }
}
```

webpack会根据入口文件的个数，将项目打包成相应数量的bundle，比如说下面的例子就会打包成app和about两个bundle文件
```javascript
module.exports = {
  entry: {
    app: './src/app.js',
    about: './src/about.js'
  }
}
```

如果配置optimization，多入口的配置，会将这几个入口文件的公共依赖提取出来打包成一个单独的chunk。如果说是单入口，又想对一些文件单独打包，可以使用动态导入，webpack会对导入的文件进行单独打包。
```javascript
import('./a.js').then((res) => {

}).catch(() => {

})
```
### 4. 懒加载/预加载
##### 1. 懒加载
```javascript
import(/* webpackChunkName: 'aChunk' */'./a.js').then().catch()
```
这种我们可以设置在页面上触发某些动作时再加载这个chunk文件，这个chunk叫aChunk。

##### 2. 预加载
```javascript
import(/* webpackChunkName: 'aChunk', webpackPrefetch: true */'./a.js').then().catch()
```
预加载会等其他资源加载完毕，浏览器空闲了，再偷偷加载这个资源
