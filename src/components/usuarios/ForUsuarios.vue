<template>
  <div class="forZonas">
    <fieldset>
      <legend>Formulario Zonas</legend>
      <form action="">
        <label for="idZonas">ID ZONA</label><br>
        <input type="number" name="idZonas" id="idZonas" v-model="zona.idZonas"><br>

        <label for="nameZona">NOMBRE DE LA ZONA</label><br>
        <input type="text" name="nombreZona" id="nombreZona" v-model="zona.nombreZona"><br>

        <label for="capacidad">CAPACIDAD</label><br>
        <input type="number" name="capacidad" id="capacidad" v-model="zona.capacidad"><br >

        <label for="ocupacion">OCUPACION</label><br>
        <input type="number" name="ocupacion" id="ocupacion" v-model="zona.ocupacion"><br><br>

        <button class="btn-guardar" type="submit" v-on:click="guardar()">Guardar</button>
        <button class="btn-borrar" type="submit" v-on:click="eliminar(zona.idZonas)">
          Eliminar
        </button>
      </form>
    </fieldset>
  </div>
</template>

<script>
import axios from "axios"
export default {
  name: "forZonas",
  data: function () {
    return {
      zona: {
        idZonas: "",
        nombreZona: "",
        capacidad: "",
        ocupacion: "",
      }
    }
    },
  
  methods: {
    guardar() {
      axios
        .post("http://localhost:8080/api/zona", this.zona)
        .then((data) => {
          console.log(data);
        })
    },
    eliminar(id) {
      axios.delete("http://localhost:8080/api/zona/" + id)
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
  color:white;}
</style>