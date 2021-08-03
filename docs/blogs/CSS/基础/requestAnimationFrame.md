---
title: 帧动画
date: 2021-08-03
categories:
 - CSS
---

window.requestAnimationFrame()告诉浏览器，我希望执行一个动画，并且要求浏览器在下次`重绘`之前调用指定的回调函数更新动画。

在requestAnimationFrame之前，主要借助setTimeout/setInterval来编写动画。动画是由浏览器按照一定频率一帧一帧地绘制，由js控制的setTimeout/setInterval的计时不是很准确，具体的原因在于事件循环。因此通过js控制的动画，浏览器无法保证每一帧渲染的时间间隔，而且在刷新间隔之间发送了其他绘制请求，会导致某些帧丢失，这导致动画效果并不是想要的效果。

动画的关键在于动画帧之间的事件间隔设置，合适的时间间隔能够使动画帧之间具有连贯性，动画效果平滑流畅，而且能够保证浏览器有足够的时间及时完成渲染。

一般平滑流畅的动画的时间间隔大约是16.7ms。requestAnimationFrame的回调函数执行次数通常是每秒60次，当处于后台标签或者隐藏的iframe里面时，requestAnimationFrame会被暂停调用。

```javascript
function animationFunc(timestamp) {
  // do something
  window.requestAnimationFrame(animationFunc)
}
window.requestAnimationFrame(animationFunc)
```