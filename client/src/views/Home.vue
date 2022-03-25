<template>
  <div>
    <Navbar />
    <Background />
  </div>
</template>
<style>
@import url("https://fonts.googleapis.com/css2?family=Allan:wght@700&display=swap");
@font-face {
  font-family: GatwickBold;
  src: url(../assets/fonts/Gatwick-Bold.otf);
}
@font-face {
  font-family: Nexa;
  src: url(../assets/fonts/Nexa-Bold.otf);
  font-weight: bold;
}
@font-face {
  font-family: Nexa;
  src: url(../assets/fonts/Nexa-Light.otf);
  font-weight: lighter;
}
* {
  font-family: Nexa;
}
</style>
<script>
import Navbar from "../components/Navbar.vue";
import Background from "../components/Background.vue";

export default {
  name: "Home",
  components: {
    Navbar,
    Background,
  },
};
</script>
