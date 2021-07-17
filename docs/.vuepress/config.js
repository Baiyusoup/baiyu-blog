const themeConfig = require('./themeConfig')

module.exports = {
  title: "青菜白玉汤",
  description: '个人博客',
  base: '/baiyu/',
  dest: 'public',
  head: [
    ['link', { rel: 'icon', href: '/favicon.ico' }],
    ['meta', { name: 'viewport', content: 'width=device-width,initial-scale=1,user-scalable=no' }]
  ],
  theme: 'reco',
  themeConfig,
  markdown: {
    lineNumbers: true
  },
  plugins: [
    'flowchart',
    '@vuepress-reco/vuepress-plugin-pagation',
    'permalink-pinyin'
  ] 
}  