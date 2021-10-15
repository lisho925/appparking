<template>
  <div class="home">
    <img alt="Fondo" src="../assets/fondo.png">
    <Inicio msg="Parking Controller"/>
    
  </div>
</template>

<script>
// @ is an alias to /src
import Inicio from '@/components/Inicio.vue'

export default {
  name: 'Home',
  components: {
    Inicio
  }
}
</script>