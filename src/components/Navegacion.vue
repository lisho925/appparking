<template>
  <nav>
    <v-app-bar app color="primary" dark>
      <div class="d-flex align-center">
        <v-app-bar-nav-icon @click="drawer = !drawer"></v-app-bar-nav-icon>
        <v-toolbar-title class="font-weight-bold"
          >Parking Controller</v-toolbar-title
        >
      </div>
      <v-spacer></v-spacer>
      <v-btn color="error">
        Logout
        <v-icon right>fa-sign-out-alt</v-icon>
      </v-btn>
    </v-app-bar>

    <v-navigation-drawer app v-model="drawer" color="grey">
      <v-layout mt-4 column align-center>
        <v-flex>
          <v-avatar>
            <img src="../assets/f1.png" alt="" />
          </v-avatar>
        </v-flex>
        <v-flex>
          <p class="white--text mt-3 headline">carlos@empresa.com</p>
        </v-flex>
      </v-layout>
      <v-divider></v-divider>
      <v-layout column>
        <v-flex mx-3>
          <v-btn color="success" block :to="{ name: 'Home' }">
            <v-icon left>fa-house-user</v-icon>
            INICIO
          </v-btn>
          <br />
          <v-btn color="success" block :to="{ name: 'Registro' }">
            <v-icon left>fa-cash-register</v-icon>
            Registrar Vehiculo
          </v-btn>
          <br />
          <v-btn color="success" block :to="{ name: 'Pago' }">
            <v-icon left>fa-hand-holding-usd</v-icon>
            Pago
          </v-btn>
          <br />
          <v-btn color="success" block :to="{ name: 'FormaPago' }">
            <v-icon left>fa-comments-dollar</v-icon>
            Forma de Pago
          </v-btn>
          <br />
          <v-btn color="success" block :to="{ name: 'Tarifas' }">
            <v-icon left>fa-info-circle</v-icon>
            Planes y tarifas
          </v-btn>
          <br />
          <v-btn color="success" block :to="{ name: 'TipoVehiculo' }">
            <v-icon left>fa-car-side</v-icon>
            Clases de Vehiculo
          </v-btn>
          <br />
          <v-btn color="success" block :to="{ name: 'Zonas' }">
            <v-icon left>fa-chess-board</v-icon>
            Zonas
          </v-btn>
          <br />
          <v-btn color="success" block :to="{ name: 'TipoUsuario' }">
            <v-icon left>fa-users</v-icon>
            texto
          </v-btn>
          <br />
          <v-btn color="success" block :to="{ name: 'About' }">
            <v-icon left>fa-align-left</v-icon>
            About
          </v-btn>
        </v-flex>
      </v-layout>
    </v-navigation-drawer>
  </nav>
</template>
<script>
export default {
  data() {
    return {
      drawer: true,
    };
  },
};
</script>