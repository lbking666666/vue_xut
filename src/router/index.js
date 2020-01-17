import Vue from 'vue'
import Router from 'vue-router'
import {routeArr} from './config.js'

Vue.use(Router)


/****
	动态创建路由
	path:路由地址、文件地址
	param:如果需要动态路由匹配如 /:id 
***/
function addNodes(path,param){
	console.log(path)
	let route = {
		path: param ? path+'/:'+param : path,
		component: (resolve) => {import (`@/pages${path}`).then((module) => {resolve(module)})}
	}
	return route;
}

let routeNodes = []
//组合路由
routeArr.map(item=>{
	routeNodes.push(addNodes(item.path,item.param))
})


export default new Router({
  mode: 'history',
  routes:  [
 	 {
      path:'/',
      redirect:'/home/index'
    },
  	...routeNodes
  ]
  
})
