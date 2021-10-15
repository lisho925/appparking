<template>
  <div class="forTarifas">
    <fieldset>
      <legend>Formulario Tarifas</legend>
      <form action="">
        <label for="idTarifas">ID </label><br>
        <input type="number" name="idTarifas" id="idTarifas" v-model="tarifa.idTarifas"><br>

        <label for="idVehiculo">TIPO VEHICULO</label><br>
        <input type="number" name="idVehiculo" id="idVehiculo" v-model="tarifa.idVehiculo"><br>

        <label for="periodo">PERIODO</label><br>
        <input type="text" name="periodo" id="periodo" v-model="tarifa.periodo"><br >

        <label for="tarifa">TARIFA</label><br>
        <input type="number" name="tarifa" id="tarifa" v-model="tarifa.tarifa"><br><br>

        <button class="btn-guardar" type="submit" v-on:click="guardar()">Guardar</button>
        <button class="btn-borrar" type="submit" v-on:click="eliminar(tarifa.idtarifas)">
          Eliminar
        </button>
      </form>
    </fieldset>
  </div>
</template>

<script>
import axios from "axios"
export default {
  name: "forTarifas",
  data: function () {
    return {
      tarifa: {
        idTarifas: "",
        idVehiculo: "",
        periodo: "",
        tarifa: "",
      }
    }
    },
  
  methods: {
    guardar() {
      axios
        .post("http://localhost:8080/api/tarifa", this.tarifa)
        .then((data) => {
          console.log(data);
        })
    },
    eliminar(id) {
      axios.delete("http://localhost:8080/api/tarifa/" + id)
      .then(data => {
        console.log(data);
      })
    } 
  }
}
</script>


<style scoped>
.forZonas {
  text-align: center;
  padding: 5%;
  font-family: inherit;
}
input, textarea {
  background:white;
  border:2px solid;
  color:black;}
</style>