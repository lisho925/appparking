<template>
  <div class="clas">
    <fieldset>
      <legend>TABLA ZONAS</legend>
      <table>
        <tr>
          <th>id</th>
          <th>Nombre</th>
          <th>Capacidad</th>
          <th>Ocupacion</th>          
        </tr>
        <tr v-for="zona in zonas" :key="zona.idZonas">
          <td>{{ zona.idZonas }}</td>
          <td>{{ zona.nombreZona }}</td>
          <td>{{ zona.capacidad }}</td>
          <td>{{ zona.ocupacion }}</td>
          
        </tr>
      </table>
    </fieldset>

    <router-view />
  </div>
</template>

<script>
import axios from "axios"
export default {
  name: "tblZonas",
  data() {
    return {
      zonas: []
    }
  },
  mounted() {
    let vue = this;
    axios.get("http://localhost:8080/api/zona/listar").then((response) => {
      vue.zonas = response.data;
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