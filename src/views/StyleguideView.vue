<template>
    <h2 class="font-Title text-black mx-auto text-center text-5xl">Guide de Style</h2>
    <h3 class="font-Title text-black mx-auto text-center text-3xl mt-16">Couleurs</h3>
    <div class="justify-between justify-items-center w-3/4 mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 mt-10">
        <img class="w-44 h-44" src="/src/assets/Ellipse 1.png" alt="">
        <img class="w-44 h-44" src="/src/assets/Ellipse 3.png" alt="">
        <img class="w-44 h-44" src="/src/assets/Ellipse 2.png" alt="">
        <img class="w-44 h-44" src="/src/assets/Ellipse 4.png" alt="">
    </div>
    <div class="text-black text-center mx-auto">
        <h3  class="font-Title text-black mx-auto text-center text-3xl mt-16">Typographie</h3>
        <p class="font-Title text-5xl mt-10">Square Peg - 48 px ( Titre du site et titres des différentes pages) </p>
        <p class="font-Title text-3xl mt-10">Square Peg - 30 px ( Sous-titres des différentes pages) </p>
        <p class="font-Corps text-base mt-10">Oswald - 16 px ( Police de corps du site) </p>
    </div>
    <div class="grid grid-cols1 justify-items-center ">
        <h3  class="font-Title text-black mx-auto text-center text-3xl mt-16">Logotype</h3>
        <img class="mt-10" src="/src/assets/Sans titre - 1 2.jpg" alt="">
        <img class="w-52 mt-10" src="/src/assets/Sans titre - 1 2.jpg" alt="">
        <img class="w-28 mt-10" src="/src/assets/Sans titre - 1 2.jpg" alt="">
    </div>
    <div>
        <h3  class="font-Title text-black mx-auto text-center text-3xl mt-16">Icônes</h3>
        <div class="flex justify-between justify-items-center w-64 mx-auto mt-10">
        <twitter></twitter>
        <facebook></facebook>
        <instagram></instagram>
      </div>
    </div>
</template>

<script>
import twitter from "../components/icons/twitter.vue"
import instagram from "../components/icons/instagram.vue"
import facebook from "../components/icons/facebook.vue"

export default {
  components: { 
    twitter,
    instagram,
    facebook
    },
        

        
}
</script>