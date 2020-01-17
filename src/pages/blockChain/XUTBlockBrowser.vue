<template>
  <section style="padding: 20px;">
     <Header></Header>
    <div>{{$t("messages.bestAccount")}}</div>
  </section>
</template>
<script>
  import Header from '@/components/Header';
export default {
  name: '',
  data () {
    return {
    }
  },
  components: {
    Header
  },
  created() {
  },
  mounted() {
    this.langToggle()
  },
  methods: {
    langToggle(){
      this.$i18n.locale = this.getLocalStorage('lang')
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
<style lang="scss" scoped>
</style>