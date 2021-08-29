---
title: vue2的keep-alive组件解析
date: 2021-08-29
categories:
 - 源码系列
tags:
 - Vue
---

## 概述
`keepAlive`是vue实现的一个内置组件，它自身不会渲染一个dom元素，也不会出现在父组件链中。当它包裹动态组件的时候，会缓存不活动的组件实例，而不是销毁它们。

这个内置组件的用法如下
```html
<keep-alive include="a,b">
  <!-- ... -->
</keep-alive>

<keep-alive :include="/a|b/">
  <!-- ... -->
</keep-alive>

<keep-alive :include="['a','b']">
  <!-- ... -->
</keep-alive>
```

## 缓存原理
keepAlive组件内部使用的缓存算法是LRU，核心思想是如果数据最近被访问过，那么将来被访问的几率也更高。

具体的实现就是用一个数据结构（数组、链表）来保存数据，当访问到一个数据的时候，如果这个数据没有在缓存中，而且缓存的数量也没达到上线，那么就将这个数据放到这个数据结构的首位，如果缓存数量已达上限，那么就将缓存的最后一个数据删除。如果已经存在于缓存中，那么就将缓存中的这个数据拿来使用，同时将这个数据移动到首位。

## 组件实现
宏观上组件的结构大致如下：
```javascript
export default {
  name: 'keep-alive',
  props: { include: xxx, exclude: xxx, max: xxx },
  methods: {
    cacheVNode() {}
  },
  created() {
    this.cache = Object.create(null)
    this.keys = []
  },
  destroyed() {
    for (const key in this.cache) {
      pruneCacheEntry(this.cache, key, this.keys)
    }
  },
  mounted() {
    this.cacheVNode()
    this.$watch('include', val => {
      pruneCache(this, name => matches(val, name))
    })
    this.$watch('exclude', val => {
      pruneCache(this, name => !matches(val, name))
    })
  },
  updated() {
    this.cacheVNode()
  },
  render() {}
}
```
可以看到，keepAlive组件是一个函数式组件。因此我们从render钩子函数入手。

```javascript
const slot = this.$slots.default
const vnode = getFirstComponentChild(slot)
const componentOptions = vnode && vnode.componentOptions
```
首先会获取插槽的内容，然后根据得到的插槽获取第一个组件，然后根据得到的vnode的配置，具体配置什么样，无需关心，它的作用就是获取待缓存组件的唯一标识。

然后如果说这个配置非空的话，就进行下一步，否则就直接返回这个vnode或者说插槽的第一个vnode。

首先获取vnode的组件名以及传进来的props，用于判断是否进行缓存。
```javascript
const name = getComponentName(componentOptions)
const { include, exclude } = this // 这两个是props数据
if (
  // not included
  (include && (!name || !matches(include, name))) ||
  // excluded
  (exclude && name && matches(exclude, name))
) {
  // excluded的配置命中了，说明不需要缓存这个组件，直接返回，即keep-alive要渲染成这个vnode
  return vnode
}
```

然后接下来是处理当前激活的组件是符合缓存规则的情况。

第一步是获取实现缓存的数据结构cache和keys，这两个东西是在created钩子函数里面定义的。cache对象负责保存所要缓存的vnode，而keys就是负责实现LRU的数组。
```javascript
const { cache, keys } = this

// 这里就是获取这个vnode的唯一标识
const key = vnode.key == null
  // same constructor may get registered as different local components
  // so cid alone is not enough (#3269)
  ? componentOptions.Ctor.cid + (componentOptions.tag ? `::${componentOptions.tag}` : '')
  : vnode.key
```

第二步是根据得到的组件的唯一标识来判断是否命中缓存，如果命中的话就更新缓存顺序，否则就直接添加到缓存里面。

```javascript
if (cache[key]) {
  // 缓存命中
  vnode.componentInstance = cache[key].componentInstance
  // 将这个vnode的唯一标识放到首位：先移除，再重新放进入。
  remove(keys, key) // indexOf + splice
  keys.push(key)
} else {
  // 没命中缓存

  // delay setting the cache until update
  this.vnodeToCache = vnode
  this.keyToCache = key
}

vnode.data.keepAlive = true
```

以上就是就是render的解析，通过render函数，得到了keepAlive要渲染成的组件。然后就开始进行组件的渲染，那么肯定会触发keepAlive组件的生命周期的钩子函数了。

调用render的时候，created钩子函数就已经触发了。因此接下来触发的是mounted钩子函数。

在这个钩子函数里面，主要就是缓存当前的组件，即调用cacheVNode，然后设置include和exclude的监听器，当发生变化的时候，就更新缓存。
```javascript
this.cacheVNode()
this.$watch('include', val => {
  pruneCache(this, name => matches(val, name))
})
this.$watch('exclude', val => {
  pruneCache(this, name => !matches(val, name))
})
```

首先来看一下这个methods里面的cacheVNode方法：
```javascript
const { cache, keys, vnodeToCache, keyToCache } = this
if (vnodeToCache) {
  const { tag, componentInstance, componentOptions } = vnodeToCache
  cache[keyToCache] = {
    name: getComponentName(componentOptions),
    tag,
    componentInstance,
  }
  keys.push(keyToCache)
  // prune oldest entry
  if (this.max && keys.length > parseInt(this.max)) {
    pruneCacheEntry(cache, keys[0], keys, this._vnode)
  }
  this.vnodeToCache = null
}
```
可以看到判断有没有要缓存的vnode，就是vnodeToCache有没有值，这个值就是在render阶段的时候赋值的，可以往回看一眼。在render里面，如果是命中缓存，那么这个vnodeToCache就是undefined，说明没有要缓存的组件。只有在缓存没有命中的时候才会有值。

缓存没命中，那么就需要缓存起来。然后再判断有没有设置了阈值以及目前缓存的数量有没有超过阈值，如果超过阈值，那么就需要删除掉最久那个缓存了。

具体怎么删除呢，那就来看一下这个pruneCacheEntry函数。
```javascript
function pruneCacheEntry (cache, key, keys, current) {
  const entry = cache[key]
  if (entry && (!current || entry.tag !== current.tag)) {
    entry.componentInstance.$destroy()
  }
  cache[key] = null
  remove(keys, key)
}
```
大概的逻辑就调用缓存组件的destroy钩子函数，进行组件的销毁。

以上就是cacheVNode方法的大概逻辑。接下来就是解析一下pruneCache方法。
```javascript
function pruneCache (keepAliveInstance, filter) {
  const { cache, keys, _vnode } = keepAliveInstance
  for (const key in cache) {
    const entry = cache[key]
    if (entry) {
      const name = entry.name
      if (name && !filter(name)) {
        pruneCacheEntry(cache, key, keys, _vnode)
      }
    }
  }
}
```
这个方法的作用就是在exclude或者include的值发生变化的时候，需要对缓存内容进行更新。


## 收获
1. 利用对象来保存要缓存的组件，由一个数组来完成LRU的功能，省力，在读源码之前的我，肯定会用数组来保存要缓存的组件。

