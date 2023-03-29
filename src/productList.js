import { defineStore } from 'pinia';

export const productList = defineStore('productList', {
  state: () => ({

  }),
  actions: {

  },
});

/*
async function getProducts() {
  const res = await fetch("./assets/products.json");
  const json = await res.json();
  console.log(json);
  return json;
}
*/
