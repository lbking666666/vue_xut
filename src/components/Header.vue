<template>
  <div class="header">
      <div class="select">
        <div class="slected" @click="selectOption">选择语言：{{lang}}</div>
        <div class="option" v-if="selectedOption" v-for="(item,key) in language" @click="selectd(key)">{{item}}</div>
      </div>

      <div class="nav">
        <router-link class="link" :key='index' v-for="(item,link,index) in $t('nav')" :to="link">
            {{item}} 
        </router-link>
      </div>
  </div>
</template>

<script>
export default {
  name: 'xheader',
  data () {
    return {
      selectedOption:false,
      lan:'zh',
      language: {
          'zh': '中文',
          'en': 'English',
          'ko': '한글'
      }
    }
  },
  inject:['reload'],
  computed: {
    lang() {
      return this.language[this.getLocalStorage('lang')]||'中文';
    },
  },
  methods: {
    selectOption(){
      this.selectedOption = true;
    },
    selectd(val){
      this.lan = val
     // this.lang = val;
      window.localStorage.setItem('lang', val);
      this.selectedOption = false;
      this.$i18n.locale = this.getLocalStorage('lang')
      this.reload()
    },
    getLocalStorage(name) {
      if (window.localStorage.getItem(name) == null) {
        return '';
      } else {
        return window.localStorage.getItem(name);
      }
    }
  },
  watch: {
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
.header{
  height:96px;
  position:relative;
  width:1200px;
  margin:0 auto;
  .select{
    float:right;
    width:160px;
  }
  .nav{
    padding:20px;
    .link{
      padding: 2px 20px;
      line-height:28px;
      border-right:1px solid #ddd;
      &:last-child{
        border:0;
      }
    }
  }
}
</style>
