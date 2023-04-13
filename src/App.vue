<script>
import Header from './components/Headerkoa.vue'
import Footer from './components/Footerkoa.vue'
import { useProductStore } from './productsStore.js'
import { mapActions,mapState } from 'pinia'
import i18n from './locales/index'
import { createApp } from 'vue'



export default{
  async created() {
    await this.getData()
   },
   
   components:{
    Header, Footer
   },
   methods: {
     ...mapActions(useProductStore,['getData'])
    },
    computed: {
    ...mapState(useProductStore,['productList'])
  },
}

createApp.use(i18n);
</script>

<template>
  <div>
    <Header/>
    <router-view></router-view>
    <Footer/>
  </div>
</template>
