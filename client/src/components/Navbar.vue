<template>
  <div
    class="container-fluid d-flex justify-content-between align-items-center pe-5"
    style="
      position: sticky;
      top: 0;
      background-color: white;
      height: 7vh;
      z-index: 98;
    "
  >
    <div class="d-flex align-items-baseline">
      <div style="width: 20%">
        <img src="../assets/img/logo.png" alt="" width="100%" />
      </div>
      <div style="width: 40%">
        <h5 style="font-family: GatwickBold; color: #c34234">
          THE FUJI KITCHEN
        </h5>
      </div>
    </div>
    <router-link to="/" style="font-size: 18px; text-decoration: none; color:black;"
      ><b>HOME</b></router-link
    >    
    <div style="font-size: 18px"><b>ABOUT</b></div>
    <div style="font-size: 18px"><b>FOOD</b></div>
    <div style="font-size: 18px"><b>MY ACCOUNT</b></div>
  </div>
</template>

<script>
export default {
  name: "Navbar",
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
