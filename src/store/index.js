import Vue from 'vue'
import Vuex from 'vuex'
import createLogger from 'vuex/dist/logger'
import header from './modules/header'
import login from './modules/login'
import home from './modules/home'
import ranking from './modules/ranking'
Vue.use(Vuex)

const debug = process.env.NODE_ENV !== 'production'
// env里去获取当前的环境是否需要开启严格模式
// 在发布环境开启严格模式会造成性能上不必要的损失

export default new Vuex.Store({
	// 默认导出vuex模块
	modules: {
		// 导入模块
		header,
		login,
		home,
		ranking
	},
	strict: debug,
	// plugins: debug ? [createLogger()] : []
	// 是否开启严格模式
})
