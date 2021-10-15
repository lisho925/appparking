<template>
  <div class="tipoVehiculos">
    <giaTipoVehiculos  /> 
    <forTipoVehiculos />
    <tblTipoVehiculos />
  </div>
</template>

<script>
import forTipoVehiculos from "@/components/tipovehiculos/ForTipoVehiculos.vue";
import tblTipoVehiculos from "@/components/tipovehiculos/TblTipoVehiculos.vue";
import giaTipoVehiculos from "@/components/tipovehiculos/GiaTipoVehiculos.vue";
export default {
  name: "TipoVehiculo",
  components: {
    forTipoVehiculos,
    tblTipoVehiculos,
    giaTipoVehiculos,
  },
};
</script>

<style scoped>
.dueños {
  text-align: center;
}
</style>