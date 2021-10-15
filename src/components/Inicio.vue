<template>
  <div class="inicio">
    <h1>{{ msg }}</h1>
    <div class="card1">
      <p>Sistema de control de Parqueadero, aplicable tanto a establecimientos públicos como a conjuntosa recidenciales y centros comerciales</p>
    </div>
        
  </div>
</template>

<script>
export default {
  name: 'Inicio',
  props: {
    msg: String
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
