<template>
  <div class="zonas">
    <giaZonas  /> 
    <forZonas />
    <tblZonas />
  </div>
</template>

<script>
import forZonas from "@/components/zonas/ForZonas.vue";
import tblZonas from "@/components/zonas/TblZonas.vue";
import giaZonas from "@/components/zonas/GiaZonas.vue";
export default {
  name: "Zonas",
  components: {
    forZonas,
    tblZonas,
    giaZonas,
  },
};
</script>

<style scoped>
.dueños {
  text-align: center;
}
</style>