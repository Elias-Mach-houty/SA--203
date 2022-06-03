<script setup>
import { RouterLink, RouterView } from "vue-router";

</script>

<template>
  <header class="w-full">
<nav class="flex items-center justify-between w-full p-6">
    
    <div class="flex items-center text-black mr-6">
      <RouterLink to="/">
      <img class="w-10 justify-end" src="/src/assets/Sanstitre-12.svg" alt="">
      </RouterLink>
      <RouterLink to="/" class=" font-Title text-5xl ml-4 text-black hover:text-bleu">
          Vezeday's
        </RouterLink>
    </div>
    <div class="block lg:hidden">

    </div>
    <div id="menu"
  class="fixed inset-0 translate-x-full bg-bleu motion-safe:duration-1000 motion-safe:transition-transform z-50"
  :class="{ 'translate-x-0': menuOuvert }">
  <ul class="hiddenjustify-center gap-2 font-Title text-5xl pt-32 text-right pr-14 text-black ">
    <li class="pt-10"><router-link to="/programmation">Programmation</router-link></li>
    <li  class="pt-10"><router-link to="/artistes">Artistes</router-link></li>
    <li class="pt-10"><router-link to="/festival">Festival</router-link></li>
    <li class="pt-10"><router-link to="/contact">Contact</router-link></li>
  </ul>
</div>
<button
        class="relative z-50 text-xl lg:hidden"
        aria-haspopup="true"
        aria-controls="menu"
        :aria-expanded="menuOuvert"
        @click="menuOuvert = !menuOuvert"
      >
       <img src="/src/assets/menu(2)1.svg" alt="">
      </button>
    
    
    <div class="w-fit justify-end hidden flex-grow lg:flex items-center ">
      <div class="font-Title text-5xl flex flex-row gap-5">
        <RouterLink to="/programmation" class="block mt-4 lg:inline-block lg:mt-0 text-teal-lighter text-black hover:text-bleu">
          Programmation
        </RouterLink>
        <RouterLink to="/artistes" class="block mt-4 lg:inline-block lg:mt-0 text-teal-lighter text-black hover:text-orange">
          Artistes
        </RouterLink>
        <RouterLink to="/festival" class="block mt-4 lg:inline-block lg:mt-0 text-teal-lighter text-black hover:text-orange">
          Festival
        </RouterLink>
        <RouterLink to="/contact" class="block mt-4 lg:inline-block lg:mt-0 text-teal-lighter text-black hover:text-rouge">
          Contact
        </RouterLink>
      </div>

    </div>
</nav>
  </header>

  <RouterView />

<footer class="mt-14">
  <div class="flex flex-col items-center">
  <div>
    <img class="flex items-center justify-center w-10 mx-auto" src="/src/assets/Sanstitre-12.svg" alt="">
    <h3 class="font-Title text-black text-3xl text-center mx-auto">Vezeday's</h3>
  </div>
  <div class="flex justify-around flex-col items-center sm:flex-row w-8/12 mt-5 mb-5">
    <div class="flex flex-col items-center">
      <p class="w-60 text-bleu font-Corps text-center mb-3">Inscrivez-vous à la newsletter des Vezeday’s pour ne rien louper </p>
      <div>
        <form action="#"> 
          <label for="email"></label>
          <input type="email" id="email" name="email" placeholder="@ e-mail" class="border-2 border-black rounded-md text-black font-Corps">
          <button type="submit" class="w-28 bg-bleu rounded-md text-black font-Corps p-1 mx-2">Envoyé</button>
        </form>
      </div>
    </div>
    <div class="flex flex-col items-center">
      <div class="flex justify-between w-32 mb-3">
        <twitter></twitter>
        <instagram></instagram>
        <facebook></facebook>
      </div>
      <p class="font-Corps text-black text-center">
        Retrouvez nous sur nos réseaux sociaux
      </p>
    </div>
  </div>
  <div class="flex justify-evenly w-2/4 font-Corps text-black mb-5">
    <RouterLink to="/programmation">
      <p class="hover:text-bleu">
        Programmation
      </p>
    </RouterLink>
    <RouterLink to="/festival">
       <p class="hover:text-bleu">
        Festival
      </p>
    </RouterLink>
    <RouterLink to="/contact">
       <p class="hover:text-bleu">
        Contact
      </p>
    </RouterLink>
    <RouterLink to="/mentionslegales">
       <p class="hover:text-bleu">
        Mentions Légales
      </p>
    </RouterLink>
        <RouterLink to="/styleguide">
       <p class="hover:text-bleu">
        Guide de style
      </p>
    </RouterLink>
  </div>
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
  },
   name: "App",
  data() {
    return {
      menuOuvert: false,
    };
  },
  name: "App",
  data() {
    return {
      menuOuvert: false,
    };
  },
  beforeMount() {
    this.$router.afterEach(() => (this.menuOuvert = false));
  },
}
</script>
