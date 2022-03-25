<template>
  <div>
    <Navbar />
    <div
      class="text-white d-flex justify-content-center align-items-center mb-5 pt-2"
      style=""
      :style="[
        { 'background-color': 'black', height: '8vh' },
        cart.length > 0
          ? {
              width: '70vw',
              'justify-content': 'left !important',
              'padding-left': '20px',
            }
          : { width: '100vw' },
      ]"
      id="header"
    >
      <h1 style="font-family: Nexa"><b>Food Menu</b></h1>
    </div>
    <div
      class="spinner-border"
      role="status"
      v-if="items.length == 0"
      style="position: absolute; left: 50%; top: 50%"
    >
      <span class="visually-hidden">Loading...</span>
    </div>
    <div
      class="d-flex justify-content-center align-items-center"
      id="menuSection"
      :style="[cart.length > 0 ? { width: '70vw' } : '']"
      v-else
    >
      <div
        style="width: 100%"
        class="d-flex flex-wrap; justify-content-between"
      >
        <div class="row">
          <div
            class="col-3 d-flex flex-column align-items-center"
            v-for="(item, index) in items"
            :key="item.id"
          >
            <b-card
              id="menuItem"
              :title="item.name"
              :img-src="item.image_url"
              img-top
              style="width: 22rem; height: 22rem"
              class="mb-4 p-5"
              @click="$bvModal.show(itemModal + index)"
            >
            </b-card>
            <b-modal :id="itemModal + index" hide-footer>
              <div class="d-flex flex-column align-items-center">
                <b-card
                  :title="item.name"
                  :img-src="item.image_url"
                  img-top
                  style="
                    width: 18rem;
                    border: 0;
                    background-color: black;
                    color: white;
                  "
                  class="mb-4 text-center"
                >
                  <b-card-text
                    class="text-center"
                    style="font-family: Nexa; font-weight: lighter"
                  >
                    <p>Servings: {{ item.description.servings }}</p>
                    <p>
                      Calories per serving: {{ item.description.calories }} kcal
                    </p>
                    <p>Protein per serving: {{ item.description.protein }}g</p>
                    <p>Fat per serving: {{ item.description.fat }}g</p>
                  </b-card-text>
                </b-card>
                <div
                  class="d-flex justify-content-between mb-4"
                  style="width: 80%"
                >
                  <p>Price</p>
                  <p>${{ item.price }}</p>
                </div>
                <div
                  class="w-100 d-flex justify-content-center align-items-center"
                >
                  <form
                    action="api/cart"
                    method="POST"
                    @submit="addToCart(item.id, $event)"
                    id="cartForm"
                  >
                    <input
                      type="text"
                      name="item_id"
                      v-model="item.id"
                      hidden
                    />
                    <input type="text" name="quantity" value="1" hidden />
                    <input
                      type="text"
                      name="subtotal"
                      v-model="item.price"
                      hidden
                    />
                    <input
                      type="submit"
                      value="Add to Cart"
                      class="btn btn-danger"
                      style="font-weight: bold"
                    />
                  </form>
                </div>
              </div>
            </b-modal>
          </div>
        </div>
      </div>
    </div>
    <div
      style="
        position: fixed;
        height: 100vh;
        width: 29vw;
        background-color: #c34234;
        right: 0;
        bottom: 0;
        color: white;
      "
      v-show="cart.length > 0"
    >
      <div
        style="position: absolute; width: 100%; height: 100%; top: 7%"
        class="d-flex flex-column p-3"
      >
        <div class="w-100 text-center mb-3 mt-2">
          <h4><b>Your Order</b></h4>
        </div>
        <div style="height: 70%; width: 100%" class="mb-5">
          <div
            class="d-flex justify-content-between align-items-baseline w-100"
            v-for="item in cart"
            :key="item.id"
          >
            <div style="width: 30%">
              <h6>
                <b>{{ getItemName(item.item_id) }}</b>
              </h6>
            </div>
            <div>
              <h6 style="color: #d1d1d1">
                $ {{ parseFloat(item.subtotal).toFixed(2) }}
              </h6>
            </div>
            <div
              class="d-flex align-items-baseline justify-content-between"
              style="width: 30%"
            >
              <i
                :class="[
                  item.quantity >= 2
                    ? 'fa-solid fa-minus'
                    : 'fa-solid fa-trash-can',
                ]"
                @click="updateQty(item.id, 'subtract')"
              ></i>
              <p>
                <b>{{ item.quantity }}</b>
              </p>
              <i
                class="fa-solid fa-plus"
                @click="updateQty(item.id, 'add')"
              ></i>
            </div>
          </div>
        </div>
        <div
          style="height: 10%; width: 100%"
          class="d-flex flex-column justify-content-between"
        >
          <div class="d-flex justify-content-between align-items-center w-100">
            <div>
              <b>Subtotal:</b>
            </div>
            <div style="color: #d1d1d1">
              $ {{ parseFloat(getTotal()).toFixed(2) }}
            </div>
          </div>
          <div class="d-flex justify-content-between align-items-center w-100">
            <div>
              <b>Total (incl. VAT):</b>
            </div>
            <div style="color: #d1d1d1">
              <b>$ {{ (getTotal() * 0.12 + getTotal()).toFixed(2) }}</b>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style>
#menuItem,
.card {
  border: 0;
}
#menuItem:hover {
  animation: hoverCard 0.2s ease-in forwards;
  background-color: black;
  cursor: pointer;
  border: 3px solid red;
  color: white;
}
.modal-content {
  border: 5px solid red !important;
  color: white !important;
  background-color: black !important;
  display: flex;
}
.fa-trash-can,
.fa-minus,
.fa-plus {
  cursor: pointer;
}
.card-title {
  font-weight: bold;
}

@keyframes hoverCard {
  from {
    background-color: white;
    color: black;
    border: 0;
  }
  to {
    background-color: black;
    border: 3px solid red;
    color: white;
  }
}
</style>

<script>
import Navbar from "../components/Navbar.vue";
import Background from "../components/Background.vue";
import ItemService from "../FoodService";
import CartService from "../CartService";

export default {
  name: "Menu",
  components: {
    Navbar,
    Background,
  },
  data() {
    return {
      items: [],
      item: {},
      cart: [],
      itemModal: "itemModal",
    };
  },
  async created() {
    this.items = await ItemService.getItems();
    console.log(this.items);
    this.cart = await CartService.getCart();
    console.log(this.cart);
  },
  methods: {
    triggerModal(index) {
      var itemModal = new bootstrap.Modal(
        document.getElementById(`itemModal${index}`),
        {
          keyboard: false,
        }
      );
      itemModal.show();
    },
    getItemName(id) {
      for (var i = 0; i < this.items.length; i++) {
        if (this.items[i].id == id) {
          return this.items[i].name;
        }
      }
    },
    getTotal() {
      var total = 0;
      for (var i = 0; i < this.cart.length; i++) {
        total += parseFloat(this.cart[i].subtotal);
      }
      return total;
    },
    async addToCart(id, event) {
      var cartForm = document.getElementById("cartForm");
      event.preventDefault();
      var check = true;
      for (var i = 0; i < this.cart.length; i++) {
        if (id === this.cart[i].item_id) {
          check = false;
          break;
        } else {
          check = true;
        }
      }
      if (check) {
        cartForm.submit();
      } else {
        window.location.href = "menu/";
      }
    },
    async updateQty(id, operation) {
      this.cart = await CartService.updateQty(id, operation);
    },
  },
};
</script>
