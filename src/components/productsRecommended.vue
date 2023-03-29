<template>
  <!--Sección productos recomendados-->
  <!--Título-->
  <div class="flex flex-col justify-center items-center m-5 gap-6 md:m-10">
    <h1 class="self-start text-sm md:text-lg md:text-pink-800 font-bold">Productos recomendados</h1>
    <!--Productos-->
    <div id="recomended"
      class="grid w-full md:grid-cols-2 lg:grid-cols-4 gap-5 md:w-5/6 md:gap-24 lg:w-auto lg:gap-10 py-5 md:py-12 lg:py-16">
      <!--Productos-->
      <div class="flex flex-col md:flex-col lg:flex-row lg:gap-9 md:gap-3 gap-3 md:w-48 md:h-48 lg:w-full lg:h-72">
        <div
          class="flex flex-row md:flex-col lg:flex-col gap-2 items-center border-1 lg:text-center border-gray-100 rounded-lg shadow-lg lg:shadow-xl lg:w-60 lg:h-72 lg:hover:scale-110 md:hover:scale-110 md:hover:ease-linear duration-150 ease-in">
          <img
            class="w-20 h-20 md:w-full lg:w-full md:h-full lg:h-48 rounded-l-lg md:rounded-t-lg md:rounded-bl-none lg:rounded-t-lg lg:rounded-bl-none"
            src="${json[chosenProducts[i]].image}" alt="${json[chosenProducts[i]].name}"></a>
          <div class="flex flex-col lg:p-4 gap-2">
            <h1><a class="font-bold text-left p-3"
                href="details.html?id=${json[chosenProducts[i]].id}">${json[chosenProducts[i]].name}</a></h1>
            <h3 class="font-semibold">${json[chosenProducts[i]].price}€</h3>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {

}
</script>

<style>
</style>
