<template>
  <div class="grid grid-cols-1 sm:grid-cols-2 ">
  <Nekfeu></Nekfeu>
  <Vezedays></Vezedays>
  <img class="" src="/src/assets/Village_de_Vézelay 1.jpg" alt="">
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
