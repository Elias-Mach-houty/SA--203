<template>
  
  <div class="grid grid-cols-1 items-center lg:grid-cols-2">
  <Nekfeu/>
  <Vezedays/>



  <img class="justify-items-center mx-auto pt-10 w-3/4" src="/src/assets/Village_de_Vézelay 1.jpg" alt="">
  <Billeterie></Billeterie>
  </div>
  
</template>

<script>
import Nekfeu from '../components/NekfeuAccView.vue'
import Vezedays from '../components/VezedaysView.vue'
import Billeterie from '../components/BilleterieAccView.vue'
export default {
  components : {
    Nekfeu,
    Vezedays,
    Billeterie
  }
}
</script>
