<template>
  <div class="forPagos">
    <fieldset>
      <legend>Formulario de Pagos</legend>
      <form action="">
        <label for="idRegistro">ID</label><br>
        <input type="number" name="idRegistro" id="idRegistro" v-model="registros.idRegistro"><br>

        <label for="horaSalida">HORA SALIDA</label><br>
        <input type="datetime-local" name="horaSalida" id="horaSalida" v-model="registros.horaSalida"><br >

        <label for="valor">VALOR</label><br>
        <input type="number" name="valor" id="valor" v-model="registros.valor"><br><br>

        <label for="tipoPago">TIPO DE PAGO</label><br>
        <input type="number" name="tipoPago" id="tipoPago" v-model="registros.tipoPago"><br><br> 

        <button class="btn-guardar" type="submit" v-on:click="guardar()">Guardar</button>
        <button class="btn-borrar" type="submit" v-on:click="eliminar(registros.idRegistro)">Eliminar</button>
      </form>
    </fieldset>
  </div>
</template>

<script>
import axios from "axios"
export default {
  name: "forPagos",
  data: function () {
    return {
      registros: {
        idRegistro: "",
        horaSalida: "",
        valor: "",
        tipoPago: "",
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
.forPagos {
  text-align: center;
  padding: 5%;
  font-family: inherit;
}
input, textarea {
  background:white;
  border:2px solid;
  color:black;}
</style>