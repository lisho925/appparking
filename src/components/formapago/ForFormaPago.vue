<template>
  <div class="forFormaPago">
    <fieldset>
      <legend>Formulario Formas de Pago</legend>
      <form action="">
        <label for="idFormaPago">ID</label><br>
        <input type="number" name="idFormaPago" id="idFormaPago" v-model="formaPago.idFormaPago"><br>

        <label for="formaPago">FORMA DE PAGO</label><br>
        <input type="tex" name="formaPago" id="formaPagocformaPago" v-model="formaPago.formaPago"><br >
      
        <button class="btn-guardar" type="submit" v-on:click="guardar()">Guardar</button>
        <button class="btn-borrar" type="submit" v-on:click="eliminar(formaPago.idFormaPago)">
          Eliminar
        </button>
      </form>
    </fieldset>
  </div>
</template>

<script>
import axios from "axios"
export default {
  name: "forFormaPago",
  data: function () {
    return {
      formaPago: {
        idFormaPago: "",
        formaPago: "",
      }
    }
    },
  
  methods: {
    guardar() {
      axios
        .post("http://localhost:8080/api/formaPago", this.formaPago)
        .then((data) => {
          console.log(data);
        })
    },
    eliminar(id) {
      axios.delete("http://localhost:8080/api/formaPago/" + id)
      .then(data => {
        console.log(data);
      })
    } 
  }
}
</script>


<style scoped>
.forFormaPago {
  text-align: center;
  padding: 5%;
  font-family: inherit;
}
input, textarea {
  background:white;
  border:2px solid;
  color:black;}
</style>