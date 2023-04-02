<template>
  <div class="flex flex-col md:flex-col lg:flex-row lg:gap-9 md:gap-3 gap-3 md:w-48 md:h-48 lg:w-full lg:h-72">
    <div
      class="flex flex-row md:flex-col lg:flex-col gap-2 items-center border-1 lg:text-center border-gray-100 rounded-lg shadow-lg lg:shadow-xl lg:w-60 lg:h-72 lg:hover:scale-110 md:hover:scale-110 md:hover:ease-linear duration-150 ease-in">
      <img
        class="w-20 h-20 md:w-full lg:w-full md:h-full lg:h-48 rounded-l-lg md:rounded-t-lg md:rounded-bl-none lg:rounded-t-lg lg:rounded-bl-none"
        src=image alt=name>
      <div class="flex flex-col lg:p-4 gap-2">
        <h1><a class="font-bold text-left p-3" href="details.html?id=id">name</a></h1>
        <h3 class="font-semibold">doc.data().price€</h3>
      </div>
    </div>
  </div>
</template>

<script>
import { collection, query, getDocs } from "firebase/firestore";
import { db } from "../firebase.js"
export default {
  name: "productsRecommended",
  data() {
    return {
      products: [],
    }
  },
  props: {
    name: { type: String },
    id: { type: Number },
    price: { type: Number },
    image: { type: String }
  },
  methods: {
    async getProducts() {
      const first = query(collection(db, "products"));
      const querySnapshot = await getDocs(first);
      querySnapshot.forEach((doc) => {
        let product = doc.data();
        product.id = doc.id;
        products.push(product);
        console.log(products);
      });
    }
  }
}
</script>

<style>
</style>
