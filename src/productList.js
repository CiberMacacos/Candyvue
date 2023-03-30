import { defineStore } from 'pinia';
import { collection, query, getDocs, orderBy } from 'firebase/firestore'
import { db } from '../firebase'
//aquí poner la función del random
export const productList = defineStore('productList', {
  state: () => ({
    productList: []
  }),
  actions: {
    async getData() { // esta función es la que extrae los datos del json
      const res = query(collection(db, "productos"),
        this.productos = [];
      const querySnapshot = await getDocs(res);
      querySnapshot.forEach((doc) => {
        let producto = doc.data();
        producto.id = doc.id;
        this.total = this.productos.push(producto);
        console.log(this.total);
      };
      ));

      //usar la función de random dentro de getdata
    },

  },
});
