<template>
  <div class="clas">
    <fieldset>
      <legend>TABLA PAGOS</legend>
      <table>
        <tr>
          <th>id</th>
          <th>Placa</th>
          <th>Hora Ingreso</th>
          <th>Tipo Vehiculo</th>
          <th>Zona</th>
          <th>Hora Salida</th>
          <th>Valor</th>
          <th>Tipo Pago</th>
          <th>Usuario</th>
        </tr>
        <tr v-for="registro in registros" :key="registro.idregistro">
          <td>{{ registro.idRegistro }}</td>
          <td>{{ registro.placa }}</td>
          <td>{{ registro.horaIngreso }}</td>
          <td>{{ registro.tipoVehiculoRegistro }}</td>
          <td>{{ registro.zona }}</td>
          <td>{{ registro.horaSalida }}</td>
          <td>{{ registro.valor }}</td>
          <td>{{ registro.tipoPago }}</td>
          <td>{{ registro.usuarioRegistro }}</td>
        </tr>  
      </table>
    </fieldset>

    <router-view />
  </div>
</template>

<script>
import axios from "axios"
export default {
  name: "tblPagos",
  data() {
    return {
      registros: []
    }
  },
  mounted() {
    let vue = this;
    axios.get("http://localhost:8080/api/registro/listar").then((response) => {
      vue.registros = response.data;
    })
  },
  methods: {}
}
</script>

<style scoped>
.tblPagos {
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