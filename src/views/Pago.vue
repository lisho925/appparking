<template>
  <div class="pagos">
    <giaPagos /> 
    <forPagos />
    <tblPagos />
  </div>
</template>

<script>
import forPagos from "@/components/pagos/ForPagos.vue";
import tblPagos from "@/components/pagos/TblPagos.vue";
import giaPagos from "@/components/pagos/GiaPagos.vue";
export default {
  name: "Pagos",
  components: {
    forPagos,
    tblPagos,
    giaPagos,
  },
};
</script>

<style scoped>
.dueños {
  text-align: center;
}
</style>