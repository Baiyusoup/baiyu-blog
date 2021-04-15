const themeConfig = require('./config/theme/')

module.exports = {
  title: "青菜白玉汤",
  description: `
    while(再坚持1秒) {
      成功值 += 1
    }
  `,
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
  plugins: ['@vuepress/medium-zoom', 'flowchart'] 
}  