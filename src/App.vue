<script>
import Header from './components/Headerkoa.vue'
import Footer from './components/Footerkoa.vue'
import { useProductStore } from './productsStore.js'
import { mapActions,mapState } from 'pinia'
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { almacen } from './stores/auth.js'

const datos = almacen()

const auth = getAuth();

onAuthStateChanged(auth, (user) => {
  if (user) {
    const uid = user.uid;
    datos.isLoggedIn = true;
    console.log('verdadero')
  } else {
    datos.isLoggedIn = false;
    console.log('falso')
  }
});


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
 
</script>

<template>
  <div>
    <Header/>
    <router-view></router-view>
    <Footer/>
  </div>
</template>
