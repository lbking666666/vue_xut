import Vue from 'vue'
import VueI18n from 'vue-i18n'
Vue.use(VueI18n)

// 以下为语言包单独设置的场景，单独设置时语言包需单独引入
const messages = {
  'zh': require('./zh.js'),   // 中文语言包
  'en': require('./en.js'),   // 英文语言包
  'ko': require('./ko.js')    // 韩文语言包
}

export default new VueI18n({
  locale : 'zh', // set locale 默认显示中文
  fallbackLocale: 'zh',
  messages // 
})