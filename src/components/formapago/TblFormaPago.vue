<template>
  <div class="clas">
    <fieldset>
      <legend>TABLA FORMA DE PAGO</legend>
      <table>
        <tr>
          <th>id</th>
          <th>Forma de Pago</th>
        </tr>
        <tr v-for="formaPago in formasPago" :key="formaPago.idFormaPago">
          <td>{{ formaPago.idFormaPago }}</td>
          <td>{{ formaPago.formaPago }}</td>
        </tr>
      </table>
    </fieldset>

    <router-view />
  </div>
</template>

<script>
import axios from "axios"
export default {
  name: "tblFormaPago",
  data() {
    return {
      formasPago: []
    }
  },
  mounted() {
    let vue = this;
    axios.get("http://localhost:8080/api/formaPago/listar").then((response) => {
      vue.formasPago = response.data;
    })
  },
  methods: {}
}
</script>

<style scoped>
.tblFormaPago {
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