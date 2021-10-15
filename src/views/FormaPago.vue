<template>
  <div class="formapago">
    <giaFormaPago /> 
    <forFormaPago />
    <tblFormaPago />
  </div>
</template>

<script>
import forFormaPago from "@/components/formapago/ForFormaPago.vue";
import tblFormaPago from "@/components/formapago/TblFormaPago.vue";
import giaFormaPago from "@/components/formapago/GiaFormaPago.vue";
export default {
  name: "FormaPago",
  components: {
    forFormaPago,
    tblFormaPago,
    giaFormaPago,
  },
};
</script>

<style scoped>
.formapago {
  text-align: center;
}
</style>