<template>
  <v-app>
    <Navegacion app></Navegacion>
     <v-content class="mp-4">
      <router-view />
    </v-content>
  </v-app>
</template>

<script>
import Navegacion from "@/components/Navegacion"

export default {
  name: 'App',

  components: {
    Navegacion
  },
  data: () => ({
    //
  }),
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  background-color: rgba(219, 210, 190, 0.973);
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
 .card1 {
  background: rgb(213, 226, 226);
  padding: 5px;
  border-radius: 80px;
  margin-right: 15%;
  margin-left: 15%;
  box-shadow: 10px 10px 5px rgb(117, 228, 107);
  font-size: 14px;
  opacity: 0.9;
}
.btn-guardar {
  background-color: green;
  width: 100px;
  height: 30px;
  padding: 5px;
  color: blue;
  text-align: center;
  margin-top: 1em;
  margin-left: auto;
  margin-right: auto;
  border-radius: 30px;
  box-shadow: inset -5px -5px 10px 0 #111;
}

.btn-consultar {
  background-color: rgb(0, 38, 255);
  width: 100px;
  height: 30px;
  padding: 5px;
  color: whitesmoke;
  text-align: center;
  margin-top: 1em;
  margin-left: auto;
  margin-right: auto;
  border-radius: 30px;
  box-shadow: inset -5px -5px 10px 0 #111;
}

.btn-modificar {
  display: inline;
  background-color: orange;
  width: 100px;
  height: 30px;
  padding: 5px;
  color: blue;
  text-align: center;
  margin-top: 1em;
  margin-left: auto;
  margin-right: auto;
  border-radius: 30px;
  box-shadow: inset -5px -5px 10px 0 #111;
}
.btn-borrar {
  background-color: red;
  width: 100px;
  height: 30px;
  padding: 5px;
  color: white;
  text-align: center;
  margin-top: 1em;
  margin-left: auto;
  margin-right: auto;
  border-radius: 30px;
  box-shadow: inset -5px -5px 10px 0 #111;
}

.btn-reset {
  background-color: rgb(88, 139, 173);
  width: 100px;
  height: 30px;
  padding: 5px;
  color: white;
  text-align: center;
  margin-top: 1em;
  margin-left: auto;
  margin-right: auto;
  border-radius: 30px;
  box-shadow: inset -5px -5px 10px 0 #111;
}
</style>
