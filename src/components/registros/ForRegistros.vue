<template>
  <div class="forRegistros">
    <fieldset>
      <legend>Formulario Registros</legend>
      <form action="">
        <label for="idRegistro">ID</label><br>
        <input type="number" name="idRegistro" id="idRegistro" v-model="registros.idRegistro"><br>

        <label for="placa">PLACA</label><br>
        <input type="text" name="placa" id="placa" v-model="registros.placa"><br>

        <label for="horaIngreso">HORA INGRESO</label><br>
        <input type="datetime-local" name="horaIngreso" id="horaIngreso" v-model="registros.horaIngreso"><br >

         <label for="tipoVehiculo">TIPO VEHICULO</label><br>
        <input type="number" name="tipoVehiculo" id="tipoVehiculo" v-model="registros.tipoVehiculo"><br><br> 

        <label for="zona">ZONA</label><br>
        <input type="number" name="zona" id="zona" v-model="registros.Zona"><br><br>

        <label for="usuario">USUARIO</label><br>
        <input type="number" name="usuario" id="usuario" v-model="registros.usuario"><br><br>

        <button class="btn-guardar" type="submit" v-on:click="guardar()">Guardar</button>
        <button class="btn-borrar" type="submit" v-on:click="eliminar(registros.idRegistro)">Eliminar</button>
      </form>
    </fieldset>
  </div>
</template>

<script>
import axios from "axios"
export default {
  name: "forRegistros",
  data: function () {
    return {
      registros: {
        idRegistro: "",
        placa: "",
        horaIngreso: "",
        tipoVehiculo: "",
        Zona: "",
        usuario: "",
      }
    }
    },
  
  methods: {
    guardar() { 
      axios
        .post("http://localhost:8080/api/registro", this.registros)
        .then((data) => {
          console.log(data);
        }) 
    },
    eliminar(id) {
      axios.delete("http://localhost:8080/api/registro/" + id)
      .then(data => {
        console.log(data);
      })
    } 
  }
}
</script>


<style scoped>
.forRegistros {
  text-align: center;
  padding: 5%;
  font-family: inherit;
}
input, textarea {
  background:white;
  border:2px solid;
  color:black;}
</style>