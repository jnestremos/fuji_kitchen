<template>
  <div
    class="d-flex align-items-center justify-content-center"
    style="height: 93vh; width: 100vw; background-color: red"
  >
    <img
      src="../assets/img/bg.png"
      alt=""
      width="100%"
      height="100%"
      style="position: fixed"
    />
    <div
      class="d-flex flex-column align-items-center justify-content-evenly"
      style="
        width: 50%;
        height: 50%;
        background-color: black;
        position: absolute;
        z-index: 99;
        opacity: 0.9;
      "
    >
      <div class="text-center text-white">
        <h1 style="font-family: 'Allan', cursive; font-size: 60px">
          AUTHENTIC JAPANESE CUISINE
        </h1>
        <h1 style="font-family: 'Allan', cursive; font-size: 50px">
          -- SINCE 2022 --
        </h1>
      </div>
      <router-link to="/menu" style="text-decoration: none; color: white"
        ><button class="btn btn-danger">
          <b>Browse Our Menu</b>
        </button></router-link
      >
    </div>
  </div>
</template>

<script>
export default {
  name: "Background",
};
</script>
