<template>
  <div class="clas">
    <fieldset>
      <legend>TABLA TARIFAS</legend>
      <table>
        <tr>
          <th>id</th>
          <th>tipo vehiculo</th>
          <th>periodo</th>
          <th>tarifa</th>          
        </tr>
        <tr v-for="tarifa in tarifas" :key="tarifa.idTarifas">
          <td>{{ tarifa.idTarifas }}</td>
          <td>{{ tarifa.tipoVehiculoTarifas }}</td>
          <td>{{ tarifa.periodo }}</td>
          <td>{{ tarifa.tarifa }}</td>
          
        </tr>
      </table>
    </fieldset>

    <router-view />
  </div>
</template>

<script>
import axios from "axios"
export default {
  name: "tbltarifas",
  data() {
    return {
      tarifas: []
    }
  },
  mounted() {
    let vue = this;
    axios.get("http://localhost:8080/api/tarifa/listar").then((response) => {
      vue.tarifas = response.data;
    })
  },
  methods: {}
}
</script>

<style scoped>
.tbltarifas {
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