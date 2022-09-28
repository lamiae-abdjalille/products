<template>
  <v-container fluid>
    <h1>Shopping cart :</h1>
    <v-row v-for="cartItem in cartItems" :key="cartItem.id">
      <v-col cols="2"> </v-col>
      <v-col cols="4">
        <v-img
          contain
          class="white--text"
          height="240px"
          :src="cartItem.product.image"
        ></v-img>
      </v-col>
      <v-col cols="5">
        <h3>{{ cartItem.product.title }}</h3>
        <span class="float-right remove" @click="removeProduct(cartItem.product)"
          >X</span
        >
        <p>{{ cartItem.quantity }} x {{ cartItem.product.price }} $</p>
        <v-btn elevation="2" class="mx-2" @click="incQuantity(cartItem)">+</v-btn>
        <v-btn elevation="2" class="mx-2" @click="descQuantity(cartItem.product)">-</v-btn>
      </v-col>
    </v-row>
  </v-container>
</template>
<script>
export default {
  
  computed: {
    cartItems() {
      return this.$store.getters.cartItems
    },
  },
  methods: {
    removeProduct(product) {
      this.$store.dispatch("removeProduct", product)
    },
    incQuantity(item) {
        this.$store.dispatch("addProductToCart", {
        product: item.product,
        quantity: item.quantity,
      })
    },
    descQuantity(product) {
      this.$store.dispatch("descQuantity", product)
    }
  },
}
</script>
<style scoped>
.remove{
padding : 10px 15px;
border-radius: 100%;
}
.remove:hover{
color: white;
background-color: red;
cursor: pointer;
}
  
</style>