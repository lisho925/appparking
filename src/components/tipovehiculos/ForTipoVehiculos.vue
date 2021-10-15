<template>
  <div class="forTipoVehiculo">
    <fieldset>
      <legend>Formulario Tipo Vehiculo</legend>
      <form action="">
        <label for="idVehiculo">ID</label><br>
        <input type="number" name="idVehiculo" id="idVehiculos" v-model="vehiculo.idVehiculo"><br>

        <label for="claseVehiculo">NOMBRE DE LA ZONA</label><br>
        <input type="text" name="claseVehiculo" id="claseVehiculo" v-model="vehiculo.claseVehiculo"><br>
        
        <button class="btn-guardar" type="submit" v-on:click="guardar()">Guardar</button>
        <button class="btn-borrar" type="submit" v-on:click="eliminar(vehiculo.idVehiculo)">
          Eliminar
        </button>
      </form>
    </fieldset>
  </div>
</template>

<script>
import axios from "axios"
export default {
  name: "forTipoVehiculo",
  data: function () {
    return {
      vehiculo: {
        idVehiculo: "",
        claseVehiculo: "",
      }
    }
    },
  
  methods: {
    guardar() {
      axios
        .post("http://localhost:8080/api/tipoVehiculo", this.vehiculo)
        .then((data) => {
          console.log(data);
        })
    },
    eliminar(id) {
      axios.delete("http://localhost:8080/api/tipoVehiculo/" + id)
      .then(data => {
        console.log(data);
      })
    } 
  }
}
</script>


<style scoped>
.forTipoVehiculo {
  text-align: center;
  padding: 5%;
  font-family: inherit;
}
input, textarea {
  background:white;
  border:2px solid;
  color:black;}
</style>