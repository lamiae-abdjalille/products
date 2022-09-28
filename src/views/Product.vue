<template>
  <v-container fluid v-if="product">
    <v-row class="pt-4">
      <v-col cols="4">
        <v-img contain class="white--text" height="300px" :src="product.image">
        </v-img>
      </v-col>
      <v-col cols="8" class="pt-15">
        <h1 class="pt-5">{{ product.title }}</h1>
        <h2 class="pt-5">{{ product.price }} $</h2>
        <div class="pt-5">
          <v-btn color="secondary" 
          elevation="1" large 
          @click="addToCart()"
          >Add To Card</v-btn
          >
        </div>
      </v-col>
    </v-row>
  </v-container>
</template>
<script>
export default {
  name: "product",
  props: ["id"],
  computed: {
    product() {
      return this.$store.state.product
    },
  },
  methods: {
    addToCart() {
      this.$store.dispatch("addProductToCart", {
        product: this.product,
        quantity: 1,
      })
    },
  },

  mounted() {
    this.$store.dispatch("getProduct", this.id)
  },
}
</script>
<style></style>