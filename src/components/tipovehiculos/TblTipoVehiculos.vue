<template>
  <div class="clas">
    <fieldset>
      <legend>TABLA TIPO DE VEHICULO</legend>
      <table>
        <tr>
          <th>id</th>
          <th>tipo</th>
          </tr>
        <tr v-for="tipoVehiculo in tipoVehiculos" :key="tipoVehiculo.idVehiculo">
          <td>{{ tipoVehiculo.idVehiculo }}</td>
          <td>{{ tipoVehiculo.claseVehiculo  }}</td>
         
          
        </tr>
      </table>
    </fieldset>

    <router-view />
  </div>
</template>

<script>
import axios from "axios"
export default {
  name: "tblVehiculo",
  data() {
    return {
      tipoVehiculos: []
    }
  },
  mounted() {
    let vue = this;
    axios.get("http://localhost:8080/api/tipoVehiculo/listar").then((response) => {
      vue.tipoVehiculos = response.data;
    })
  },
  methods: {}
}
</script>

<style scoped>
.tblZonas {
  padding: 5%;
  text-align: center;
}
table {
  border: 1px solid #000;
  margin: auto;
  padding: 1 px;
}
th {
  border: 1px solid #000;
}
tr,
td {
  width: 20%;
  text-align: left;
  vertical-align: top;
  border: 1px solid #000;
}
</style>