<script setup>
import { RouterLink, RouterView } from "vue-router";

</script>

<template>
  <header class="w-full">
<nav class="flex items-center justify-between w-full bg-teal p-6">
    <div class="w-fit ">
    <div class="flex items-center flex-no-shrink text-black mr-6">
      <RouterLink to="/">
      <img class="w-10" src="/src/assets/Sans titre - 1 2.svg" alt="">
      </RouterLink>
      <RouterLink to="/" class=" font-Title text-5xl ml-4 text-black hover:text-bleu">
          Vezeday's
        </RouterLink>
    </div>
    <div class="block lg:hidden">
      <button class="flex items-center px-3 py-2  text-teal-lighter border-teal-light hover:text-white hover:border-white">
        <img src="/src/assets/menu (2) 1.jpg" alt="">
      </button>
    </div>
    </div>
    <div class="w-fit justify-end hidden flex-grow lg:flex items-center hover:text-white">
      <div class="font-Title text-5xl flex flex-row gap-5">
        <RouterLink to="/programmation" class="block mt-4 lg:inline-block lg:mt-0 text-teal-lighter text-black hover:text-bleu">
          Programmation
        </RouterLink>
        <RouterLink to="/artistes" class="block mt-4 lg:inline-block lg:mt-0 text-teal-lighter text-black hover:text-bleu">
          Artistes
        </RouterLink>
        <RouterLink to="/festival" class="block mt-4 lg:inline-block lg:mt-0 text-teal-lighter text-black hover:text-bleu">
          Festival
        </RouterLink>
        <RouterLink to="/contact" class="block mt-4 lg:inline-block lg:mt-0 text-teal-lighter text-black hover:text-bleu">
          Contact
        </RouterLink>
      </div>

    </div>
</nav>
  </header>

  <RouterView />

<footer class="mt-14">
  <div>
  <div>
    <img class="flex items-center justify-center w-10 mx-auto" src="/src/assets/Sans titre - 1 2.svg" alt="">
    <h3 class="font-Title text-black text-3xl text-center mx-auto">Vezeday's</h3>
  </div>
  <div>
    <div>
      <p>Inscrivez-vous à la newsletter des Vezeday’s pour ne rien louper </p>
      <div>
        <form action="#"> 
          <label for="email"></label>
          <input type="email" id="email" name="email" placeholder="@ e-mail">
          <button type="submit">Envoyé</button>
        </form>
      </div>
    </div>
    <div>
      <div>
        <twitter></twitter>
        <instagram></instagram>
        <facebook></facebook>
      </div>
    </div>
  </div>
  <div></div>
  </div>
</footer>
</template>

<style>
@import "@/assets/base.css";

</style>

<script>
import twitter from "./components/icons/twitter.vue"
import instagram from "./components/icons/instagram.vue"
import facebook from "./components/icons/facebook.vue"
export default {
  components: {
    twitter,
    instagram,
    facebook
  }
}
</script>
