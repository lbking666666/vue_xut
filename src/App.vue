<template>
  <div id="app">
    <router-view v-if="isRouteAlive"/>
  </div>
</template>

<script>
export default {
  name: 'App',
  provide(){
    return {
      reload:this.reload
    }
  },
  data(){
    return{
      isRouteAlive:true
    }
  },
  methods: {
    reload(){
      this.isRouteAlive = false;
      this.$nextTick(()=>{
        this.isRouteAlive = true;
      })
    }
  },
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}
</style>
