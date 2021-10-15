<template>
  <div class="Registros">
    <giaRegistros  /> 
    <forRegistros />
    <tblRegistros />
  </div>
</template>

<script>
import forRegistros from "@/components/registros/ForRegistros.vue";
import tblRegistros from "@/components/registros/TblRegistros.vue";
import giaRegistros from "@/components/registros/GiaRegistros.vue";
export default {
  name: "Registros",
  components: {
    forRegistros,
    tblRegistros,
    giaRegistros,
  },
};
</script>

<style scoped>

</style>