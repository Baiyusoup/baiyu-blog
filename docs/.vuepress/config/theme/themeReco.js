module.exports = {
  type: 'blog',
  // 博客设置
  blogConfig: {
    category: {
      location: 4, // 在导航栏菜单中所占的位置，默认2
      text: '文章分类' // 默认 “分类”
    },
    tag: {
      location: 2, // 在导航栏菜单中所占的位置，默认3
      text: '标签' // 默认 “标签”
    }
  },
  // 最后更新时间
  lastUpdated: 'Last Updated', // string | boolean
  // 作者
  author: '青菜白玉汤',
  // 备案号
  record: '青菜白玉汤',
  // 项目开始时间
  startYear: '2021',
  plugins: [
    [
      //彩带背景 先安装在配置， npm install vuepress-plugin-ribbon --save
      "ribbon",
      {
        size: 90,     // width of the ribbon, default: 90
        opacity: 0.8, // opacity of the ribbon, default: 0.3
        zIndex: -1    // z-index property of the background, default: -1
      }
    ],
  ]
}