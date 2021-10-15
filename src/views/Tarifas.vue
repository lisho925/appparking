<template>
  <div class="tarifa">
    <giaTarifas  /> 
    <forTarifas />
    <tblTarifas />
  </div>
</template>

<script>
import forTarifas from "@/components/tarifas/ForTarifas.vue";
import tblTarifas from "@/components/tarifas/TblTarifas.vue";
import giaTarifas from "@/components/tarifas/GiaTarifas.vue";
export default {
  name: "Tarifas",
  components: {
    forTarifas,
    tblTarifas,
    giaTarifas,
  },
};
</script>

<style scoped>
.tarifa {
  text-align: center;
}
</style>